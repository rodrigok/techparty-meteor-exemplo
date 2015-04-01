Meteor.subscribe('products');

Template.products.helpers({
	products: function () {
		return Products.find();
	}
});

Template.products.events({
	'click button': function(e) {
		var quantity = parseInt($(e.delegateTarget).find('[name=quantity]').val());
		var cart = Cart.findOne({userId: Meteor.userId(), productId: this._id});
		if (cart) {
			Cart.update(cart._id, {$inc: {quantity: quantity}});
		} else {
			Cart.insert({userId: Meteor.userId(), productId: this._id, productTitle: this.title, quantity: quantity, price: this.price});
		}
	}
});
