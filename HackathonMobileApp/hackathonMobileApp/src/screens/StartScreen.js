import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet } from 'react-native'


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>KHANA SUB K LIYE</Header>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
    
    </Background>
  )
}



// const styles = StyleSheet.create({
//   header: {
//     color: 'black',
    
//   }
// })
