// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  PasswordCardContainer,
  CardHeading,
  CardDescription,
  Input,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
const [userInput, newInput] = useState('')
const [error, errorUpdate] = useState(true)

const passwordInputChanged = event => {
  const userInputLength = userInput.length
  if (userInputLength > 8){
    errorUpdate(false)
    newInput(event.target.value)
  } else {
    errorUpdate(true)
    newInput(event.target.value)
  }
}

  return (
    <AppContainer>
      <PasswordCardContainer>
        <CardHeading>Password Validator</CardHeading>
        <CardDescription>
          Check how strong and secure is your password
        </CardDescription>
        <Input
        onChange={passwordInputChanged}
        type="password"
        value={userInput}
        >
        </Input>
        {error && (
          <PasswordErrorMsg>
            Your password must be at least 8 characters
          </PasswordErrorMsg>)
        }
      </PasswordCardContainer>
    </AppContainer>
  )
}
export default PasswordValidator
