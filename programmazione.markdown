---
layout: page
title: Programmazione
permalink: /programmazione
---

<div class="container">
  <h1 class="heading">Programmazione</h1>
  <h2>Python</h2>
  <h2>HTML</h2>
  | 
  {% for tutorial in site.html %}
      <a href="{{ tutorial.url }}">
        {{ tutorial.title }}
      </a> |
  {% endfor %}
  <h2>CSS</h2>
  <h2>C</h2>
  <h2>C++</h2>
  <h2>Java</h2>
  <h2>SQL</h2>
  <h2>PHP</h2>
</div>