import * as yup from 'yup'

export const restaurantSchema = () => {
  return   yup.object({
    slug: yup.string().required('O campo nome do restaurante é obrigatório')
  })
}