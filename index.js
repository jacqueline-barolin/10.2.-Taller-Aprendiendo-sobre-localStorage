document.addEventListener('DOMContentLoaded', () => {
    
    const buttonText = document.getElementById('buttonText');
    

buttonText.addEventListener('click', function(){
    const inputText = document.getElementById('inputText').value;
    localStorage.setItem('data', inputText)
    document.getElementById('inputText').value = '';
    window.location.href = 'data.html';
})

    
});
