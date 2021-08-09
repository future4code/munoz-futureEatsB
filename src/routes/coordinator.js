
export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignupPage = (history) => {
    history.push("/cadastro")
}

export const goToAddAdressPage = (history) => {
    history.push("/endereco")
}

export const goToGetRestaurantsPage = (history) => {
    history.push("/")
}

export const goToGetRestaurantDetailsPage = (history, id) => {
    history.push(`/detalhes/${id}`)
}

export const goToPlaceOrderPage = (history) => {
    history.push("/carrinho")
}

export const goToGetProfilePage = (history) => {
    history.push("/perfil")
}
