function update_arrows(len, collection_index) {
  // update the anchors links for navigation between articles of a collection
  if (len == 0) {
    document.getElementById(col[collection_index].members_id[1]).setAttribute("href",col[collection_index].docs[col[collection_index].docs.length-1]);
    document.getElementById(col[collection_index].members_id[2]).setAttribute("href",col[collection_index].docs[1]);
  } else {
    document.getElementById(col[collection_index].members_id[1]).setAttribute("href",col[collection_index].docs[len-1]);
    if (len == col[collection_index].docs.length-1) {
      document.getElementById(col[collection_index].members_id[2]).setAttribute("href",col[collection_index].docs[0]);
    } else {
      document.getElementById(col[collection_index].members_id[2]).setAttribute("href",col[collection_index].docs[len+1]);
    }
  }
}

function load_gallery() {
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Chargement...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1],
        tPrev: 'Précédent',
        tNext: 'Suivant',
        tCounter: '<span class="mfp-counter">%curr% sur %total%</span>'
      },
      image: {
        tError: '<a href="%url%">L\'image #%curr%</a> n\'a pas pu être chargée.'
      }
    });
  });
}

// functions to load previous and next content
$(function() {
  $('.ajp').click(function(e) {
    e.stopPropagation()
    e.preventDefault();
    // identify collection
    collection_index = $(this).attr("id").split("-")[1];
    if (col[collection_index].docs.length > 1) {
      // load content and update loaded
      if (col[collection_index].loaded == 0) {
        len = col[collection_index].docs.length-1;
      } else {
        len = col[collection_index].loaded-1;
      }
      load_and_update(len, collection_index);
    }
  });

  $('.ajn').click(function(e) {
    e.stopPropagation()
    e.preventDefault();
    // identify collection
    collection_index = $(this).attr("id").split("-")[1];
    if (col[collection_index].docs.length > 1) {
      // load content and update loaded
      if (col[collection_index].loaded == col[collection_index].docs.length-1) {
        len = 0;
      } else {
        len = col[collection_index].loaded+1;
      }
      load_and_update(len, collection_index);
    }

  });

  window.onpopstate = function(event) {
    back_to_state(event);
  };

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
