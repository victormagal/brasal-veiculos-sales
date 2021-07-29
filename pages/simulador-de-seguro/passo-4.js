import Button from '../../components/Button';
import CepInput from '../../components/CepInput';
import CpfInput from '../../components/CpfInput';
import DateInput from '../../components/DateInput';
import ErrorMessage from '../../components/ErrorMessage';
import Header from "../../components/Header";
import Label from '../../components/Label';
import Option from '../../components/Option';
import PhoneInput from '../../components/PhoneInput';
import { simulatorSchema } from '../../helpers/schemas';
import TextInput from '../../components/TextInput';
import { Field, Form, Formik } from "formik";
import { 
  CheckCircleIcon,
  MinusCircleIcon
 } from '@heroicons/react/outline';

import { armoredes, brands, genders, incomes, models, states, usages } from '../../helpers/selectContent';

export default function Simulator() {
  const onSubmit = (values, actions) => {
    console.log('SUBMIT', values);
  }

  const requestCep = (e, setFieldValue) => {
    const { value } = e.target;
    const cep = value?.replace(/[^0-9]/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('place', data.logradouro);
        setFieldValue('district', data.bairro);
        setFieldValue('city', data.localidade);
        setFieldValue('state', data.uf);
      })
  }

  return (
    <main>
      <Header />
      <div className="flex">
        <div className="bg-blue flex items-center p-5 text-white w-1/4">
          <CheckCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 01</span>
        </div>
        <div className="bg-blue flex items-center text-white p-5 w-1/4">
          <CheckCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 02</span>
        </div>
        <div className="bg-blue flex items-center p-5 w-1/4">
          <CheckCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 03</span>
        </div>
        <div className="bg-blue flex items-center-5 p-5 w-1/4">
          <MinusCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 04</span>
        </div>
      </div>
      <Formik
        initialValues={{
          armored: '',
          birth: '',
          brand: '',
          cep: '',
          city: '',
          complement: '',
          cpf: '',
          district: '',
          gender: '',
          income: '',
          mail: '',
          model: '',
          name: '',
          number: '',
          phone: '',
          place: '',
          secured: '',
          state: '',
          usage: '',
        }}
        onSubmit={onSubmit}
        validationSchema={simulatorSchema}
      >
        {({ errors, handleChange, setFieldValue, values }) => (
          <Form className='lg:container mx-auto grid grid-cols-12 gap-4 my-12'>
            <ul className='col-span-6 col-start-4'>
              <li className='flex flex-col'>
                <Label target='cep' content='Qual o CEP onde o carro dorme?' />
                <CepInput 
                  guide={false}
                  placeholder='Ex: XX.XXX-XXX'
                  id='cep'
                  name='cep'
                  onBlur={(e) => requestCep(e, setFieldValue)}
                  onChange={handleChange}
                  value={values.cep}
                />
                {errors.cep && (
                  <ErrorMessage content={errors.cep} />
                )}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='place' content='Logradouro' />
                <TextInput 
                  placeholder='Seu nome'
                  id='place'
                  name='place'
                  onChange={handleChange}
                  value={values.place} 
                />
                {errors.name && (
                  <ErrorMessage content={errors.place} />
                )}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='number' content='Número' />
                <TextInput 
                  placeholder='Número'
                  id='number'
                  name='number'
                  onChange={handleChange}
                  value={values.number} 
                />
                {errors.name && (
                  <ErrorMessage content={errors.number} />
                )}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='complement' content='Complemento' />
                <TextInput 
                  placeholder='Complemento'
                  id='complement'
                  name='complement'
                  onChange={handleChange}
                  value={values.complement} 
                />
                {errors.name && (
                  <ErrorMessage content={errors.complement} />
                )}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='district' content='Bairro' />
                <TextInput 
                  placeholder='Bairro'
                  id='district'
                  name='district'
                  onChange={handleChange}
                  value={values.district} 
                />
                {errors.name && (
                  <ErrorMessage content={errors.district} />
                )}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='city' content='Cidade' />
                <TextInput 
                  placeholder='Cidade'
                  id='city'
                  name='city'
                  onChange={handleChange}
                  value={values.city} 
                />
                {errors.name && (
                  <ErrorMessage content={errors.city} />
                )}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='state' content='Estado' />
                <Field
                  as='select'
                  id='state'
                  name='state'
                  className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                >
                  <Option value={null} label='Selecione...' />
                  {states.map((state, index) => (
                    <Option key={index} value={state.id} label={state.label} />
                  ))}
                </Field>
                {errors.state && (
                  <ErrorMessage content={errors.state} />
                )}
              </li>
            </ul>
            <ul className='col-span-6 col-start-4 flex justify-end'>
              <li>
                <Button type="reset" label="Limpar" />
              </li>
              <li className='ml-4'>
                <Button type="submit" label="Continuar" />
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </main>
  )
}
