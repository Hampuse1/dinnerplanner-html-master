//ExampleView Object constructor
var View2 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	this.totalPrice = container.find("#totalPrice");
	this.totalPrice.html(model.getTotalMenuPrice());	
	
	
	this.writeInfo = container.find("#writeInfo");
	var infobox = "";
	for (i = 0; i < model.getFullMenu().length; i++) {
	infobox += "<div class='col-md-4'><p class='text-danger'>"+model.getNumberOfGuests()+ "</p></div><div class='col-md-4'><p class='text-danger'>"+model.getFullMenu()[i].name+ "</p></div><div class= 'col-md-4'><p align='right' class='text-danger'>"+model.getDishPrice(model.getFullMenu()[i].id)+"</p></div><hr width='50%'></div>";

	}
	infobox += "<div class= 'col-md-6.col-md-offset-6'><p align='right' class='text-danger'> Total Cost: "+ model.getTotalMenuPrice()+"</p></div>";
	this.writeInfo.html(infobox);
	
	
	this.confirmDinner = container.find("confirmDinner");
	
	

	

}

