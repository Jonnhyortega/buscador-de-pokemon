import "./style.css";
import { obtenerDatos, createCardTemplate } from "./consumoApi"
export const input = document.querySelector("#input")
export const minusBtn = document.querySelector("#minus-btn")
export const plusBtn = document.querySelector("#plus-btn")
export const searchBtn = document.querySelector("#search-btn")

init()



function init() {
  
//LISTENER TO #SERACHBTN
searchBtn.addEventListener("click", async () => {
  try {
    let data = await obtenerDatos(parseInt(input.value));
    let dataDom = createCardTemplate(data);
    document.querySelector("#container-card").innerHTML = ` ${dataDom} `;
  } catch (error) {
    console.log("Error al realizar la solicitud: El numero ingresado no es correcto, tiene que estar entre 1 y 1025");
    document.querySelector("#container-card").innerHTML = `<span style="color:white; font-size: 2rem""> El numero que ingresaste es ${input.value}, no corresponde a un id Pokemon</span>`;

  }
});

// LISTENERS TO MINUS AND PLUS BTN
let ids;

minusBtn.addEventListener("click", async () => {
  ids = parseInt(input.value) - 1;
  await handleInputChange(ids);
  input.value = ids;
});

plusBtn.addEventListener("click", async () => {
  if(input.value === 1025){
    document.querySelector("#container-card").innerHTML = ` No encontramos el pokemon con el id ${ids} `;
  }
  else {
    ids = parseInt(input.value) + 1;
    await handleInputChange(ids);
    input.value = ids;
  }
});

async function handleInputChange(ids) {
  try {
    let data = await obtenerDatos(ids);
    let dataDom = createCardTemplate(data);
    document.querySelector("#container-card").innerHTML = ` ${dataDom} `;
  } catch (error) {
    document.querySelector("#container-card").innerHTML = `<span style="color:white; font-size: 2rem""> El numero que ingresaste es ${ids}, no corresponde a un id Pokemon</span>`;
  }
}

}

