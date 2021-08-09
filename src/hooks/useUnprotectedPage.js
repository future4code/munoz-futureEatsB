import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToGetRestaurantsPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToGetRestaurantsPage(history)
    }
  }, [history])
}

export default useUnprotectedPage
