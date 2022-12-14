import { useEffect, useState } from "react"
import { items } from "../../data/items"

apiKey = "4b908306c58449eda65cb9bd89a5468a"

export const getUrl = () => `https://crudcrud.com/api/${apiKey}/store/`

export const apiHandler = ({ inputs, setInputs }) => {
    const [inputs, setInputs] = useState();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://crudcrud.com/api/${apiKey}/inputs`).then((data) => {
                data.json().then(items => {
                    setInputs(items);
                }).catch(err => console.log(err));
            }).catch(err => console.log(err)) // Pulling existing data from server

            // const jsonResult = await result.json(); // Turning those results into a usable object

            // setInputs(jsonResult) // setting current state to what is saved.
        }

        fetchData();
    }, []) // Function retreives the data stored in the cloud
}

export const seedDB = () => {
    items.forEach(item => {
        fetch(getUrl(), {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(data => {
            console.log("success", data)
        }).catch(err => console.log("error", err));
    })
}