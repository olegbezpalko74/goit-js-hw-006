const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((categories) => {
    console.log(`Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`);

});