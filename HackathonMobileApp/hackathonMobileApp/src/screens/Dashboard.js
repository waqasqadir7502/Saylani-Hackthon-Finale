import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import { View, Text } from 'react-native';



export default function Dashboard({ navigation }) {
  return (
    <Background>
       <BackButton goBack={navigation.goBack} />
      <View style = {{marginBottom : 30}}>
        <Logo/>
      </View>

      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'CheckLocation' }],
          })
        }
      >
        Search Nearest Branch
      </Button>
      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'ApplyFood' }],
          })
        }
      >
        Apply For Food
      </Button>
      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Check Status
      </Button>


    </Background>
  )
}
