import { useContext, useEffect } from "react"
import { PassedValues } from "../../context/CartContext"

export const ApiHandler = () => {

    const {inputs, setInputs} = useContext(PassedValues)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3333/inputs") // Pulling existing data from server
            const jsonResult = await result.json(); // Turning those results into a usable object

            setInputs(jsonResult) // setting current state to what is saved.
        }

        fetchData();
    }, []) // Function retreives the data stored in the cloud

    const submitInput = async () => {
        const result = await fetch("http://localhost:3333/inputs", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })

        const resultInJson = await result.json()
        setInputs(resultInJson)
    }
}