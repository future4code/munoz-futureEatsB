export const goToLoginPage = (history) => {
    history.push(/login)
}

export const goToSignupPage = (history) => {
    history.push(/cadastro)
}

export const goToGetRestaurantsPage = (history) => {
    history.push(/)
}

export const goToGetRestaurantDetailsPage = (history, id) => {
    history.push(`/detalhes/${id}`)
}

export const goToAddRestaurantPage = (history) => {
    history.push(/adicionar)
}