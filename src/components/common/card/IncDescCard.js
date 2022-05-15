import React from 'react';

import { BASE_URL } from '../../../helpers/constants.js';

import "../../../statics/css/main.css";


export const IncDescCard = ({ serial_code }) => {

    const handleIncrease = () => {
        fetch(`${BASE_URL}collection/increase/${serial_code}/`).then(window.location.reload());
    };

    const handleDecrease = () => {
        fetch(`${BASE_URL}collection/decrease/${serial_code}/`).then(window.location.reload());
    };

    return (
        <>
            <div className="row card-body mt-3 mb-3 animate__animated animate__fadeInUp shadow rounded" >
                <div className='col-sm-12 m-2'>
                    <h5 className='mb-3'>Controls:</h5>
                    <hr />
                    <div className='row'>

                        <div className='col-sm-1'>
                            <button
                                type="button"
                                className="btn btn-secondary m-2"
                            >
                                Update
                            </button>
                        </div>
                        <div className='col-sm-1'>
                            <button
                                type="button"
                                className="btn btn-danger m-2"
                            >
                                Delete
                            </button>
                        </div>
                        <div className='col-sm-10 align-right'>
                            <button
                                type="button"
                                className="btn btn-outline-secondary card_button m-2"
                                onClick={handleDecrease}
                            >
                                Decrease
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary card_button m-2"
                                onClick={handleIncrease}
                            >
                                Increase
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
