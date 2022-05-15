export const parsedDescription = (description) => {
    return description.replaceAll('\\\\', '\\').replaceAll('\\r', '').replaceAll('\\n', '<br>').replaceAll('\\', '');
}


export const getRarityIconOrNot = (rarity) => {
    const rarities = ['Common', 'Rare', 'Super rare', 'Ultra rare'];

    if (rarities.includes(rarity))
        return `/assets/img/rarity/${rarity}.png`;
    else
        return null;

}