import {useEffect} from 'react'
import {useSelector, useDispatch} from  "react-redux"
import {getAllUser} from "../../../features/Auth/authaction"
import Auser from "./Auser/Auser"

function User() {
const dispatch = useDispatch() 
const {Alluser} = useSelector((state)=> state.auth)

useEffect(()=>{
dispatch(getAllUser())
}, [])

return (
  <>
    <div className='userouter_container'>
      <h1>All Users  — including Cohort 4.</h1>
      {Alluser?.map((user) => <Auser user={user} />
      )}
    </div>
  </>

  )
}

export default User