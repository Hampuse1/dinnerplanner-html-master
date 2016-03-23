//ExampleView Object constructor
var View6 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");	
	this.dishPreparation = container.find("#dishPreparation");
	this.backToEdit = container.find("#backToEdit");
		
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	var dishprep = "";
	for (i = 0; i < model.getFullMenu().length; i++) {
	var ingredients = "";
	for(j = 0; j<model.getIngredients(i).length; j++){
		ingredients+= "<div class='col-md-3 col-md-offset-1'>"+model.getIngredients(i)[j].quantity+"</div><div class='col-md-4 col-md-offset-1''>"+model.getIngredients(i)[j].name+"</div>"
	}
	
    dishprep += "<div class='row' ><div class='col-md-1 col-md-offset-1' style = 'border:2px solid black;margin-top:4%;'><img src = '" +model.getFullMenu()[i].image+ "'class='img-thumbnail'></div><div class='col-md-3 col-md-offset-1' style = 'margin-top:2%;'><h3><span>"+model.getFullMenu()[i].name+"</span></h3><br><span>"+ingredients+"</span></div><div class='col-md-4 col-md-offset-1' style = 'margin-top:2%;'><h3>Preparation</h3><br><span>"+model.getFullMenu()[i].description+"</span></div></div>";     		  
	}
	
	this.dishPreparation.html(dishprep);
	
	
	
}
 

