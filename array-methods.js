var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");
/* Use the forEach method to add the name of each planet  to a div element in your HTML with an id of "planets".*/
el.innerHTML =`<h3>Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".</h3>`;
planets.forEach(function(planet){
	el.innerHTML += `${planet}</br>`;
});
// Use the map method to create a new array where the first letter of each planet is capitalized
el.innerHTML +=`</br></br>`;
el.innerHTML+=`<h3>Use the map method to create a new array where the first letter of each planet is capitalized</h3>`;
planets.map(function(planet){
	var arr = planet.split('');
	arr[0] = arr[0].toString().toUpperCase();
	el.innerHTML +=`${arr.join('')}</br>`;
});
// Use the filter method to create a new array that contains planets with the letter 'e'
el.innerHTML+=`<h3>Use the filter method to create a new array that contains planets with the letter 'e'</h3>`;
var newArr = [];
newArr = planets.filter(function(planet){
	return planet.indexOf('e') == -1;
});
newArr.forEach(function(planet){
	el.innerHTML += `${planet}</br>`;
});
// Use the reduce method to create a sentence from the words in the following array
el.innerHTML +=`<h3>Use the reduce method to create a sentence from the words in the following array</h3>`;
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function(prev, curr){
	return `${prev} ${curr} `;
});
el.innerHTML += `${sentence}.`;
