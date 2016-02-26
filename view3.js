//ExampleView Object constructor
var View3 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.dishOneDescription = container.find("dishOneDescription");
	this.dishTwoDescription = container.find("dishTwoDescription");
	this.dishThreeDescription = container.find("dishThreeDescription");
	
	this.dishOnePreparation = container.find("dishOnePreparation");
	this.dishTwoPreparation = container.find("dishTwoPreparation");
	this.dishThreePreparation = container.find("dishThreePreparation");
	
	this.totalPrice = container.find("#totalPrice");
	this.backToIndex = container.find("#backToIndex");
	this.backToEdit = container.find("#backToEdit");
	this.printReceipe = container.find("#printReceipe");
		
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.priceDishOne.html(model.);
	this.priceDishTwo.html(model.);
	this.priceDishThree.html(model.);
	
	this.nameDishOne.html(model.getFullMenu()[0].name);
	this.nameDishTwo.html(model.getFullMenu()[1].name);
	this.nameDishThree.html(model.getFullMenu()[2].name);
	
	this.pictureDishOne.html(model.getFullMenu()[0].image);
	this.pictureDishTwo.html(model.getFullMenu()[1].image);
	this.pictureDishThree.html(model.getFullMenu()[2].image);
	
	this.dishOneDescription.html(model.getFullMenu()[0].ingredients);
	this.dishTwoDescription.html(model.getFullMenu()[1].ingredients);
	this.dishThreeDescription.html(model.getFullMenu()[2].ingredients);
	
	this.dishOnePreparation.html(model.getFullMenu()[0].description);
	this.dishTwoPreparation.html(model.getFullMenu()[1].description);
	this.dishThreePreparation.html(model.getFullMenu()[2].description);
	
	this.totalPrice.html(model.getTotalMenuPrice());
	
}
 
