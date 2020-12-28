$(function() {
    $('.accordion').accordion({
		active: true,
		heightStyle: 'content',
		header: '> .accordion-item > .accordion-header'
	});
});

$(function() {
    $(".features").sortable();
  });

  $(function() {
    $("#tabs").tabs();
  });