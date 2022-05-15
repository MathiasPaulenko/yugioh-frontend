import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { BASE_URL } from '../../../helpers/constants.js';

export const InputField = ({
    type,
    info,
    autoComplete = "on"
}) => {

    return (
        <div className="col-sm-3 mt-2 mb-2">
            <div className="form-group">
                <input
                    type={type}
                    placeholder={info}
                    className="form-control"
                    name={info.toLowerCase()}
                    id={info.toLowerCase()}
                    autoComplete={autoComplete}
                />
            </div>
        </div>
    )
}


export const SelectField = ({
    path,
    name
}) => {

    const [, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    // handle input change event
    const handleInputChange = value => {
        setValue(value);
    };

    // handle selection
    const handleChange = value => {
        setSelectedValue(value);
    }

    const fetchData = () => {
        return fetch(`${BASE_URL+ path}`)
            .then(resp => resp.json());
    }

    return (
        <div className="col-sm-3 mt-2 mb-2">
            <div className="select-container App">
                <AsyncSelect
                    // cacheOptions
                    defaultOptions
                    name={name.toLowerCase()}
                    value={selectedValue}
                    getOptionLabel={e => e[name.toLowerCase()]}
                    getOptionValue={e => e[name.toLowerCase()]}
                    loadOptions={fetchData}
                    onInputChange={handleInputChange}
                    onChange={handleChange}
                    placeholder={name}
                    isClearable={true}
                    isSearchable={true}
                />
            </div>
        </div>
    )
}
