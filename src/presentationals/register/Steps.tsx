import { Box, Text } from "@chakra-ui/react"
import React from "react"
import StepLabel from "./StepLabel"

export interface Step {
  label: string
}

const Steps: React.VFC<{ activeStep: number; steps: Step[] }> = ({
  activeStep,
  steps,
}) => {
  const stepCount = steps.length
  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      {steps.map((step: Step, index: number) => {
        const isLastStep = index === stepCount - 1
        const isCurrentStep = index === activeStep
        const isCompletedStep = index < activeStep
        return (
          <>
            <StepLabel
              index={index}
              label={step.label}
              isCurrentStep={isCurrentStep}
              isCompletedStep={isCompletedStep}
              key={index}
            />
            <Text
              color={isCurrentStep || isCompletedStep ? "teal" : "gray"}
              marginX="1rem"
              marginY="auto"
              size="2rem"
              display={isLastStep ? "none" : ""}
            >
              →
            </Text>
          </>
        )
      })}
    </Box>
  )
}

export default Steps
