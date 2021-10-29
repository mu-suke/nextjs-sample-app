import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"
import { useRecoilValue } from "recoil"
import { countState } from "../constants/countState"

const About: NextPage = () => {
  const count = useRecoilValue(countState)

  return (
    <Box>
      <Text>{count}</Text>
    </Box>
  )
}

export default About
