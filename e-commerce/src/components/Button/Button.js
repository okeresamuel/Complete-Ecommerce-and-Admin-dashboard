import "./Button.css";

const ButtonImage = (props) => {
    const { imageSource, imageWidth, imageLeftPadding } = props

    return (
        <img class="buttonImage" src={imageSource || ""}  alt={imageSource ? "Button Image" : ""} style={{width:imageWidth || "20px",  paddingLeft:imageLeftPadding || ""}}/>
    )
}

const Button = (props) => {
    const { text, width, backgroundColor, textColor, fontWeight, fontSize, imageSource, imageWidth, imageLeftPadding } = props
        
    return <div class="button" style={{background:backgroundColor || "#fffeff", borderRadius:"8px", color:textColor || "#34237b", maxWidth:width || "90px", fontWeight: fontWeight || "600", fontSize: fontSize || "14px"}}>
        {text || ""} {/*This will be some user imputted text */}
        <ButtonImage imageSource={imageSource} imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
    </div>
}

export default Button;