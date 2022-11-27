import { useContext } from "react";
import { useState } from "react";
import { PassedValues } from "../../context/CartContext";

const BankFormCheckBox = (props) => {
    const { inputName, label } = props

    const [checked, setChecked] = useState(false);

    const { inputs, setInputs } = useContext(PassedValues); // creates a dynamic object for me to add form entries too.

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
                        value={inputs[inputName] || ""} // outputted value to be read. Controls where the value goes, user input controls the state of the value.
                        onChange={handleChange}
                    />
                </label>

                <label className="checkboxLabel">
                    <input
                        className="checkoutFormInput"
                        type="checkbox"
                        name={inputName}
                        checked={checked}
                        id={inputName}
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
                id={inputName}
                onChange={handleCheckboxChange}
            /> {label}
        </label>
    )
};

export default BankFormCheckBox