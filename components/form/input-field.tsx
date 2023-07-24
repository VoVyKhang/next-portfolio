import { Box } from '@mui/system'
import * as React from 'react'
import { Control, useController } from 'react-hook-form'

interface InputFieldProps {
  name: string
  label?: string
  control: Control<any>
}

export default function InputField({ name, label, control }: InputFieldProps) {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <Box onClick={() => onChange(value + 1)} ref={ref}>
      {name}: {value}
    </Box>
  )
}
