/* eslint no-restricted-globals: 'off' */

import { movies } from "./data";

// Turn duration of the movies from hours to minutes
// export function turnHoursToMinutes(arraycualquiernombre) {
// let newarray= arraycualquiernombre.map(function(estoesunparametro){
//     let duration = estoesunparametro.duration;
//     let arrayDuration = duration.split("h")
//     let hoursToMinutes = parseInt(arrayDuration[0])*60;
//     let minutesNumber = parseInt(arrayDuration[1])
//     let durationInMinutes;
//     //EL SIGNO DE ADMIRACION NIEGA LAS COSAS
//     if (!isNaN(minutesNumber)){
//       durationInMinutes = hoursToMinutes + minutesNumber;
//     }else{
//       durationInMinutes = hoursToMinutes;
//     }
//      // estoesunparametro.duration = durationInMinutes;
//     const newelementesunparametro = {...estoesunparametro,duration:durationInMinutes}
//       console.log(newelementesunparametro)
//     return  newelementesunparametro

//   })
//   return newarray
// }
export function turnHoursToMinutes(array) {
  let newArray = array.map(function(element){
      let duration = element.duration;
      let arrayDuration = duration.split("h")
      if (arrayDuration.length == 1) {
          arrayDuration.unshift('0')
      }
      let hoursToMinutes = parseInt(arrayDuration[0])*60;
      let minutesNumber = parseInt(arrayDuration[1])
      let durationInMinutes;
      if (!isNaN(minutesNumber)) {
          durationInMinutes = hoursToMinutes + minutesNumber;
      } else {
          durationInMinutes = hoursToMinutes;
      }
      // element.duration = durationInMinutes;
      return {...element,duration:durationInMinutes}
  })
  console.log(array)
  return newArray
}

/******************************************************* */
//
// Get the average of all rates with 2 decimals
/*array tiene elementos*/
export function ratesAverage(array){
  //declarar una variable la pones con let o const
  let total = array.reduce(function(acum,element){
//puedo obtener lo de element sacandolo de la cajita con el punto rate
//parseFloat acepta decimales
    let elementNumber = parseFloat(element.rate)
    acum += elementNumber;
      //console.log(acum)
      return acum;
    //se pone el cero para que el inicializador empiece como un number
  },0)

 // console.log (total)
let average =total/array.length
 //con el mas convierte un string a number
return +average.toFixed(2)
}


/**************************************************************/
// Get the average of Drama Movies

export function dramaMoviesRate(array){
  let dramaMovies = array.filter(function(element){
    if(element.genre.includes("Drama")){
      return element.director = "";
    }
  })
  console.log(dramaMovies)
  if(dramaMovies.length > 0){
  return ratesAverage(dramaMovies);
}else{
  return undefined
}
}

// Order by time duration, in growing order

export function orderByDuration(array){
  //let durationConverted = turnHoursToMinutes(array)
  if(array.length==1){
    return array
  }
  let sorted = array.sort((a,b)=>{
    if((a.duration - b.duration)===0){
      if (a.title>b.title){
        return 1
    }else{
        return-1
    }
//   return a.title.localeCompare(b.title);
}
return a.duration - b.duration;
});

return sortedArray;
}

//       return b.title - a.title
//     }else{
//       return a.duration - b.duration
//     }
//   })
//   console.log(sorted)
//   return sorted
// }

/********************************************************************************************************/


// How many movies did STEVEN SPIELBERG

// Filtrar las películas por género 'Drama' y director 'Steven Spielberg'
export function howManyMovies(array) {
  if (array.length === 0) return undefined;
  let newMovies = array.filter((element) => {
      // element.director = "Steven Spielberg";
      if (element.genre.includes("Drama") && element.director == "Steven Spielberg")
          return element
  })
  return `Steven Spielberg directed ${newMovies.length} drama movies!`
}


// Order by title and print the first 20 titles
export function orderAlphabetically(array) {
  const newArray = [];
  let limit = 20;
  let sorted =  array.sort((a,b)=> {
      if (a.title > b.title){
              return 1
          }
          if (b.title > a.title){
              return -1
          } return 0
      })

  if (array.length < 20) {
      limit = array.length;
  }
  for(let i=0; i < limit; i++){
      newArray.push(array[i].title);
  }
  return newArray

  console.log(newArray)
}
//metodo localeCompare
// // Best yearly rate average
// export function bestYearAvg(array) {

// }
// export function orderAlphabetically(array) {
//     const sortedArray = array.sort((a, b) => 

//     a.title.localeCompare(b.title));
//     console.log(sortedArray);

//     const newArray = [];
//     let limit = 20;
//     if (array.length < 20) {
//       limit = array.length;
//     }
//     for (let i = 0; i < limit; i++) {
//       newArray.push(sortedArray[i].title);
//     }

//     return newArray;
//   }

/**************************************************************** */

export function bestYearAvg (array){


  
}