import React, {memo} from 'react'
import {RegisterOptions, useController} from 'react-hook-form'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'

interface InputNormalProps extends Partial<TextInputProps> {
  control: any
  name: string
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
  defaultValue?: string
}

const InputNormal = (props: InputNormalProps) => {
  const {control, name, rules, defaultValue, ...rest} = props
  const {field} = useController({
    control,
    name,
    rules,
    defaultValue: defaultValue ?? '',
  })
  return (
    <TextInput
      {...rest}
      style={styles.input}
      value={field?.value}
      onChangeText={field?.onChange}
      onBlur={field?.onBlur}
      placeholder={'Enter here'}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
  },
})
export default memo(InputNormal)
