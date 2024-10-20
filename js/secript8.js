let total = 0;
const div1 = document.querySelector('.pp'); 
const btns = document.querySelectorAll('.btn'); 
const totalBtn = document.querySelector('.btn1'); 

btns.forEach(function (button) {
    button.addEventListener('click', function () {
       
        const productName = button.parentElement.querySelector('p').innerText;
        const price = parseFloat(button.getAttribute('price'));

       
        if (div1.style.display === 'none') {
            div1.style.display = 'block';
        }

        
        div1.innerHTML += `<p>${productName}</p>`;

        
        total += price;

        
        totalBtn.style.display = 'block';
    });
});


totalBtn.addEventListener('click', function () {
    
    div1.innerHTML += `<h4>Total Price: ${total.toFixed(2)} SR</h4>`;
});

