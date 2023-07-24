import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../form/input-field'
import { Button } from '@mui/material'

export function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const handleLoginSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Box component={'form'} onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" label="username" control={control} />
      <InputField
        type="password"
        name="password"
        label="password"
        control={control}
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Box>
  )
}
