document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('data');
    document.getElementById('data').textContent = savedData ? savedData : 'No hay datos guardados.';
});
