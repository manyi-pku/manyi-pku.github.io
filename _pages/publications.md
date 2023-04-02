---
title: "Man Yi - Publications"
layout: gridlay
excerpt: "Man Yi -- Publications."
sitemap: false
permalink: /publications/
---


# Publications


{% for publi in site.data.publist %}

  {{ publi.title }},
  <em>{{ publi.authors }} </em><br />
  <a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
  [(pdf)]({{ site.baseurl }}/downloads/{{ publi.link.doc }})

{% endfor %}
