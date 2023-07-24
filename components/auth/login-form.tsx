import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../form/input-field'

export function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: 1,
      password: '',
    },
  })

  const handleLoginSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Box component={'form'} onSubmit={() => handleSubmit(handleLoginSubmit)}>
      <InputField name="username" label="hjaha" control={control} />
    </Box>
  )
}
