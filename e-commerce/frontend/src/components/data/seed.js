import { items } from "../data/items"

const apiKey = '5e3adb52ebe0455e9d2e451266663a49';

export const getUrl = () => `https://crudcrud.com/api/${apiKey}/store/`

export const seedDB = () => {
    items?.forEach((item, index) => {
        fetch(getUrl(), {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(data => {
            console.log("success", data, index)
        }).catch(err => console.log("error", err));
    })
}