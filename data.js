document.addEventListener("DOMContentLoaded", function(){
    const dataContainer = document.getElementById("data");
    const data = localStorage.getItem("data");
    if (data){
        dataContainer.innerHTML += `<p>${data}</p>`;
    }else {
        dataContainer.innerHTML += `<p>No hay datos</p>`;
    }
    

});
