import HomeIcon from '@mui/icons-material/Home';
// import { useState } from "react"
import "./Breadcrumb.css"

const crumb = (text, text2 ="", nameOfClass="") => {
    return <a> <li className="breadCrumbs {nameOfClass}"> {text} {text2} </li> </a>
}

const Breadcrumb = () => {
    // const [crumbs, setCrumbs] = useState([])
    const crumbs = ["Main Page", "Category", "Sweatshirt"]

    return (
        <div id="breadCrumbSection">
            <a hfre="." > <HomeIcon id="breadCrumbHomeIcon"/> </a>
            <ul id="breadCrumbList">
                {
                    crumbs.map((e, i, arr) => {
                        if (i < arr.length - 1) {
                            return crumb(e, " >")
                        } else {
                            return crumb(e)
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumb;