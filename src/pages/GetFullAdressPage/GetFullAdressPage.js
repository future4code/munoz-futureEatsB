import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const GetFullAdressPage = () => {
    useProtectedPage
    return (
        <div>
            <h1>GetFullAdressPage</h1>
        </div>
    )
}
export default GetFullAdressPage