import { Logo, Label, Input, Textarea, Button } from "@app/components/ui"
import Image from 'next/image'


export default function Register(){

return <div className="w-screen h-screen  flex">
      <div className="bg-red-400 flex-1 relative">
        <Image src={'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="imagem de um restaurante" layout="fill"/>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Logo description="Crie um restaurante para sua empresa."/>
      <div className="my-2 flex flex-col items-center">
       <form className="w-96"> 
        <div className="my-2">
          <Label htmlFor="name" className="my-1 font-semibold text-gray-500"> Nome*</Label>
          <Input className="my-1 h-11 focus:ring-2 focus:ring-blue-400" placeholder="Informe o nome do restaurante"/>
        </div>
        <div className="my-2">
          <Label htmlFor="name" className="my-1 font-semibold text-gray-500"> Slug*</Label>
          <Input className="my-1 h-11 focus:ring-2 focus:ring-blue-400" placeholder="Informe o slug do seu restuarante"/>
        </div>
    
        <div className="my-2">
          <Label htmlFor="name" className="my-1 font-semibold text-gray-500"> Avatar</Label>
          <Input className="my-1 h-11 focus:ring-2 focus:ring-blue-400" placeholder="Informe a url de avatar de seu estabelicimento"/>
        </div>
        <div className="my-2">
          <Label htmlFor="name" className="my-1 font-semibold text-gray-500"> Cover</Label>
          <Input className="my-1 h-11 focus:ring-2 focus:ring-blue-400" placeholder="Informe o a url da imagem de cover do seu estabelecimento"/>
        </div>
        <div className="my-2" >
          <Label htmlFor="name"className="my-1 font-semibold text-gray-500"> Descrição</Label>
          <Textarea className="my-1 h-11 focus:ring-2 focus:ring-blue-400" placeholder="Informe a descrição do seu estabelecimento."/>
        </div>
        <Button className="w-full h-11 bg-red-500 my-2"> Cadastrar </Button>
       </form>
      </div>

      </div>
     </div>
}
