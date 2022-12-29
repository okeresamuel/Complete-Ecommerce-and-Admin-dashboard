import moment from "moment"
import "../Auser/Auser.css"
import AdminIcon from '@mui/icons-material/AdminPanelSettings';


function Auser({user}) {

  return (
    <div>
      <div className="user__container">
      <p className="userInfo__text">{user.username}</p>
      <p className="userInfo__text">{user.email}</p>
      <p className="userInfo__text">Account was created {moment(user.createdAt).fromNow()}</p>
      {user.isAdmin ? <p className="Admin__text">Admin <AdminIcon className="admin__Icon"/></p> : <p className="Auser_text">A user</p>}
      </div>
    </div>
  )
}

export default Auser