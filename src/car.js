//This is where we define our Car object. 
function Car(make, model, year, color, state, current_owner, previous_owners, passengers){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = state;
	this.current_owner=  current_owner;
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

Car.prototype.pick_up =function(people){
	if (this.state == "on"){
		this.passengers.push(people);
	}
};

Car.prototype.driveTo =function(destination){
	if (this.state == "on"){
		console.log("Driving to " + desination);
	}
};

Car.prototype.park = function(){
	if (this.state== "off"){
		console.log("Parked");
	}
};

Car.prototype.dropOff =function(people){
	if (this.state == "on"){
		this.passengers.splice(people);
	}
	else{
		return("Are you crazy? You can only throw " + people + "out while the car is on. That's how the test was written.");
	}
};

module.exports=Car;