import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: "green" },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 50
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
