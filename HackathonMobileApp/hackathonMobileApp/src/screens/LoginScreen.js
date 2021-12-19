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
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator';
import { auth, signInWithEmailAndPassword } from '../config/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [errMsg, setErrMsg] = useState('');

  const signin = async () => {
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err) {
        setErrMsg(err.message);
      }
      setTimeout(() => {
        setErrMsg('');
      }, 5000)
    }
  }


  // const onLoginPressed = async () => {
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError) {
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })

  //     return
  //   }
  //   else {


  //   }
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Dashboard' }],
  //   })
  // }

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (!emailError || !passwordError) {
      try {
        let { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log(user);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      } catch (err) {
        if (err) {
          console.log(err.message);
          setErrMsg("Wrong Email Address");
        }
        setTimeout(() => {
          setErrMsg('');
        }, 5000)
      }


    }
    else {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Login Here.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.forgot}>
          {
            errMsg ? <p>{errMsg}</p> : null
          }
        </Text>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        {/* <Button mode="contained" onPress={register}> */}
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
})
