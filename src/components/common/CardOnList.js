import React from 'react';
import { LARGE_IMG_URL, IMG_EXT } from '../../helpers/constants.js';

export const CardOnList = ({ image, card_name, serial_code }) => {

    return (
        <div className="col-sm-2 m-3 shadow rounded">
            <div className="card card-block border-0">
                <a href={`card/${serial_code}`} >
                    <img className="card-img-top" src={`${LARGE_IMG_URL + image + IMG_EXT}`} alt={`Card ${serial_code}`}></img>
                </a>
                <div className="card-block mt-2">
                    <h6 className="card-title text-center mt-1">{card_name}</h6>
                </div>
            </div>
        </div>
    )
};
