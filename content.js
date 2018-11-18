var products = document.getElementsByClassName("btn--primary product-tile__cta hidden-desktop");
var counter = 0;
for(var j = 0; j < products.length; j++) {
	var productUrl = products[j].href;

	$.ajax({
		type: 'GET',
		url: productUrl,
		dataType: 'json',
		success: function(response) {
			var units = response.product.variants;
			var productInfoString = "";
			for (var i = 0; i < units.length; i++) {
				var weight = units[i].title;
				var price = units[i].price;
				var unitString = weight + ': ' + price + ' ';
				productInfoString += unitString;
			}
			var classTag = '.product-tile__price' + ':eq(' + counter + ')';
			$(classTag).text(productInfoString);
			counter++
		},
		error: function() {
			console.log('Error Loading');
		}
	});
}