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

	function init() {
		[i,j] = identify();
		col[i].loaded = j;
	}		

	function push_state(href) {
		history.pushState('', 'New URL: '+href, href);
	}

	function back_to_state(event) {
		[i,j] = identify();
		load_and_update(j,i);
	}