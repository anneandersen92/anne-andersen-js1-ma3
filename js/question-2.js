const key = "6d2a6680aa354c59a5708ec9b8b8fbdd";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const resultsContainer = document.querySelector(".results");
const loader = document.querySelector(".loader");

let html = "";

async function getGames() {
    try {
        const response = await fetch(url);
        const jsonResults = await response.json();
        const results = jsonResults.results;

        for (let i = 0; i < results.length; i++) {
            html += `<div class="games">
                        <h2 class="name">${results[i].name}</h2>
                        <p class="rating">Rating: ${results[i].rating} / 5</p>
                        <p class="tags">Tags: ${results[i].tags.length}</p>
                    </div>`

            if (i===7){
                break;
            }
        }
    } catch(error) {
        html += `<div class="error">
                <h2>An error occured!<\h2>
                <p>${error}</p>
                <\div>`
    } finally {
        resultsContainer.innerHTML = html;
    }
}

getGames();

