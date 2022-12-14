import Swal from 'sweetalert2'



const ErrorSweetalert = () => {  
 Swal.fire({  
  title: 'Error!',
  text: 'Check again some fields may be empty',
  icon: 'error', 
  confirmButtonText: 'Try Again'
  });  
}

export default function Sweetalert() {
  return   ErrorSweetalert()
  
}

