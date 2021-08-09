import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {address} from "../../services/requests"

const SignupForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({  street: '', number: '',  complement: '', neighbourhood: '', city: '', state: '' })
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    address(form, clear, history, setRightButtonText)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.street}
            name={'name'}
            onChange={onChange}
            label={'Logradouro'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.number}
            name={'number'}
            onChange={onChange}
            label={'Número'}
            variant={'outlined'}
            type={'number'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.complement}
            name={'complemento'}
            onChange={onChange}
            label={'Complemento'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.neighbourhood}
            name={'bairro'}
            onChange={onChange}
            label={'Bairro'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.city}
            name={'cidade'}
            onChange={onChange}
            label={'Cidade'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.state}
            name={'estado'}
            onChange={onChange}
            label={'Estado'}
            variant={'outlined'}
            type={'text'}
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
          Salvar
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignupForm