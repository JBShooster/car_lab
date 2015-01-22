//This is where we define our Car object. 
function Car(make, model, color){
	this.make = make;
	this.model = model;
	this.year = new Date().getFullYear();
	this.color = color;
	this.state = "off";
	this.current_owner = "Manufacturer";
	this.previous_owners = [];
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(state){
	this.state = "on";
};

Car.prototype.off = function(state){
	this.state = "off";
};

Car.prototype.pick_up =function(person){
	if (this.state === "on"){
		this.passengers.push(person);
	}
};

Car.prototype.driveTo =function(destination){
	if (this.state === "on"){
		console.log("Driving to " + desination);
	}
};

Car.prototype.park = function(){
	if (this.state=== "off"){
		console.log("Parked");
	}
};

Car.prototype.dropOff =function(person){
	if (this.state === "on"){
		if(this.passengers.indexOf(person) != -1){
		this.passengers.splice(this.passengers.indexOf(person), 1);
		}	
	}
	else{
		return("Are you crazy? You can only throw " + person + " out while the car is on. That's how the test was written.");
	}
};

module.exports=Car;