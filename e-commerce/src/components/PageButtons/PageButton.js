import "./PageButton.css"
import Button from "../Button/Button"
import { useState } from "react";

const PageButton = () => {
    const pageButtons = [1, 2, 3 /* currentPage */, 4, 5, "...", 20 /* totalPages */];
    // const [pageButtons, setPageButtons] = useState([])
    
    return  (
        <div id="pageButtonsSection">
            <p class="pageButton">Previous</p>
            <Button  text="1" width="20px" height="20px" padding="0px" />
            <p class="pageButton">Next</p>
        </div>
    )
}

export default PageButton