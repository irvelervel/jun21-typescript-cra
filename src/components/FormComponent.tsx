import { Form, Button } from 'react-bootstrap'
import { useState, ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

// every routed component gets history, location and match from their props

const FormComponent = ({ location, history, match }: RouteComponentProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // if you write your event listener function separately, you'll have to describe the
    // event that your function is receiving
    // and for an input field, it's actually ChangeEvent<HTMLInputElement>
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('well done!')
    history.push('/')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInput} />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
