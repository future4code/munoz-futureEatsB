import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const GetRestaurantDetailsPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>GetRestaurantDetailsPage</h1>
        </div>
    )
}
export default GetRestaurantDetailsPage