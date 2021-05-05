// JS that fetches data from server displays random useless facts.

randomFact();

function randomFact(){
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let output = data.text;
        document.querySelector('.random-fact__content').textContent = output;
    })
}; 

// Pop up notifications that asks the user premission to use location data.

