const inputData = document.getElementById("inputText");
const botonIngresar = document.getElementById("buttonText");


botonIngresar.addEventListener("click", () => {
    localStorage.setItem("data", inputData.value);

})
