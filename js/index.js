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