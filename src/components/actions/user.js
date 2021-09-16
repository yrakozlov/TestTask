import axios from 'axios'
import { setUser, regUser } from '../../reducers/userReducer';

export const auth = (event, email, password) => {
    event.preventDefault();
    return async dispatch => {
      const authData = {
        email,
        password,
        returnSecureToken: true,
      };

      try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOu2Bso21LW7Vu2QOzWCtPbTJcMq1kxts", authData);
        localStorage.setItem('token', response.data.idToken)
        dispatch(setUser(response.data))
        console.log(response.data);
      }catch(e){
        console.log(e)
      }
      
    };
}

export const reg = (event, email, password) => {
  event.preventDefault();
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    try{
      const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOu2Bso21LW7Vu2QOzWCtPbTJcMq1kxts", authData);
      localStorage.setItem('token', response.data.idToken)
      dispatch(regUser(response.data))
      console.log(response.data);
    }catch(e){
      console.log(e)
    }
    
  };
}
