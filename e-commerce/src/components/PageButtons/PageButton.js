import "./PageButton.css"
import Button from "../Button/Button"
// import { useState } from "react";

const pageNumberIcons = (number) => {
        
    return <Button extraClass="pageButton" text={number} textColor="#a29fa3" width="80px" height="20px" padding="20px" borderRadius="5px" />
}

const PageButton = () => {
    const pageButtons = [1, 2, 3 /* currentPage */, 4, 5, "..." /* over seven pages ? add "..." at index 5 put total pages at the end */, 20 /* totalPages */];
    
    // const [pageButtons, setPageButtons] = useState([])
    
    return  (
        <div id="pageButtonsSection">
            <Button text="Previous" textColor="#adaaad" width="60px" height="20px" padding="0px" />
            {
            pageButtons.map((number) => {
                return pageNumberIcons(number)
            })
            }
            <Button text="Next" textColor="#adaaad" width="80px" height="20px" padding="0px" />
        </div>
    )
}

export default PageButton