import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useCard } from "../../hooks/useCard";
import { useForm } from '../../hooks/useForm';

import { CardOnList } from "../common/card/CardOnList";
import { Title } from "../common/Title";
import { Loading } from "../common/Loading";
import { BASE_URL } from '../../helpers/constants.js';
import { SearchCard } from '../common/search/SearchCard';


export const CollectionsScreen = () => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange, reset] = useForm({
        searchText: q,
    });

    const { loading, data } = useCard(`${BASE_URL}collection/card/?name=${q}`);

    const card_data = !!data && data.data;


    return (
        <>
            <div className='row mt-3 align-items-center'>
                <Title value='List of Cards' />
            </div>

            <SearchCard
                value={formValues}
                handle={handleInputChange}
                reset={reset}
            />

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
                                (() => {
                                    if (q === '') {
                                        card_data.map((card, index) => {
                                            return <CardOnList
                                                key={index}
                                                name={card.serial_code}
                                                image={card.img_code}
                                                card_name={card.name}
                                                serial_code={card.serial_code}
                                            />
                                            
                                        });

                                    } else {
                                        return (card_data.length === 0) && <div className="alert alert-danger">No concurrency found: {q} </div>
                                    };
                                })()
                            }

                            {
                                card_data.map(card => (
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

        </>
    )
}
