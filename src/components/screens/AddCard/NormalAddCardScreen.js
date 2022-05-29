import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

import { Title } from '../../common/Title'
import { InputField, SelectField } from '../../common/search/InputField'
import { BASE_URL } from '../../../helpers/constants.js';
import "../../../statics/css/main.css"
import { ReturnButton } from '../../common/ReturnButton';
import { RelatedCards } from '../../common/card/RelatedCards';


export const NormalAddCardScreen = () => {
    const navigate = useNavigate();
    const [bodyRequest, setBodyRequest] = useState(normalBodyRequest);
    const [messageResponse, setMessageResponse] = useState({});
    const [show, setShow] = useState(false);


    useEffect(() => {
        const serial_code = bodyRequest.serial_code;

        const sendRequest = async () => {

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyRequest)
            };

            const res = await fetch(`${BASE_URL}collection/create`, requestOptions)
                .catch((error) => {
                    console.log(error.message);

                });

            const body = await res.json();

            setMessageResponse(body);

            if (body.serial_code) {
                handleShow();

            }

        }

        if (serial_code !== "") {
            sendRequest(bodyRequest);

        }


    }, [bodyRequest]);

    const handleAddCard = (e) => {
        e.preventDefault();

        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].value !== '') {
                setBodyRequest((prevState) => ({
                    ...prevState,
                    [e.target[i].name]: e.target[i].value

                }));
            }
        }
    };

    const handleReset = (e) => {
        navigate('/add/normal');
    };

    const handleAddAnotherCard = (e) => {
        navigate('/add');
    };


    const handleGoDetail = (e) => {
        const serial_code = bodyRequest.serial_code;
        navigate(`/card/${serial_code}`);

    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            <div className='row mt-3 align-items-center mb-3'>
                <div className='col-sm-8'>
                    <Title value='Add New Normal/Effect Monster Card' />
                </div>
                <div className="col-sm-4">
                    <ReturnButton value="Return" />
                </div>
            </div>


            {
                (messageResponse.detail) && <div className="alert alert-danger text-capitalize">{messageResponse.detail}</div>
            }

            <div className='animate__animated animate__fadeIn'>
                <form className="" onSubmit={handleAddCard}>
                    <div className="row ">
                        <InputField req={true} type="text" info="Serial Code" />
                        <InputField req={true} type="text" info="Card Number" />
                        <InputField req={true} type="text" info="Name" />
                        <InputField req={true} type="text" info="Description" />
                        <InputField req={true} type="number" info="Attack" autoComplete="on" />
                        <InputField req={true} type="number" info="Defence" autoComplete="on" />
                        <InputField req={true} type="number" info="Level" autoComplete="on" />
                        <SelectField path="info/race/" name="Race" />
                        <SelectField path="info/subtype/" name="Subtype" />
                        <SelectField path="info/attribute/" name="Attribute" />
                        <InputField type="text" info="Archetype" />
                        <InputField req={true} type="text" info="Img Code" />
                        <SelectField path="info/rarity/" name="Rarity" />
                        <InputField type="text" info="Edition" />
                        <InputField type="text" info="Set Name" />
                        <InputField req={true} type="number" info="Amount" autoComplete="on" />

                        <div className="col-sm-3 mt-2 mb-2">
                            <button
                                className="btn form-control"
                                style={{
                                    background: "#be6d3e",
                                    color: 'white'
                                }}
                                type="submit"
                                id="submit"
                            >
                                Add
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
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Card added!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to go to the detail of the card or add another?</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-secondary" onClick={handleAddAnotherCard}>
                        Add another card
                    </Button>
                    <Button variant="btn btn-outline-secondary" onClick={handleGoDetail}>
                        Go to the detail
                    </Button>
                </Modal.Footer>
            </Modal>

            <RelatedCards cardType="monster" cardSubtype='Effect Monster' title='Card of the same type in the collection'/>

        </>
    )
}

export const normalBodyRequest = {
    card_number: "",
    serial_code: "",
    name: "",
    description: "",
    attack: "",
    defence: "",
    type: "Monster",
    subtype: "",
    race: "",
    level: "",
    attribute: "",
    rarity: "",
    archetype: "",
    edition: "",
    set_name: "",
    img_code: "",
    amount: 0,
}
