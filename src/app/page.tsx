import { FaMoneyBill } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-gray-300 font-bold text-4xl flex items-center gap-x-4"> Fast Pay <FaMoneyBill size={40} color="green"/> </h1>
      <p className='my-2 text-gray-300'> Gerencie os pedidos dos seus clientes de forma eficiente.</p>
    </div>
  );
}
