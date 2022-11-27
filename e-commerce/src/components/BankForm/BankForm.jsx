import "./BankForm.css"
import { useState } from "react";
import BankFormCheckBox from "./BankFormCheckBox";
import { PassedValues } from "../../context/CartContext";

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

                <PassedValues.Provider value={{ inputs, setInputs }}>
                    <BankFormCheckBox
                        inputName="address2"
                        label="Add Address 2 line?"
                    />
                </PassedValues.Provider>


                <label> Zip Code
                    <input
                        className="checkoutFormInput numberInput"
                        type="number"
                        name="zipCode"
                        value={inputs.zipCode || ""}
                        onChange={handleChange}
                    />
                </label>

                {/* City and State autofill */}

                <label> Phone Number
                    <input
                        className="checkoutFormInput"
                        type="tel"
                        name="phone"
                        value={inputs.phone || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Email
                    <input
                        className="checkoutFormInput"
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Billing Address
                    <input
                        className="checkoutFormInput"
                        type="text"
                        name="billing"
                        value={inputs.billing || ""}
                        onChange={handleChange}
                    />
                </label>

                {/* Checkbox 2 */}
                <PassedValues.Provider value={{ inputs, setInputs }}>
                    <BankFormCheckBox
                        inputName="shippingAddress"
                        label="Different Shipping Address?"
                    />
                </PassedValues.Provider>

                <label> Card Number
                    <input
                        className="checkoutFormInput numberInput"
                        type="number"
                        name="cardNumber"
                        value={inputs.cardNumber || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Expiration Date
                    <input
                        className="checkoutFormInput"
                        type="date"
                        name="expiration"
                        value={inputs.expiration || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Security Code
                    <input
                        className="checkoutFormInput numberInput"
                        type="number"
                        name="code"
                        value={inputs.code || ""}
                        onChange={handleChange}
                    />
                </label>

                <input
                    className="checkoutButton"
                    type="submit"
                    value="Checkout"
                    onSubmit={() => alert("Checkout Complete")}
                />
            </form>
        </div>
    )
}

export default BankForm