import { Textarea } from "@chakra-ui/react"
import React from "react"

type Props = {
  id: string
  value: string
  changeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export const MemoItem: React.FC<Props> = ({ id, value, changeHandler }) => {
  return (
    <Textarea
      id={id}
      value={value}
      onChange={changeHandler}
      placeholder="メモを入力しましょう！"
    />
  )
}
