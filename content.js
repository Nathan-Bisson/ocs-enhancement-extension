var products = document.getElementsByClassName("btn--primary product-tile__cta hidden-desktop");

getProductUrls();

function getProductUrls() {
	for(var i = 0; i < products.length; i++) {
		productUrl = products[i].href
		editProductData(i, productUrl);
	}
}

function editProductData(count, productUrl) {
	var classTag = '.product-tile__price' + ':eq(' + count + ')';
	$(classTag).replaceWith( '<ul class="product-tile__price" style="list-style: none;"></ul>');
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
				var unitListItem = '<li>' + weight + ': ' + price + '</li>';
				$(classTag).append(unitListItem);
				//productInfoString += unitString;
			}
			//$(classTag).text(productInfoString);
		},
		error: function() {
			console.log('Error Loading');
		}
	});
}