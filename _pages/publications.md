---
layout: page
permalink: /publications/
title: publications
description: List of publications sorted in reversed chronological order. Contact me at chevalier.manuel@gmail.com if you need access to some of the publications.
years: [preprint, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012] ##in press, 
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
