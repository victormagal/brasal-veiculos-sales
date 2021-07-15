import * as Yup from 'yup';

export const priceSchema = Yup.object().shape({
  entry: Yup.string().required(),
  fee: Yup.string().required(),
  period: Yup.string().required(),
  total: Yup.string().required(),
});

export const simulatorSchema = Yup.object().shape({
  armored: Yup.string().nullable().required(),
  birth: Yup.string().required(),
  brand: Yup.string().nullable().required(),
  cep: Yup.string().required(),
  city: Yup.string().required(),
  complement: Yup.string().required(),
  cpf: Yup.string().required(),
  district: Yup.string().required(),
  gender: Yup.string().nullable().required(),
  income: Yup.string().nullable().required(),
  mail: Yup.string().email().required().email(),
  model: Yup.string().nullable().required(),
  name: Yup.string().min(3).required(),
  number: Yup.string().required(),
  phone: Yup.string().required(),
  place: Yup.string().required(),
  secured: Yup.string().min(3).required(),
  state: Yup.string().nullable().required(),
  usage: Yup.string().nullable().required(),
});
