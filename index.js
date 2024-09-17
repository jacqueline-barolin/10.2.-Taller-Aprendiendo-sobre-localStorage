document.addEventListener('DOMContentLoaded', () => {
    
    const buttonText = document.getElementById('buttonText');
    

buttonText.addEventListener('click', function(){
    const inputText = document.getElementById('inputText').value;
    localStorage.setItem('dato', inputText)
    document.getElementById('inputText').value = '';
    window.location.href = 'data.html';
})

    
});