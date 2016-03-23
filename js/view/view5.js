//ExampleView Object constructor
var View5 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishOverview = container.find("#dishOverview");
	
	this.totalPrice = container.find("#totalPrice");
	this.backToIndex = container.find("#backToIndex");
	this.printReceipe = container.find("#printReceipe");
		
	this.numberOfGuests.html(model.getNumberOfGuests());
	var dishoutput = "";
	for (i = 0; i < model.getFullMenu().length; i++) {
    dishoutput += "<div class='col-md-2 col-md-offset-1' style = 'border:2px solid black;'><img src = '"+model.getFullMenu()[i].image+"' class='img-responsive' ><div class='col-xs-12 col-md-12' style = 'border:2px solid black;background:lightgrey;'><span>"+model.getFullMenu()[i].name+"</span></div>"+model.getDishPrice(model.getFullMenu()[i].id)+"</div>"  ;
       		  
}	
	this.dishOverview.html(dishoutput);
	this.totalPrice.html(model.getTotalMenuPrice());

}
 
