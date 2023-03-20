
// fetch("https://gogoanime.consumet.stream/search?keyw=naruto")
//   .then((response) => { return response.json()})
//   .then((animelist) => { console.log(animelist[0].animeUrl)});

// cardContainer.innerHTML = "hello"

const key = "anime"
const name = localStorage.getItem(key)
console.log(name)

fetch(`https://gogoanime.consumet.stream/search?keyw=${name}`)
    .then((response) => { return response.json() })
    .then((animelist) => {
        console.log(animelist)
        ihtml = ""

        for (item in animelist) {
            ihtml += `<div class="card" style="width: 15rem;">
        <img src="${animelist[item].animeImg}"
        class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${animelist[item].animeTitle}</h5>
        <p class="card-text">${animelist[item].status}</p>
        <a href="${animelist[item].animeUrl}" class="btn btn-primary">Watch Now</a>
        </div>
        </div>`
        }
        cardContainer.innerHTML = ihtml
    });



