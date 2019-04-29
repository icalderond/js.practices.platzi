const API_URL = 'https://swapi.co/api/'
const PEOLPE_URL = 'people/:id'

// first parameter
const personUrl = `${API_URL}${PEOLPE_URL.replace(':id',1)}`
//second parameter
const opts = { crossDomain: true }

const onPeopleResponse = function(person){
  console.log(`Hola yo soy ${person.name}`);
}

$.get(personUrl,opts,onPeopleResponse)


//arguments : Variable que recibe todos los arrys functions
// console.log(arguments);
