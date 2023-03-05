const key = "6d2a6680aa354c59a5708ec9b8b8fbdd";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const resultsContainer = document.querySelector(".results");
const loader = document.querySelector(".loader");

async function getGames() {

    const response = await fetch(url);
    const jsonResults = await response.json();
    const results = jsonResults.results;

    console.log(results)

    html = "";

    for (let i = 0; i < results.length; i++) {
        html += `<div class="games">
                    <h3 class="name">🎮 ${results[i].name}<\h3>
                    <p class="rating">⭐ ${results[i].rating}/5<\p>
                    <p class="tags">🏷️ ${results[i].tags.length}<\p>
                <\div>`

        if (i===7){
            break;
        }
    }

    resultsContainer.innerHTML = html;
}

getGames();

