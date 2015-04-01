Meteor.publish('products', function() {
	return Products.find();
});

Meteor.publish('cart', function() {
	return Cart.find({userId: this.userId});
});