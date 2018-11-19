var products = document.getElementsByClassName("btn--primary product-tile__cta hidden-desktop");

getProductUrls();

function getProductUrls() {
	for(var i = 0; i < products.length; i++) {
		productUrl = products[i].href
		editProductData(i, productUrl);
	}
}

function editProductData(count, productUrl) {
	console.log(count + ' ' + productUrl);
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
			var classTag = '.product-tile__price' + ':eq(' + count + ')';
			$(classTag).text(productInfoString);
		},
		error: function() {
			console.log('Error Loading');
		}
	});
}