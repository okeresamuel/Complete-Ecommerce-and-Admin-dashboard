import { NavLink, Outlet} from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
    <div className="Admin__navlink">
    <NavLink to={"Createproduct"}  className={({isActive})=> isActive ? "link_isActive" : "link_isNotActive" }> <span className="Admin__navlink">Create A product</span> </NavLink>
    <NavLink to={"Products"} className={({isActive})=> isActive ? "link_isActive" : "link_isNotActive" } ><span className="Admin__navlink">All Products</span></NavLink>
    <NavLink to={"Users"}  className={({isActive})=> isActive ? "link_isActive" : "link_isNotActive" }><span className="Admin__navlink">Users</span></NavLink>
    <Outlet />
    </div>
  )
}

export default Navbar