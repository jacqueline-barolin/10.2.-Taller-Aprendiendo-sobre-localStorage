document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('dato');
    document.getElementById('data').textContent = savedData ? savedData : 'No hay datos guardados.';
});
