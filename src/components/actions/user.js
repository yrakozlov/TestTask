import axios from 'axios'

export const auth = async (event, email, password) => {
    event.preventDefault();
    
      const authData = {
        email,
        password,
        returnSecureToken: true,
      };

      try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOu2Bso21LW7Vu2QOzWCtPbTJcMq1kxts", authData);
        localStorage.setItem('token', response.data.idToken)
        document.location.reload()
      }catch(e){
        console.log(e)
      }
      

}

export const reg = async (event, email, password) => {
  event.preventDefault();
  
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    try{
      const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOu2Bso21LW7Vu2QOzWCtPbTJcMq1kxts", authData);
      localStorage.setItem('token', response.data.idToken)
      document.location.reload()
    }catch(e){
      console.log(e)
    }
    
  
}

export const logOut = () => {
  localStorage.removeItem('token')
  document.location.reload()
}
