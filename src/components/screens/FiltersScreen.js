import { useLocation, useNavigate  } from 'react-router-dom';
import queryString from 'query-string'

import { useFilterCard } from '../../hooks/useFilterCard';
import { CardOnList } from "../common/card/CardOnList";
import { InputField, SelectField } from "../common/search/InputField"
import { Title } from "../common/Title"
import { Loading } from "../common/Loading";
import { BASE_URL } from '../../helpers/constants.js';

export const FiltersScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queries = queryString.parse(location.search);


    let queries_filters = {}
    for (const query in queries) {
        if (queries[query] !== '')
            queries_filters[query] = queries[query];
    }
    const { loading, data } = useFilterCard(`${BASE_URL}collection/card/`, queries_filters);

    const card_data = !!data && data.data;

    const handleReset = () => {
        navigate('/filters');
    };

    return (
        <>
            <div className='row mt-3 align-items-center'>
                <Title value='Filters' />
            </div>
            <form className="">
                <div className="row ">
                    <InputField type="number" info="Amount" autoComplete="off" />
                    <SelectField path="info/card_races" name="Race" />
                    <InputField type="text" info="Attirbute" />
                    <InputField type="text" info="Description" />
                    <InputField type="number" info="Level" autoComplete="off" />
                    <SelectField path="info/types/" name="Type" />
                    <SelectField path="info/subtype/" name="Subtype" />
                    <SelectField path="info/rarity/" name="Rarity" />
                    <InputField type="text" info="Name" />
                    <InputField type="text" info="Serial Code" />
                    <InputField type="text" info="Card Number" />
                    <InputField type="text" info="Archetype" />
                    <InputField type="number" info="Attack" autoComplete="off" />
                    <InputField type="number" info="Defence" autoComplete="off" />
                    <div className="col-sm-3 mt-2 mb-2">
                        <button
                            className="btn btn-secondary form-control"
                            type="submit">
                            Filter
                        </button>
                    </div>
                    <div className="col-sm-3 mt-2 mb-2">
                        <button
                            className="btn btn-outline-secondary form-control"
                            type="reset"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>

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
                                    if (queries_filters === '') {
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
                                        return (card_data.length === 0) && <div className="alert alert-danger">No concurrency found. </div>
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
