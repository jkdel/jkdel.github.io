	function identify() {
		// need to set loaded _content for the current collection for he arows to work
		page_col = location.pathname.split("/")[1];
		for (var len = col.length, i=0; i<len; ++i) {
			if (col[i].name == page_col) {
				for (var len2 = col[i].docs.length, j=0; j<len2; ++j) {
					if (col[i].docs[j] == location.pathname) {
						break;
					}
				}
				break;
			}
		}
		return [i,j];
	}

	$(document).ready(function() {
		ij = identify();
		col[ij[0]].loaded = ij[1];
	});

	function push_state(href) {
		history.pushState('', 'New URL: '+href, href);
	}

	function back_to_state(event) {
		ij = identify();
		load_and_update(ij[1],ij[0]);
	}

	function load_and_update(len, collection_index) {
      if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        col[collection_index].loaded = len;
        window.location = col[collection_index].docs[len];
      } else {
        href = col[collection_index].docs[len];
        $("#"+col[collection_index].name).load(href+" article");
        col[collection_index].loaded = len;
        update_arrows(len, collection_index);
        push_state(href);
      }
    }