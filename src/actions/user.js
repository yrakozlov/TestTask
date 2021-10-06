import axios from 'axios'

export const auth = async (values) => {

    
     

      try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOu2Bso21LW7Vu2QOzWCtPbTJcMq1kxts", values);
        localStorage.setItem('token', response.data.idToken)
        document.location.reload()
      }catch(e){
        alert("Имя пользователя или пароль введены неверно")
      }
      

}

export const reg = async (values) => {
  
   

    try{
      const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOu2Bso21LW7Vu2QOzWCtPbTJcMq1kxts", values);
      localStorage.setItem('token', response.data.idToken)
      document.location.reload()
    }catch(e){
      alert("Что-то пошло не так")
    }
    
  
}

export const logOut = () => {
  localStorage.removeItem('token')
  document.location.reload()
}
