import { FaMoneyBill } from 'react-icons/fa'

type LogoComponentProps = {
  description: string
}
export  function Logo({ description }:LogoComponentProps){
  return <>
        <h1 className="text-gray-400 font-bold text-4xl flex items-center gap-x-4"> Fast Pay <FaMoneyBill size={40} color="green"/> </h1>
        <p className='my-2 text-gray-400'> {description}</p>
        </>
}