import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Paragraph from '../components/Paragraph'
import { log } from 'react-native-reanimated'


export default function ApplyFood({ navigation }) {
    const [name, setName] = useState('')
    const [fname, setFname] = useState('')
    const [cnic, setCnic] = useState('')
    const [dob, setDob] = useState('')
    const [familyMembers, setFamilyMembers] = useState('')
    const [nearestLocation, setNearestLocation] = useState('')


    const submitInfo = async () => {
        console.log(name,fname,cnic, dob , familyMembers);
    }


    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
           
            <Logo />
            <Paragraph style = {styles.paraform}>Fill this Form.</Paragraph>

            <TextInput
                label="Enter Name"
                returnKeyType="next"
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize="none"
            />
            <TextInput
                label="Enter Father Name"
                returnKeyType="done"
                value={fname}
                onChangeText={(text) => setFname(text)}
            />
            <TextInput
                label="Enter CNIC"
                returnKeyType="done"
                value={cnic}
                onChangeText={(text) => setCnic(text)}
            />
            <TextInput
                label="Enter Date of birth"
                returnKeyType="done"
                value={dob}
                onChangeText={(text) => setDob(text)}
            />
            <TextInput
                label="Enter Family Members"
                returnKeyType="done"
                value={familyMembers}
                onChangeText={(text) => setFamilyMembers(text)}
            />
            <TextInput
                label="Nearest Location"
                returnKeyType="done"
                value={nearestLocation}
                onChangeText={(text) => setNearestLocation(text)}
            />




            <Button mode="contained" onPress={submitInfo}>
                Submitt
            </Button>

        </Background>
    )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: "green",
  },
  paraform: {
    fontWeight: 'bold',
    color: "green",
  },
})