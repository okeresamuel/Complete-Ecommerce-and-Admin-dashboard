import { useState } from "react";

const BankFormCheckBox = (props) => {
    const { inputName, id, label } = props

    const [checked, setChecked] = useState(false);

    const [inputs, setInputs] = useState({}); // creates a dynamic object for me to add form entries too.

    const handleChange = (event) => {
        const name = event.target.name; // key
        const value = event.target.value; // value
        setInputs(values => ({ ...values, [name]: value })) // add key value pair to inputs object
    }

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    if (checked === true) {
        return (
            <>
                <label> {inputName === "shippingAddress" ? "Shipping Address" : "Address 2"}
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name={inputName}
                        value={inputs.inputName || ""} // outputted value to be read. Controls where the value goes, user input controls the state of the value.
                        onChange={handleChange}
                    />
                </label>

                <label className="checkboxLabel">
                    <input
                        className="checkoutFormInput"
                        type="checkbox"
                        name={inputName}
                        checked={checked}
                        id={id}
                        onChange={handleCheckboxChange}
                    /> {label}
                </label>
            </>
        )
    }

    return (
        <label className="checkboxLabel">
            <input
                className="checkoutFormInput"
                type="checkbox"
                name={inputName}
                checked={checked}
                id={id}
                onChange={handleCheckboxChange}
            /> {label}
        </label>
    )
};

export default BankFormCheckBox