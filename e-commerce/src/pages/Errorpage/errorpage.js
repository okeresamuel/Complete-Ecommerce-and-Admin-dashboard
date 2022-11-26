import errorimage from "../../components/assets/Screenshot (106).png"
import "../Errorpage/errorpage.css"

function errorpage() {
  return (
    <div className="errorpage__container">
    <img src={errorimage} alt="errorpage__image" />
    </div>
    
  )
}

export default errorpage