import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

// TODO: tests
function FormInput(props) {
    return (
        <div className="form-input">
            <label className="form-input__label" htmlFor={props.id} >{ `${props.label}:` }</label>
            <input className="form-input__field"
                id={props.id}
                type={props.type} 
                value={props.value} 
                onChange={e => props.onChange(e?.target?.value)}
            />
        </div>
    )
}

FormInput.defaultProps = {
    type: 'text'
}

FormInput.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default FormInput;