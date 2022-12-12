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

    const handleSubmit = async (event) => {
        event.preventDefault(); // Keeps page from refreshing and any other default behavior normally caused by the event.

        const result = await fetch("http://localhost:3333/inputs/1", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })

        const resultInJson = await result.json()
        console.log(resultInJson) // Display object saved in json in console
    }

    const handleDelete = async (event) => {
        event.preventDefault(); // Keeps page from refreshing and any other default behavior normally caused by the event.

        const result = await fetch(`http://localhost:3333/inputs/${1}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }) //only delete's the first object

        const resultInJson = await result.json()
        console.log(resultInJson) // Display object saved in json in console
    } 

    return (
        <PassedValues.Provider value={{ inputs, setInputs }}>
            <div id="checkoutForm">
                <form onSubmit={handleSubmit}>

                    <label> Full Name
                        <input
                            className="checkoutFormInput"
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={inputs.fullName || ""} // outputted value to be read. Controls where the value goes, user input controls the state of the value.
                            onChange={handleChange}
                        />
                    </label>

                    <label> Street Address
                        <input
                            className="checkoutFormInput"
                            type="text"
                            placeholder="Street Address"
                            name="address"
                            value={inputs.address || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* Checkbox 1 */}
                    <BankFormCheckBox
                        inputName="address2"
                        label="Add Address 2 line?"
                    />

                    <label> Zip Code
                        <input
                            className="checkoutFormInput numberInput"
                            type="number"
                            name="zipCode"
                            placeholder="Zip Code"
                            value={inputs.zipCode || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* City and State autofill */}

                    <label>Phone Number
                        <input
                            className="checkoutFormInput"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={inputs.phone || ""}
                            onChange={handleChange}
                        />
                    </label>

                    <label> Email
                        <input
                            className="checkoutFormInput"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </label>

                    <label> Billing Address
                        <input
                            className="checkoutFormInput"
                            type="text"
                            name="billing"
                            placeholder="Billing Address"
                            value={inputs.billing || ""}
                            onChange={handleChange}
                        />
                    </label>

                    {/* Checkbox 2 */}
                    <BankFormCheckBox
                        inputName="shippingAddress"
                        label="Different Shipping Address?"
                    />

                    <label> Card Number
                        <input
                            className="checkoutFormInput numberInput"
                            type="number"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={inputs.cardNumber || ""}
                            onChange={handleChange}
                        />
                    </label>

                    <label> Expiration Date
                        <input
                            className="checkoutFormInput"
                            type="date"
                            name="expiration"
                            placeholder="Expiration Date"
                            value={inputs.expiration || ""}
                            onChange={handleChange}
                        />
                    </label>

                    <label> Security Code
                        <input
                            className="checkoutFormInput numberInput"
                            type="number"
                            name="code"
                            placeholder="Security Code"
                            value={inputs.code || ""}
                            onChange={handleChange}
                        />
                    </label>

                    <input
                        className="checkoutButton"
                        type="button"
                        value="Checkout"
                    />
                </form>

                <input
                        className="displayNone"
                        type="submit"
                        value="Delete"
                        onClick={handleDelete}
                    />
            </div>
        </PassedValues.Provider>
    )
}

export default BankForm