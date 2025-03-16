import { useForm, UseFormReturn } from 'react-hook-form'
import { AuthenticationFormData, restaurantSchema, restaurantService  } from '.'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useState  } from 'react'
import {toast} from 'sonner'

type RestaurantHookProps ={
  loading: boolean,
  handleCheckRestaurant: () => Promise<void> 
  form: UseFormReturn<AuthenticationFormData, any, undefined>
}


export const useRestaurantHook = ():RestaurantHookProps => {
  const [loading, setLoading ] = useState<boolean>(false);
  const form = useForm<AuthenticationFormData>({
    defaultValues: { slug: ''},
    mode: 'onChange',
    resolver: yupResolver(restaurantSchema())
  })

  const handleCheckRestaurant = useCallback(async() => {
    setLoading(true)
    console.log(form.getValues());
    try{
      const response = await restaurantService.loadBySlug({ slug: form.getValues().slug});
      console.log(response);
    }catch(error){
      console.log(error);
      toast.error('Ocorreu um erro ao realizar a requisição');
    }finally{
      setLoading(false)
    }
  }, []) 

  return { 
    loading,
    handleCheckRestaurant,
    form
  }
}