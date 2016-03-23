//ExampleView Object constructor
var View3 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.selectType = container.find("#selectType");
	
	this.alldishes = container.find("#alldishes");
	
	var menuOutput = "";
	for (i = 0; i < model.getAllDishes("main dish").length; i++) {
	menuOutput += "<div class='col-md-2' style = 'background:white;'><img src='"+model.getAllDishes("main dish")[i].image+"' class='img-thumbnail' style='height:100%; width:100%;'> <p align='center' style='border: 2px solid black; background-color:lightgrey;'>"+model.getAllDishes("main dish")[i].name+"</p> <p> "+ model.getAllDishes("main dish")[i].description+" </p></div>";
		
	}
	
	
	this.alldishes.html(menuOutput);
	
	//this.alldishes.html(
	//
	//for (i = 0; i < model.length(dishes); i++) {
		//if (dishes[i].type === "starter";){
		//		<>
				//		<div>
				//		<img src=dishes[i].image class="img-thumbnail" style="height:100%; width:100%;"></div>
				//		<div>
				//			<p align="center" style="border: 2px solid black; background-color:lightgrey;"> dishes[i].name </p>
				//		</div>
				//		<div>
				//			<p> dishes[i].description </p>
						
				//		</div>
				//		</div>
	//	}
	}
	
