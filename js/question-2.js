const key = "6d2a6680aa354c59a5708ec9b8b8fbdd";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const resultsContainer = document.querySelector(".results");
const loader = document.querySelector(".loader");

async function getGames() {

    const response = await fetch(url);
    const jsonResults = await response.json();
    const results = jsonResults.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        console.log(results[i].name)

        resultsContainer.innerHTML += `<div class="">${results[i].name}<\div>`
    }
}

getGames();

