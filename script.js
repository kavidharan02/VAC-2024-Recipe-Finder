
document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let recipes = document.querySelectorAll('.recipe');

    recipes.forEach(function(recipe) {
        if (recipe.textContent.toLowerCase().includes(filter)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
});
