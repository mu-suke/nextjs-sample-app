import { Button, Container, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

const Recoil: NextPage = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  return (
    <Container maxW="container.sm" paddingY="16px">
      <form
        onSubmit={handleSubmit(() => {
          console.log(`submitted`)
          router.push('/recoilResult')
        })}
      >
        <FormControl id="first-name" isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>

        <FormControl id="country">
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
        <Button type="submit">submit</Button>
      </form>
    </Container >
  )
}

export default Recoil
