import React, { useCallback } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { NextPage } from "next"
import { CreateButton } from "../components/recoil/createButton"
import { MemoItem } from "../components/recoil/memoItem"
import { notePadAtom } from "../constants/notepad"
import { Container } from "@chakra-ui/react"
import Link from "next/link"

const Recoil: NextPage = () => {
  // Recoilの Atoms を呼び出して定義
  const setNotepad = useSetRecoilState(notePadAtom)
  // ステートとして利用する
  const [memos] = useRecoilState(notePadAtom)

  /**
   * メモ帳を新しく作成するコールバックです。
   */
  const handleCreate = useCallback(() => {
    setNotepad((state) =>
      [...state, { id: String(state.length + 1), value: "" }].sort((a, b) =>
        a.id.localeCompare(b.id)
      )
    )
  }, [setNotepad])

  /**
   * メモ帳のインプットを更新するコールバックです。
   */
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
      <Container maxW="container.md" marginY="16px">
        {memos.map((memo) => (
          <MemoItem
            key={memo.id}
            id={memo.id}
            value={memo.value}
            changeHandler={handleChange}
          />
        ))}
        <div className="button_area">
          <CreateButton clickHandler={handleCreate} />
        </div>
        <Link href="/recoilResult">リンク</Link>
      </Container>
    </>
  )
}

export default Recoil
