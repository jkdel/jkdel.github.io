var col = new Array();{% for collection in site.collections %}{% if collection.docs[0] %}{% capture id_prefix %}{{collection.label}}-{{forloop.index | minus:1 }}{% endcapture %}
col.push({name: "{{ collection.label }}", docs: {{ collection.docs | map: 'url' | jsonify }}, titles: {{ collection.docs | map: 'title' | jsonify }}, loaded: -1, members_id: ["{{id_prefix}}-goto-left","{{id_prefix}}-arrow-left","{{id_prefix}}-arrow-right","{{id_prefix}}-goto-right"]});{% endif %}{% endfor %}
{% include common_no_liquid.min.js %}
