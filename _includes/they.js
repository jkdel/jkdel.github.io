	function init() {
	  // load contents on start (use jquery instead of liquid because only the content of the article tag should be loaded)
	  for (var len = col.length, i=0; i<len; ++i) {
	    $("#"+col[i].name).load(col[i].docs[col[i].docs.length-1]+" article");
	    col[i].loaded = col[i].docs.length-1;
	  }
	}

	function push_state(href) {
		null;
	}

	function back_to_state(event) {
		null;
	}