/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { parse } from 'date-fns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export function EditDatePicker({ onChange, dueDate }) {
  const [value, setValue] = useState()

  useEffect(() => {
    setValue(parse(dueDate, 'dd/MM/yyyy', new Date()))
  }, [dueDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          onChange(newValue)
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
