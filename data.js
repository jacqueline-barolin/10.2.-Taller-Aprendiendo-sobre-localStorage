document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('dato');

const data = document.getElementById('data').textContent = savedData ? savedData: 'No hay datos guardados.';

});