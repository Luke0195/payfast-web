type FieldErrorProps = {
  message?:string
}
export function FielError(props:FieldErrorProps){
  if(!props.message) return;
  return <div className="my-2 p-4 bg-red-400 rounded-lg">
    <span className="text-red-600"> {props.message}</span>
  </div>
}