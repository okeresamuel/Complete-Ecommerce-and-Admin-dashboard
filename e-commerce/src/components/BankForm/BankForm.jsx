import "./BankForm.css"
import { useState } from "react";
import BankFormCheckBox from "./BankFormCheckBox";

const BankForm = () => {
    const [inputs, setInputs] = useState({}); // creates a dynamic object for me to add form entries too.


    const handleChange = (event) => {
        const name = event.target.name; // key
        const value = event.target.value; // value
        setInputs(values => ({ ...values, [name]: value })) // add key value pair to inputs object
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Keeps page from refreshing
        console.log(inputs); // What do I want to do with inputs? Send the info to crud crud?
    }

    return (
        <div id="checkoutForm">
            <form onSubmit={handleSubmit}>

                <label> Full Name
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="fullName"
                        value={inputs.fullName || ""} // outputted value to be read. Controls where the value goes, user input controls the state of the value.
                        onChange={handleChange}
                    />
                </label>

                <label> Street Address
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                    />
                </label>

                {/* Checkbox 1 */}
                <BankFormCheckBox
                    inputName="address2"
                    id="address2"
                    label="Add Address 2 line?"
                />
                {/* <label className="checkboxLabel">
                    <input
                    defaultChecked
                        className="checkoutFormInput"
                        type="checkbox"
                        name="address2"
                        id="address2"
                        value={inputs.address2 || false}
                        onChange={handleChange}
                        /> Add Address 2 line?
                </label> */}

                <label> Zip Code
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="zipCode"
                        value={inputs.zipCode || ""}
                        onChange={handleChange}
                    />
                </label>

                {/* City and State autofill */}

                <label> Phone Number
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="phone"
                        value={inputs.phone || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Email
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Billing Address
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="billinb"
                        value={inputs.billing || ""}
                        onChange={handleChange}
                    />
                </label>

                {/* Checkbox 2 */}
                <BankFormCheckBox 
                inputName="shippingAddress" 
                id="shippingAddress" 
                label="Different Shipping Address?" 
                />

                {/* <label className="checkboxLabel">
                    <input
                    defaultChecked
                        type="checkbox"
                        name="shippingAddress"
                        id="shippingAddress"
                        value={inputs.shippingAddress || false}
                        onChange={handleChange}
                        /> Different Shipping Address?
                </label> */}

                <label> Card Number
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="cardNumber"
                        value={inputs.cardNumber || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Expiration Date
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="expiration"
                        value={inputs.expiration || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Security Code
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="code"
                        value={inputs.code || ""}
                        onChange={handleChange}
                    />
                </label>
                <input
                    className="checkoutButton"
                    type="submit"
                    value={"Checkout"}
                // onSubmit={alert("Checkout Complete")}
                />
            </form>
        </div>
    )
}

export default BankForm