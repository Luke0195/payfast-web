type FieldErrorProps = {
  message?:string
}
export function FielError(props:FieldErrorProps){
  if(!props.message) return;
  return <div className="my-1  rounded-md w-full text-center">
    <span className="text-red-400"> {props.message}</span>
  </div>
}