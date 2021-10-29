import { NextPage } from "next"
import React, { useCallback } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { MemoItem } from "../components/recoil/memoItem"
import { notePadAtom } from "../constants/notepad"

const RecoilResult: NextPage = () => {
  const setNotepad = useSetRecoilState(notePadAtom)

  const [memos] = useRecoilState(notePadAtom)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const filteredMemos = memos.filter(
        (memo) => memo.id !== event.currentTarget.id
      )
      const newMemos = [
        ...filteredMemos,
        {
          id: String(event.currentTarget.id),
          value: event.target.value,
        },
      ].sort((a, b) => a.id.localeCompare(b.id))
      setNotepad(() => newMemos)
    },
    [memos, setNotepad]
  )
  console.log("memos: ", memos)

  return (
    <>
      {memos.map((memo) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          value={memo.value}
          changeHandler={handleChange}
        />
      ))}
    </>
  )
}

export default RecoilResult
