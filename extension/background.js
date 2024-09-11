const btn = document.querySelector('.jokebutton');

btn.addEventListener('click', () => {
    const para = document.querySelector('.jokecode');
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then((Response) => {
        return Response.json();
    })
    .then((joke) => {
        para.innerHTML = `${joke.punchline}`;
    })
})