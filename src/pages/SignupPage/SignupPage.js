import React from 'react'
import logo from "../../assets/logo-future-eats-invert.png"
import { ScreenContainer } from './styled'
import SignupForm from './SignupForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignupPage = ({setRightButtonText}) => {
    useUnprotectedPage()
   return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignupForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignupPage
