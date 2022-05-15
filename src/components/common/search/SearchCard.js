import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SearchCard = ({
    value,
    handle,
    reset
}) => {

    const navigate = useNavigate();
    const { searchText } = value;
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };


    return (
        <form onSubmit={handleSearch} className="mt-3">
            <div className="row">
                <div className="col-sm-8">
                    <input
                        type="text"
                        placeholder="Card Name"
                        className="form-control"
                        name="searchText"
                        id="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handle}
                    />
                </div>
                <div className="col-sm-2">
                    <button
                        className="btn btn-secondary form-control"
                        type="submit">
                        Search
                    </button>
                </div>
                <div className="col-sm-2">
                    <button
                        className="btn btn-secondary form-control"
                        type="reset"
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>

            </div>
        </form>
    )
}
