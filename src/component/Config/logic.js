export const isPresentInFavorites = (favorites, restaurantDTO)=>{
    for(let item of favorites){
        if(item.id === restaurantDTO.id) return true;
    }
    return false;
}
export const categorizeIngredients = (ingredients) =>{
    return ingredients.reduce((acc, ingredient) =>{
        const {category} = ingredient;
        if(!acc[category.name]) acc[category.name] = []
        acc[category.name].push(ingredient)
        return acc;
    }, {})
}