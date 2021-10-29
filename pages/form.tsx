import { NextPage } from "next"
import React from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

type Params = {
  choose: string
}

const VariableQuestions: React.VFC<{ choose: string }> = ({ choose }) => {
  console.log("choose: ", choose)
  switch (choose) {
    case "A":
      return (
        <div>
          <input type="radio" name="a-a" id="a" />
          <label htmlFor="a-a">A-a</label>
          <input type="radio" name="a-b" id="a" />
          <label htmlFor="a-b">A-b</label>
          <input type="radio" name="a-a" id="a" />
          <label htmlFor="a-c">A-c</label>
        </div>
      )
    case "B":
      return (
        <div>
          <label htmlFor="start">choose date:</label>

          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-01-01"
            max="2021-12-31"
          />
        </div>
      )
    case "C":
      return (
        <div>
          <label htmlFor="c">Question C</label>
          <textarea
            style={{ display: "block" }}
            name="c"
            rows={10}
            cols={40}
            defaultValue="Please write your reason that you answered C."
          ></textarea>
        </div>
      )
    case "D":
      return (
        <div>
          <label htmlFor="pass">Password (8 characters minimum):</label>
          <input type="password" id="pass" name="password" required />
        </div>
      )
    default:
      return null
  }
}

const Form: NextPage = () => {
  const validations = yup.object().shape({
    choose: yup.string().required("選択してください"),
  })
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Params>({
    resolver: yupResolver(validations),
  })
  const chooseWatch = watch("choose", "")
  return (
    <form
      onSubmit={handleSubmit((params) => {
        console.log("params: ", params)
      })}
    >
      <select placeholder="Select option" {...register("choose")}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <VariableQuestions choose={chooseWatch} />
    </form>
  )
}

export default Form
