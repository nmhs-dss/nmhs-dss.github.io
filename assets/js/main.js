/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

/* Kanish - function to show/hide the maps */
	$(document).ready(function(){
		$('#param1').on("click", function(){
			$(".params").hide();
			$('#map1').show();
		});

		$('#param2').on("click", function(){
			$(".params").hide();
			$('#map2').show();
		});

		$('#param3').on("click", function(){
			$(".params").hide();
			$('#map3').show();
		});

		$('#param4').on("click", function(){
			$(".params").hide();
			$('#map4').show();
		});

		$('#param5').on("click", function(){
			$(".params").hide();
			$('#map5').show();
		});

		$('#param6').on("click", function(){
			$(".params").hide();
			$('#map6').show();
		});

		$('#param7').on("click", function(){
			$(".params").hide();
			$('#map7').show();
		});

		$('#param8').on("click", function(){
			$(".params").hide();
			$('#map8').show();
		});

		$('#param9').on("click", function(){
			$(".params").hide();
			$('#map9').show();
		});

		$('#param10').on("click", function(){
			$(".params").hide();
			$('#map10').show();
		});
	 });


	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

})(jQuery);