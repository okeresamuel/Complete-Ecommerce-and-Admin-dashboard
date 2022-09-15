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
        <img class="buttonImage" src={imageSource || ""} alt={imageSource ? "Button Image" : ""} style={{ width: imageWidth || "20px", paddingLeft: imageLeftPadding || "" }} />
    )
}

const Button = (props) => {
    const { text, width, backgroundColor, textColor, fontWeight, fontSize, imageSource, imageWidth, imageLeftPadding, iconPicture } = props

    const iconSelection = (icon) => {
        if (icon === "cart") {
            <ShoppingCartIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else if (icon === "trash") {
            <DeleteOutlineIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else if (icon === "house") {
            <HomeIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else if (icon === "globe") {
            <LanguageIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else if (icon === "heart") {
            <FavoriteBorderIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else if (icon === "filled heart") {
            <FavoriteIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else if (icon === "x") {
            <CloseIcon imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        } else {
            <ButtonImage imageSource={imageSource} imageWidth={imageWidth} imageLeftPadding={imageLeftPadding} />
        }
    };

    return <div class="button" style={{ background: backgroundColor || "#fffeff", borderRadius: "8px", color: textColor || "#34237b", maxWidth: width || "90px", fontWeight: fontWeight || "600", fontSize: fontSize || "14px" }}>
        {text || ""} {/*This will be some user imputted text */}
        {iconSelection(iconPicture)}
    </div>
}

export default Button;