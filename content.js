var products = document.getElementsByClassName("btn--primary product-tile__cta");
var windowWidth = $(window).width();
console.log(windowWidth);

getProductUrls();

function getProductUrls() {
	for(var i = 0; i < products.length; i++) {
		productUrl = products[i].href
		editProductData(i, productUrl);
	}
}

function editProductData(count, productUrl) {
	var classTag = '.product-tile__price' + ':eq(' + count + ')';
	if (windowWidth > 1279) {
		$(classTag).replaceWith( '<ul class="product-tile__price" style="list-style: none; font-size: 1rem;"></ul>');
	} else {
		$(classTag).replaceWith( '<ul class="product-tile__price" style="list-style: none; font-size: 0.75rem;"></ul>');
	}
	$.ajax({
		type: 'GET',
		url: productUrl,
		dataType: 'json',
		success: function(response) {
			var units = response.product.variants;
			var unitListItem = '<li>';
			for (var i = 0; i < units.length; i++) {
				var weight = units[i].title;
				var price = units[i].price;
				if(i === units.length - 1) {
					unitListItem += weight + ': ' + price;
				} else {
					unitListItem += weight + ': ' + price + ' | ';
				}
			}
			$(classTag).append(unitListItem + '</li>');
		},
		error: function() {
			console.log('Error Loading');
		}
	});
}

//verify product type is cannabis before editing post
//if weight is default title remove