import { atom } from "recoil"
import { useRecoilCallback } from "recoil"

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

type FormActions = {
  useAddForm: () => (firstName: string, country: string) => void
}
export const todoActions: FormActions = {
  // Todoを追加する
  useAddForm: () =>
    useRecoilCallback(
      ({ set }) =>
        (firstName: string, country: string) => {
          set(formState, (prev) => {
            const newState: FormState = {
              firstName,
              country,
            }
            return newState
          })
        },
      []
    ),
}
