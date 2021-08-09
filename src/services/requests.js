import axios from "axios"
import { BASE_URL } from "../contants/urls"
import { goToGetRestaurantsPage, goToAddAdressPage } from '../routes/coordinator'
/*login = (body, clear, history, setRightButtonText, setIsLoading)*/
export const login = (body, clear, history, setRightButtonText) => {
    /*setIsLoading(true)*/
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            /*setIsLoading(false)*/
            goToGetRestaurantsPage(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            /*setIsLoading(false)*/
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText) => {
    /*setIsLoading(true)*/
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
           /* setIsLoading(false)*/
            goToAddAdressPage(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            /*setIsLoading(false)*/
            alert(err.response.data.message)
        })
}

export const address = (body, clear, history, setRightButtonText) => {
  /*setIsLoading(true)*/
  axios.put(`${BASE_URL}/address`, body)
      .then((res) => {
          localStorage.setItem("token", res.data.token)
          clear()
         /* setIsLoading(false)*/
         goToGetRestaurantsPage(history)
          setRightButtonText("Logout")
      })
      .catch((err) => {
          /*setIsLoading(false)*/
          alert(err.response.data.message)
      })
}


