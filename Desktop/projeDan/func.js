$(document).ready(function() {
	$('#appetizers').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'Appetizers.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#salads').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'salads.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#soup').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'soup.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#rice_dishes').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'rice_dishes.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#sushi').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'sushi.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#noodles').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'noodles.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#tofu').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'tofu.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#fish_seafood').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'fish.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#chicken').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'chicken.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#vegetables').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'vegetables.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#season').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'season.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#seafood').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'seafood.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	
	$('#kombu').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'kombu.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#items').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'items.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#tools').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'tools.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#culture').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'culture.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#esaki').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'esaki.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
	$('#ganpachi').on('click', '', function(){
		$.ajax({
			type: 'GET',
			url: 'ganpachi.html',
			success: function(responseText){
				$('.table1').html(responseText);
			}
		});
	});
});