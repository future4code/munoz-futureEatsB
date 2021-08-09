import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {signUp} from "../../services/requests"

const SignupForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: '', email: '', cpf: '', password: '' })
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history, setRightButtonText)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.cpf}
            name={'cpf'}
            onChange={onChange}
            label={'CPF'}
            variant={'outlined'}
            type={'number'}
            fullWidth
            required
            margin={'normal'}
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            helperText={"Ex: 012.345.678-90"}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
           <TextField
            value={form.confirmpass}
            name={'confirmpass'}
            onChange={onChange}
            label={'Confirmar'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          Criar
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignupForm