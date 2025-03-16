import { FaMoneyBill } from 'react-icons/fa'
import { Button, Input, Label} from '@app/components/ui'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black ">
      <h1 className="text-gray-300 font-bold text-4xl flex items-center gap-x-4"> Fast Pay <FaMoneyBill size={40} color="green"/> </h1>
      <p className='my-2 text-gray-300'> Gerencie os pedidos dos seus clientes de forma eficiente.</p>
      <form className='w-96'>
        <div className='w-full'>
          <Label htmlFor='restaraunt' className='text-white font-bold my-2'>
            Restaurante*
          </Label>
          <Input name="restaurant" placeholder="Informe o nome do restaurante" className='my-2 bg-white border h-11'/>
        </div>
        <div className='my-2 w-full flex justify-center'>
        <Link href={"/register"} className='hover:border-b border-white opacity-70'>
            <span className='text-white'> Não possui conta?</span>
        </Link>
        </div>
        <Button className='w-full my-2 font-bold bg-purple-500 h-11 text-base disabled:bg-gray-400 text-white'> Logar </Button>
      </form>
    </div>
  );
}
