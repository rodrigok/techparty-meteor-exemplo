Meteor.subscribe('cart');

Template.cart.helpers({
	cart: function () {
		return Cart.find({userId: Meteor.userId()});
	},
	totalPrice: function() {
		var total = 0;
		Cart.find({userId: Meteor.userId()}).forEach(function(item) {
			total += item.price * item.quantity;
		});
		return total;
	},
	totalQuantity: function() {
		return Cart.find({userId: Meteor.userId()}).count();
	}
});

Template.cart.events({
	'click button': function(e) {
		Cart.remove(this._id);
	}
});
