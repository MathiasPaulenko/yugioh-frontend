import React from 'react'
import { useFilterCard } from '../../../hooks/useFilterCard';

import { BASE_URL } from '../../../helpers/constants.js';
import { Loading } from '../Loading';
import { CardOnList } from './CardOnList';

export const RelatedCards = ({
    title = "Related Cards:",
    cardType = "",
    cardSubtype = "",
    limit = "12",
    archetype = "",
}
) => {

    const queries_filters = {
        type: cardType,
        subtype: cardSubtype,
        limit: limit,
        archetype: archetype
    };


    const { loading, data } = useFilterCard(`${BASE_URL}collection/card/`, queries_filters);
    const cardData = !!data && data.data;

    return (
        <>
            <div className="row mt-5 mb-3 animate__animated animate__fadeIn" >
                <div className="col-sm-12 m-2">
                    <h5 className='mb-3'>{`${title}:`}</h5>

                    <div className='new-line'>

                        {
                            loading
                                ?
                                (
                                    <Loading />
                                )
                                :
                                (
                                    <div className="row mt-3 animate__animated animate__fadeIn">

                                        {
                                            cardData.map(card => (
                                                <CardOnList
                                                    key={card.serial_code}
                                                    name={card.serial_code}
                                                    image={card.img_code}
                                                    card_name={card.name}
                                                    serial_code={card.serial_code}
                                                />
                                            ))
                                        }
                                    </div>
                                )
                       
                       }





                    </div>
                </div>

            </div>
        </>
    )
}
