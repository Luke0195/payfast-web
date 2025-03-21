'use client'

import { Button, Input, Label, FielError, Logo  } from '@app/components/ui'
import Link from 'next/link'
import { useRestaurantHook } from './modules/restaurant'
import { Controller } from 'react-hook-form'

export default function Home() {
  const { form, handleCheckRestaurant, loading  } = useRestaurantHook();
  const { control, formState: { errors, isValid  }, handleSubmit, } = form;
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black ">
      <Logo
        description='Gerencie os pedidos dos seus clientes de forma eficiente.'
      />
      <form className='w-96' onSubmit={handleSubmit(handleCheckRestaurant)}>
        <div className='w-full'>
          <Label htmlFor='restaraunt' className='text-white font-bold my-2'>
            Restaurante*
          </Label>
         <Controller
          control={control}
          name="slug"
          render={({field}) => <Input placeholder="Informe o nome do restaurante" className='my-2 bg-white border bh-11' {...field}/>}
         />
         {errors.slug?.message && <FielError message={errors.slug.message}/>}
        </div>
        <div className='my-2 w-full flex justify-center'>
        <Link href={"/register"} className='hover:border-b border-white opacity-70'>
            <span className='text-white'> Não possui conta?</span>
        </Link>
        </div>
        <Button 
         className='w-full my-2 font-bold bg-purple-500 h-10 hover:bg-purple-400 text-base disabled:bg-gray-400 cursor-not-allowed text-white'
         type='submit'
         disabled={loading || !isValid}
        > {loading ? 
            <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
            <span> Processando</span>
            </svg>
          : 'Logar'
        } </Button>
      </form>
    </div>
  );
}
