import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import First from './First'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
  showPopup: (message: string) => void
  // void means NO RETURN VALUE
}

// ({ title, subTitle })

const FunctionalComponent = ({ title, subTitle, showPopup }: FunctionalComponentProps) => {
  const [alertVariant, setAlertVariant] = useState<string | null>('success')
  // sometimes the initial type of a state variable it's different from the type is going to assume later...
  // sometimes you'll have an initial value of null, and then you assign another value...
  // for achieving this, so being able to set null initially and then another type for alertVariant
  // I'm passing a Generic to useState, making it aware of the possible types our state variable can assume over time

  useEffect(() => {
    console.log('hello!')
  }, [])

  return (
    <div>
      <Alert variant={alertVariant as string} onClick={() => setAlertVariant('danger')}>
        BOOTSTRAP MESSAGE
      </Alert>
      <h1 onClick={() => showPopup('you clicked on the h1')}>{title}</h1>
      <p>{subTitle || 'No subtitle in this component'}</p>
      <First title={title} count={0} />
    </div>
  )
}

export default FunctionalComponent
