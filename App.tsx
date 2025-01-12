import React, { Children } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './Navigation'
import './global.css'

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App
