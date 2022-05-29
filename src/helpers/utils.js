import { BASE_URL } from './constants.js';

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

export const fetchAddCard = (queries) => {
    let flag = false;
    if (Object.keys(queries).length !== 0) {
        let queries_filters = {}
        for (const query in queries) {
            if (queries[query] !== '')
                queries_filters[query] = queries[query];
        }

        console.log(queries_filters);

        if (!('type' in queries_filters)) {
            flag = false;
            return false;
        }

        if (!('subtype' in queries_filters)) {
            flag = false;
            return false;
        }

        let reqBody = {}

        if (queries_filters.type.toLowerCase() === 'skill') {
            console.log("skill");
        } else if (['trap', 'spell'].includes(queries_filters.type.toLowerCase())) {
            console.log("trampa o magica");

        } else {
            if (queries_filters.subtype.toLowerCase().includes("pendulum")) {
                console.log("pendulu");

            } else if (queries_filters.subtype.toLowerCase().includes("link")) {
                console.log("link");

            } else {
                console.log("monstruo o token");
                reqBody = {
                    card_number: queries_filters["card number"],
                    serial_code: queries_filters["serial code"],
                    name: queries_filters["name"],
                    description: queries_filters["description"],
                    attack: queries_filters["attack"],
                    defence: queries_filters["defence"],
                    type: queries_filters["type"],
                    subtype: queries_filters["subtype"],
                    race: queries_filters["race"],
                    level: queries_filters["level"],
                    attribute: queries_filters["attribute"],
                    rarity: queries_filters["rarity"],
                    archetype: queries_filters["archetype"],
                    edition: queries_filters["edition"],
                    set_name: queries_filters["set name"],
                    img_code: queries_filters["img code"],
                    amount: parseInt(queries_filters["amount"])
                }

                console.log(reqBody);

            }
        }


        fetch(`${BASE_URL}collection/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }).then((response) => {
            console.log(response);
            if(response.ok){
                console.log("ok");

                flag = true;
                return true;
            }else{
                console.log("pasas");
                flag = false;
                return false;
            }
        });
        console.log('aqui tambien pasa');
        console.log(flag);
        return flag;
    }else{
        return false;
    }

}
