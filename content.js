var products = document.getElementsByClassName("btn--primary product-tile__cta");

console.log(products[0].href);

$.ajax({
	type: 'GET',
	url: products[0].href,
	dataType: 'json',
	success: function(response) {
		console.log(response.product.variants);
		var units = response.product.variants;
		for (var i = 0; i < units.length; i++) {
			console.log(units[i]);
		}
	},
	error: function() {
		console.log('Error Loading');
	}
});