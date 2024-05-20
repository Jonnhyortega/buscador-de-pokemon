export async function obtenerDatos(id) {
const URL = "https://pokeapi.co/api/v2/pokemon/"

if(isNumber(id) && filterNumber(id)){

  try {
    const response = await fetch(URL + id);

    if (!response.ok) {
      throw new Error('No se pudo acceder al servidor');
    }

  const data = await response.json();
  return data
    
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }

}else{
  console.log("Por favor ingrese un número valido")
  return false
}
 
  function isNumber(n){
    return typeof n === "number"
  }

  function filterNumber(n){
    return (n >= 1 && n <= 1025)
  }
}


export function createCardTemplate(datos){
  return `
  <div id="card">
  <img src="${datos.sprites.front_default}" alt="Foto del pokemon">
  
  <div id="info-card">
            <h3>${datos.name[0].toUpperCase() + datos.name.slice(1)}</h3>
            <h4>Habilidad principal</h4>
            <span>${datos.abilities[0].ability.name[0].toUpperCase() + datos.abilities[0].ability.name.slice(1)}</span>

            <h4>Peso</h4>
            <span>${Math.ceil(datos.weight * 0.453592)} Kg</span>

            <h4>Estatura</h4>
            <span>${Math.ceil(datos.height * 30.48)} Cm</span>
          <div>      
  </div>
  `
}


