function searchShow(query){
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    fetch(url)
        .then(res => {
            if(res.status >= 200 && res.status < 400){
                return res.json();
            } else {
                throw 'HTTP ERROR'
            }
        })
        .then(jsonData => {
            console.log(jsonData)
            const results = jsonData.map(element => element.show)
            renderResults(results);
            document.getElementById('errorMessage').innerHTML = '';
        })
        .catch((error) => {
            document.getElementById('errorMessage').innerHTML = error;
            renderResults([]);
        })

}

function renderResults(results){
    const ul = document.querySelector('ul')
    ul.innerHTML = '';
    results.forEach(element => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        const div = document.createElement('div')
        a.setAttribute('href', '#') 
        a.innerText = element.name
        ul.appendChild(div)
        div.appendChild(li)
        li.appendChild(a)

        let img = document.createElement('img')
        img.src = element.image.medium
        div.appendChild(img)
        
    
    });
}

let timeoutToken = 0

window.addEventListener('load', () => {
    const searchFieldElement = document.getElementById('searchField')
    searchFieldElement.addEventListener('keyup', () => {
        clearInterval(timeoutToken)

        if(searchFieldElement.value.trim().length === 0){
            return;
        }
        timeoutToken = setTimeout(() => {
            searchShow(searchFieldElement.value)
        }, 250)
    })
})