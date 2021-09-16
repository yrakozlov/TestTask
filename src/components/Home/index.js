import React from "react"
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";



const Home = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    if (!isAuth) {
        return <Redirect to="/authorization" />;
      }
    return(
        <div>
            Home page
        </div>
    )
}

export default Home