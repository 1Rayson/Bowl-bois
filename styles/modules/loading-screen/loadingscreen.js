console.log('hello')

onload();

function onload(){
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let output = '';
            output +=`
            <p>${data.text}</p>
            `
        document.querySelector('.insertFact').innerHTML = output;
    })
}; 