import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import GetRestaurantsPage from "../pages/GetRestaurantsPage/GetRestaurantsPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import GetRestaurantDetailsPage from "../pages/GetRestaurantDetailsPage/GetRestaurantDetailsPage"
import AddRestaurantPage from "../pages/AddRestaurantPage/AddRestaurantPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const Router = () => {
  return (
     <BrowserRouter>
        <Switch>
           <Route exact path="/login">
              <LoginPage />
           </Route>
           <Route exact path="/cadastro">
              <SignupPage />
           </Route>
           <Route exact path="/">
             <GetRestaurantsPage />
           </Route>
           <Route exact path="/detalhes/:id">
             <GetRestaurantDetailsPage />
           </Route>
           <Route exact path="/adicionar">
              <AddRestaurantPage />
           </Route>
           <Route>
              <ErrorPage />
           </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router
