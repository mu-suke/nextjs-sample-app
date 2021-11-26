import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const Todos: NextPage = () => {
  const query = "nextjs"

  const { data, isLoading } = useQuery("qiita", async () => {
    const { data } = await axios.get("https://qiita.com/api/v2/items", {
      params: {
        page: "1",
        per_page: "20",
        query: query,
      },
    })
    return data
  })

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (!data) {
    return <Text>Error Occured</Text>
  }

  return (
    <Box>
      <UnorderedList>
        {data?.map((item: any, index: number) => {
          return <ListItem key={index}>{item.title}</ListItem>
        })}
      </UnorderedList>
    </Box>
  )
}

export default Todos
