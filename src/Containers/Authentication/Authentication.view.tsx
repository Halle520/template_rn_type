import {InputNormal} from '@/Components'
import React from 'react'
import {useForm} from 'react-hook-form'
import {View, Text, StyleSheet, Alert} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useDispatch} from 'react-redux'

type AuthFormValues = {
  email: string
  password: string
}

// const AuthSchema = yup.object().shape({
//   firstName: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   website: yup.string().url(),
// })

const Authentication = props => {
  const {navigation} = props
  const dispatch = useDispatch()
  const {control, handleSubmit} = useForm<AuthFormValues>({
    // validationSchema: AuthSchema,
    defaultValues: {
      email: 'abc',
    },
  })
  const onSubmit = (data: AuthFormValues, errors) => {
    dispatch({type: 'submit', data})
    navigation.navigate('home')
  }
  return (
    <View style={styles.container}>
      <InputNormal control={control} name={'email'} />
      <InputNormal control={control} name={'password'} />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
})
export default Authentication
