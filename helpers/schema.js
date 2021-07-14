import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().min(3).required(),
  mail: Yup.string().email().required().email(),
  phone: Yup.string().required(),
  cep: Yup.string().required(),
  cpf: Yup.string().required(),
  secured: Yup.string().min(3).required(),
  birth: Yup.string().required()
});
