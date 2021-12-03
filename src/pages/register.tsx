import Steps, { Step } from "@/presentationals/register/Steps"
import { Box, Button, Container, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"

const Register: NextPage = () => {
  const router = useRouter()
  const steps: Step[] = [{ label: "Step 1" }, { label: "Step 2" }]
  const [activeStep, setActiveStep] = useState<number>(0)
  const handleNext = () => {
    setActiveStep(activeStep + 1)
    router.push("/register?step2=true", undefined, { shallow: true })
  }
  const handleBack = () => {
    setActiveStep(activeStep - 1)
    router.push("/register", undefined, { shallow: true })
  }

  return (
    <Container maxW="container.md" paddingY="4rem">
      <Steps activeStep={activeStep} steps={steps} />

      <Text marginTop="2rem" textAlign="center">
        activeStep: {activeStep}
      </Text>
      <Box display="flex" justifyContent="space-around">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </Box>
    </Container>
  )
}

export default Register
