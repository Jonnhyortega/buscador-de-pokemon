import "./style.css";
import { obtenerDatos, createCardTemplate } from "./consumoId";
export const input = document.querySelector("#input");
export const minusBtn = document.querySelector("#minus-btn");
export const plusBtn = document.querySelector("#plus-btn");

document.querySelector("#search-btn").addEventListener("click", async () => {
  try {
    let data = await obtenerDatos(parseInt(input.value));
    let dataDom = createCardTemplate(data);
    document.querySelector("#container-card").innerHTML = ` ${dataDom} `;
  } catch (error) {
    document.querySelector("#container-card").innerHTML = `
    El numero ${inputNumber.value} esta entre el 1 y el 1025?
    <img src="/meme.jpg" alt="Foto del negro que no entiende nada">
    `;
    console.error("Error al realizar la solicitud:", error);
  }
});

// FUNCTION TO ADD AND SUBTRACT INPUT.VALUE
let ids;

minusBtn.addEventListener("click", async () => {
  ids = parseInt(input.value) - 1;
  await handleInputChange(ids);
  input.value = ids;
});

plusBtn.addEventListener("click", async () => {
  ids = parseInt(input.value) + 1;
  await handleInputChange(ids);
  input.value = ids;
});

async function handleInputChange(ids) {
  try {
    let data = await obtenerDatos(ids);
    let dataDom = createCardTemplate(data);
    document.querySelector("#container-card").innerHTML = ` ${dataDom} `;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}
