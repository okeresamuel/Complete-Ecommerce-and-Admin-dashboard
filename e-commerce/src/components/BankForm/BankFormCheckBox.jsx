import { createContext, useState } from "react";

// const CheckBoxValue = createContext(false)

// const Context = ({value, children}) => {
//     return (
//         <CheckBoxValue.Provider value={value} >
//             {children}
//         </CheckBoxValue.Provider>
//     )
// }

const BankFormCheckBox = (props) => {
    const { name, id, label } = props

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        const value = event.target.checked;
        setChecked(!checked);
        console.log(value)
        return value
    };

    return (
        <label className="checkboxLabel">
            <input
                className="checkoutFormInput"
                type="checkbox"
                name={name}
                checked={checked}
                id={id}
                onChange={handleChange}
            /> {label}
        </label>
    )
};

export default BankFormCheckBox