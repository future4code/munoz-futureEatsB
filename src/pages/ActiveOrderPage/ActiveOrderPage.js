import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const ActiveOrderPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>ActiveOrderPage</h1>
        </div>
    )
}
export default ActiveOrderPage