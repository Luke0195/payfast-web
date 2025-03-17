import * as yup from 'yup';

export const schema = () => {
  return yup.object({
    name: yup.string().required('O campo nome é obrigatório').min(3, 'O campo nome deve ter pelo o menos 3 caractéres'),
    slug: yup.string().required('O campo slug é obrigatório').min(3, 'O campo slug deve ter pelo o menos 3 caracteres'),
    description: yup.string().required('O campo description é obrigatório'),
    avatarImageUrl: yup.string().required('O campo avatar é obrigatório'),
    coverImageUrl: yup.string().required('O campo cover image url deve é obrigatório')
  })
}