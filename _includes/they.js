	$(document).ready(function() {
	  for (var len = col.length, i=0; i<len; ++i) {
	    col[i].loaded = col[i].docs.length-1;
	  }
	  load_gallery();
	});

	function back_to_state(event) {
		null;
	}

	function load_and_update(len, collection_index) {
	    href = col[collection_index].docs[len];
	    $("#"+col[collection_index].name).load(href+" article", function() {
	           $('.gallery', this).each(function() {
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
						 try {
							 FB.XFBML.parse();
						 } catch(ex) {
							 console.log("couldn't parse FB like");
						 }
	   		  });
	    col[collection_index].loaded = len;
	    update_arrows(len, collection_index);
      ga('send', 'pageview', {
        'page': href,
        'title': col[collection_index].titles[len]
      });
    }
