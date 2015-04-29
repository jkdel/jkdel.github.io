	function init() {
	  for (var len = col.length, i=0; i<len; ++i) {
	    col[i].loaded = col[i].docs.length-1;
	  }
	}

	function back_to_state(event) {
		null;
	}

	function load_and_update(len, collection_index) {
	    href = col[collection_index].docs[len];
	    $("#"+col[collection_index].name).load(href+" article");
	    col[collection_index].loaded = len;
	    update_arrows(len, collection_index);
    }