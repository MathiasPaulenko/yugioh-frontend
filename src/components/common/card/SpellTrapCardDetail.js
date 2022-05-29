import React from 'react';
import { LARGE_IMG_URL, IMG_EXT } from '../../../helpers/constants.js';
import { getRarityIconOrNot } from '../../../helpers/utils.js';

import "../../../statics/css/main.css"

export const SpellTrapCardDetail = ({ card }) => {
    const {
        card_number,
        serial_code,
        img_code,
        subtype,
        type,
        race,
        rarity,
        edition,
        set_name,
        amount,
        archetype
    } = card;

    const imgSubtype = `/assets/img/type/${subtype}.jpg`;
    const imgRace = `/assets/img/other_race/${race}.png`;
    const imgRarity = getRarityIconOrNot(rarity);
    const imgAttribute = `/assets/img/attribute/${type.toUpperCase()}.png`;

    const arch = archetype || "None"

    return (
        <>
            <div className="row m-6 mt-3 animate__animated animate__fadeInLeft shadow rounded" >

                <div className="col-sm-3 p-0">
                    <div className="card card-block border-0">
                        <img className="card-img-top" src={`${LARGE_IMG_URL + img_code + IMG_EXT}`} alt={`Card ${serial_code}`}></img>
                    </div>

                </div>
                <div className="col-sm-9">
                    <div className="p-3 container">
                        <div className='row'>
                            <div className='col-sm-4'>
                                <h5 className='col-sm-3'>Details:</h5>
                            </div>
                            <div className='col-sm-4 align-right'>
                                <span><strong>Card Number:</strong> {card_number}</span>
                            </div>
                            <div className='col-sm-4 align-right'>
                                <span><strong>Serial Code:</strong> {serial_code}</span>
                            </div>
                        </div>

                        <hr />

                        <div className='mt-4'>
                            <div className='container'>

                                <div className='row align-items-center text-center'>
                                    <div className='col-sm-4'>
                                        <span className='m-2'><strong>Type:</strong></span>
                                        <span className='m-2 type-icon-15'><img className="" src={imgSubtype} alt='Skill Card'></img></span>
                                        <span className='m-2'>{subtype}</span>
                                    </div>
                                    <div className='col-sm-4'>
                                        <span className='m-2'><strong>Attribute:</strong></span>
                                        <span className='m-2 type-icon-10'><img className="" src={imgAttribute} alt='Skill Card'></img></span>
                                        <span className='m-2'>{type}</span>
                                    </div>
                                    <div className='col-sm-4'>
                                        <span className='m-2'><strong>Race:</strong></span>
                                        <span className='m-2 type-icon-10'><img className="" src={imgRace} alt={subtype}></img></span>
                                        <span className='m-2'>{race}</span>
                                    </div>
                                </div>

                                <hr />

                                <div className='row align-items-center text-center'>
                                    <div className='col-sm-4'>
                                        <span className='m-2'><strong>Rarity:</strong></span>
                                        {
                                            (() => {
                                                if (imgRarity) {
                                                    return (
                                                        <span className='m-2 type-icon-15'>
                                                            <img className="" src={imgRarity} alt={`Rarity ${rarity}`}></img>
                                                        </span>
                                                    )

                                                }
                                            })()

                                        }                                        <span className='m-2'>{rarity}</span>
                                    </div>
                                   
                                    {
                                        (set_name !== "")
                                        &&
                                        (<div className='col-sm-4'>
                                            <span className='m-2'><strong>Set Name:</strong></span><br />
                                            <span className='m-2'>{set_name}</span>
                                        </div>)
                                    }

                                    <div className='col-sm-4'>
                                        {
                                            (() => {
                                                if (edition !== '') {
                                                    return (
                                                        <>
                                                            <span className='m-2'><strong>Edition:</strong></span>
                                                            <span className='m-2'>{edition}</span>
                                                        </>
                                                    )

                                                }
                                            })()

                                        }
                                    </div>
                                </div>
                                <hr />

                                <div className='row align-items-center text-center'>
                                    <div className='col-sm-4'>
                                        <span className='m-2'><strong>Archetype:</strong></span>
                                        <span className='m-2'>{arch}</span>
                                    </div>
                                    <div className='col-sm-4'></div>
                                    <div className='col-sm-4'>
                                        <span className='m-2'><strong>Amount:</strong></span>
                                        <span className='m-2'>{amount}</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
