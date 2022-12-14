import { items } from "../../data/items"

const apiKey = 'd1123f1ed04448ed8c1352c028435114';

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