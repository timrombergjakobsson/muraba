$(document).ready(function() {
  console.log($('pre code').each(function(i, e) {hljs.highlightBlock(e, '    ')}));
});