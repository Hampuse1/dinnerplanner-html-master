//ExampleView Object constructor
var View6 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	
	
	this.nameDishOne = container.find("#nameDishOne");
	this.nameDishTwo = container.find("#nameDishTwo");
	this.nameDishThree = container.find("#nameDishThree");
	
	this.pictureDishOne = container.find("#pictureDishOne");
	this.pictureDishTwo = container.find("#pictureDishTwo");
	this.pictureDishThree = container.find("#pictureDishThree");
	
	this.dishOneDescription = container.find("dishOneDescription");
	this.dishTwoDescription = container.find("dishTwoDescription");
	this.dishThreeDescription = container.find("dishThreeDescription");
	
	this.dishOnePreparation = container.find("dishOnePreparation");
	this.dishTwoPreparation = container.find("dishTwoPreparation");
	this.dishThreePreparation = container.find("dishThreePreparation");
	
	this.backToEdit = container.find("#backToEdit");
		
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	
	console.log(model.getFullMenu());
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
	
	
}
 
