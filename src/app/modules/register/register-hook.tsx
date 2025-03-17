import { useCallback, useState, } from 'react'
import { FormData, schema, restaurantService } from './'
import { useForm } from 'react-hook-form'
import { yupResolver  } from '@hookform/resolvers/yup'
import { toast } from 'sonner'


interface UseRegisterHookProps{
  loading:boolean,
  onSubmit: () => Promise<void> 
}

export const useRegisterHook = ():UseRegisterHookProps =>{
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: { avatarImageUrl: '', coverImageUrl: '',  description: '', name: '', slug: ''},
    resolver: yupResolver(schema())
  })  

  const onSubmit = useCallback(async() => {
    setLoading(true)
    try{  
      const values = form.getValues();
      await restaurantService.add(values);
      toast.success('Ação realizada com sucesso.')
    }catch(error){
      toast.error('Ocorreu um erro ao realizar a operação')
      console.log(error);
    }finally{
      setLoading(false)
    }

  },[]);

  return {
    onSubmit, 
    loading
  }
}