import { useState } from "react";
import "./FormInput.css"

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, Tag, onChange, id, values, name, valuesRepo, valuesBranch, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
    
    return (
        <div className="formInput">
            <label>{label}</label>
            <Tag
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                name={name}
            >
                {Tag === "select" && values != null && name === "databasechanges" ? values.map((value) => (
                    <option key={value.id}>{value.value.toString()}</option>))
                    : Tag === "select" && valuesRepo != null && name === "repository" ? valuesRepo.map((value, i) => (
                        <option key={i}>{value.toString()}</option>))
                        : Tag === "select" && valuesBranch != null && name === "branch" ? valuesBranch.map((value, i) => (
                            <option key={i}>{value.toString()}</option>))
                            : null}
            </Tag>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput

