import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a class="name" href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}


function tagsTemplate(tags) {
    let html = '';
    for (let tag of tags) {
        html += `<li>${tag}</li>`;
    }
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += `</span>`;
    return html;
}


function renderRecipes(recipeList) {
    const outputElement = document.getElementById('recipe-container');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipesHTML;
}

function filter(query) {
    const lowercaseQuery = query.toLowerCase();

    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(lowercaseQuery);
        
        const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery));

        return nameMatch || tagMatch;
    });
    const sorted = filtered.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sorted;
}




function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();

    const filteredRecipes = filter(query);

    renderRecipes(filteredRecipes);
}



function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

document.getElementById('searchForm').addEventListener('submit', searchHandler);

init();
