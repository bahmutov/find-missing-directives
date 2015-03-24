(function registerFindMissingDirectives(root) {
  'use strict';

  function isEmpty(node) { return !node || !node.innerHTML || !node.innerHTML.trim(); }

  var htmlNodes = 'a abbr address area article aside audio b base bdi bdo big blockquote body br ' +
    'button canvas caption cite code col colgroup data datalist dd del details dfn ' +
    'dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 ' +
    'h6 head header hr html i iframe img input ins kbd keygen label legend li link ' +
    'main map mark menu menuitem meta meter nav noscript object ol optgroup option ' +
    'output p param picture pre progress q rp rt ruby s samp script section select ' +
    'small source span strong style sub summary sup table tbody td textarea tfoot th ' +
    'thead time title tr track u ul var video wbr'.split(' ');
  var svgNodes = 'circle defs ellipse g line linearGradient mask path pattern polygon polyline ' +
    'radialGradient rect stop svg text tspan'.split(' ');

  var allNodes = htmlNodes.concat(svgNodes);

  function name(node) {
    return node.nodeName.toLowerCase();
  }

  function isCustomTag(node) {
    var tag = name(node);
    if (!tag) {
      return false;
    }
    return allNodes.indexOf(tag) === -1;
  }

  var filter = Array.prototype.filter;
  var map = Array.prototype.map;
  var forEach = Array.prototype.forEach;

  var allTags = [];
  function walkNode(node) {
    allTags.push(node);
    forEach.call(node.children, walkNode);
  }

  function findMissing() {
    var tags = document.querySelectorAll('body > *');
    forEach.call(tags, walkNode);

    var empty = filter.call(allTags, isEmpty);
    var missing = filter.call(empty, isCustomTag);
    return map.call(missing, name);
  }

  root.findMissingDirectives = findMissing;

}(this));
