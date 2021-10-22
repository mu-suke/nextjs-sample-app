import { atom } from "recoil"

type FormState = {
  firstName: string
  country: string
}

const formState = atom<FormState>({
  key: "formState",
  default: {
    firstName: "",
    country: "",
  },
})
