import { CheckIcon } from "@/components/icons"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Text } from "@chakra-ui/react"
import React, { useMemo } from "react"

const StepLabel: React.VFC<{
  index: number
  label: string
  isCurrentStep: boolean
  isCompletedStep: boolean
}> = ({ index, label, isCurrentStep, isCompletedStep }) => {
  const activeBg = "teal"
  const inactiveBg = useColorModeValue("gray.300", "gray.800")

  const getBgColor = useMemo(() => {
    if (isCompletedStep || isCurrentStep) return activeBg
    return inactiveBg
  }, [isCompletedStep, isCurrentStep, activeBg, inactiveBg])

  const getBorderColor = useMemo(() => {
    if (isCurrentStep || isCompletedStep) return activeBg
    return inactiveBg
  }, [isCurrentStep, isCompletedStep, activeBg, inactiveBg])
  return (
    <Box>
      <Box
        width="40px"
        height="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderWidth="2px"
        borderRadius="50%"
        bgColor={getBgColor}
        borderColor={getBorderColor}
        color="white"
        marginX="auto"
        fontWeight="medium"
      >
        <Text display={isCompletedStep ? "none" : ""}>{index + 1}</Text>
        <Box display={!isCompletedStep ? "none" : ""}>
          <CheckIcon />
        </Box>
      </Box>
      <Text
        marginTop=".25rem"
        size="sm"
        color={isCurrentStep || isCompletedStep ? "teal" : "gray"}
      >
        {label}
      </Text>
    </Box>
  )
}

export default StepLabel
