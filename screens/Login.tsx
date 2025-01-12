import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import useStore from '../global/zustand'

const Login = () => {
  const { updateIsLoggedIn } = useStore((state: any) => state)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => updateIsLoggedIn(true)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
