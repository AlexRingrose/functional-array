const Animals = [
	{name:"Fluffykins",species:"rabbit"},
	{name: "Caro" , species: "dog" },
	{name: "Hamilton" , species: "dog"},
	{name: "Harold", species: "fish"},
	{name: "Ursula" , species: "cat"},
	{name: "Jimmy", species: "fish"}
];

const arrayFilter = function(array){
    let dogs = array.filter(word => word.species === "dog");
    console.log(dogs);
};

arrayFilter(Animals);