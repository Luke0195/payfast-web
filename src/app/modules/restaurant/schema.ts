import * as yup from 'yup'

export const restaurantSchema = () => {
  return   yup.object({
    slug: yup.string().required('O campo nome do restaurante é obrigatório').min(3, 'O campo deve ter pelo o menos 3 caractéres')
  })
}