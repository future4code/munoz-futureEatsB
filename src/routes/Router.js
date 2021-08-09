import React from "react"
import {Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import GetRestaurantsPage from "../pages/GetRestaurantsPage/GetRestaurantsPage"
import GetProfilePage from "../pages/GetProfilePage/GetProfilePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import AddAdressPage from "../pages/AddAdressPage/AddAdressPage"
import GetRestaurantDetailsPage from "../pages/GetRestaurantDetailsPage/GetRestaurantDetailsPage"
import PlaceOrderPage from "../pages/PlaceOrderPage/PlaceOrderPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const Router = ({setRightButtonText}) => {
  return (
         <Switch>
           <Route exact path="/login">
              <LoginPage setRightButtonText={setRightButtonText}/>
           </Route>
           <Route exact path="/cadastro">
              <SignupPage setRightButtonText={setRightButtonText}/>
           </Route>
           <Route exact path="/endereco">
              <AddAdressPage />
           </Route>
           <Route exact path="/">
             <GetRestaurantsPage />
           </Route>
           <Route exact path="/detalhes/:id">
             <GetRestaurantDetailsPage />
           </Route>
           <Route exact path="/carrinho">
             <PlaceOrderPage />
           </Route>
           <Route exact path="/perfil">
             <GetProfilePage />
           </Route>
           <Route>
              <ErrorPage />
           </Route>
        </Switch>
   )
}

export default Router
