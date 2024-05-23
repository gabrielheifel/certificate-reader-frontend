import { CardWrapper } from "./card-wrapper"
import { RxExclamationTriangle } from "react-icons/rx"

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <RxExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  )
}