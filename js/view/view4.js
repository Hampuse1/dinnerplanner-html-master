//ExampleView Object constructor
var View4 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.confirmDinner = container.find("#confirmDinner");
	
	
	this.confirmDish = container.find("#confirmDish");
	
	this.backToSelect =container.find("#backToSelect");
	
	
	this.writeIngredients = container.find("#writeIngredients");
	this.price= container.find("#price");
	
	this.dishImage= container.find("#dishImage")
	var img = "<img src='"+model.getFullMenu()[0].image+"' class='img-thumbnail' style='height:50%; width:50%; margin-bottom: 5%;'>";
	
	this.dishName= container.find("#dishName")
	var dishName = "<h3>"+model.getFullMenu()[0].name+"</h3>";
	
	this.dishText= container.find("#dishText")
	var desDish = "<p>"+model.getFullMenu()[0].description+"<p>";
	
	var menuOutput = "";
	for (i = 0; i < model.getIngredients(0).length; i++) {
	menuOutput += "<div class='row'><div class='col-md-3' style = ' margin-left:2%;'>"+4*(model.getIngredients(0)[i].quantity)+ " "+model.getIngredients(0)[i].unit+"</div><div class='col-md-3' style = ''>"+model.getIngredients(0)[i].name+"</div><div class='col-md-3' style = ''><p>SEK</p></div><div class='col-md-3' style = ' margin-left:-2%;'>"+4*(model.getIngredients(0)[i].price)+"</div></div>";
		
	}
		this.dishImage.html(img);
		this.dishName.html(dishName);
		this.dishText.html(desDish);
	
	this.price.html(model.getDishPrice(model.getFullMenu()[0].id))
	
	this.writeIngredients.html(menuOutput);
}