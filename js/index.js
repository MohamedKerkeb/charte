// button random

function randUsers() {
    var users = ['William', 'Cécile', 'Vincent', 'Romain', 'Aline', 'Isabelle', 'Julian', 'Mohammed', 'Blandine', 'Paul-Emmanuel', 'Thomas', 'Elodie', 'Noredinne', 'Sana'];
    var randNum = Math.floor(Math.random() * users.length);
    document.getElementById('button-random').innerHTML = users[randNum];
    document.getElementById("button-random").disabled = true;
    setTimeout(function(){
        document.getElementById('button-random').innerHTML = 'RANDOM APPRENANT';
        document.getElementById("button-random").disabled = false;
    }, 3000);
}

// accordeon

let title = document.querySelectorAll(".titre")
console.log(title)

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function () {
        console.log('lol')
        let result = this.nextElementSibling;
        result.classList.toggle("active")
    })
    
}