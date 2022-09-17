import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import "./Button.css";

const ButtonImage = (props) => {
    const { imageSource, imageWidth, imageLeftPadding } = props

    return (
        <img className="buttonImage" src={imageSource || ""} alt={imageSource ? "Button Image" : ""} style={{ width: imageWidth || "20px", paddingLeft: imageLeftPadding || "" }} />
    )
}

const Button = (props) => {
    const { text, width, height, backgroundColor, textColor, fontWeight, fontSize, imageSource, imageWidth, imageLeftPadding, iconPicture } = props

    const iconSelection = (icon) => {
        if (!icon) {
            return (
                <ButtonImage imageSource={imageSource} imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "cart") {
            return (
                <ShoppingCartIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "trash") {
            return (
                <DeleteOutlineIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "house") {
            return (
                <HomeIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "globe") {
            return (
                <LanguageIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "heart") {
            return (
                <FavoriteBorderIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "filled heart") {
            return (
                <FavoriteIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else if (icon.toLowerCase() === "x") {
            return (
                <CloseIcon className='buttonImage' imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
            )
        } else {
            console.log("Source file location or icon picture name needed.")
        }
    };

    return <div class="button" style={{ background: backgroundColor || "#fffeff", borderRadius: "65px", color: textColor || "#34237b", maxWidth: width || "90px", height: height || "20px", fontWeight: fontWeight || "600", fontSize: fontSize || "14px" }}>
        {text || ""} {/*This will be some user imputted text */}
        {iconSelection(iconPicture)}
    </div>
}

export default Button;