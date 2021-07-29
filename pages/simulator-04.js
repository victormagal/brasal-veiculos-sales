import Button from '../components/Button';
import CepInput from '../components/CepInput';
import CpfInput from '../components/CpfInput';
import DateInput from '../components/DateInput';
import ErrorMessage from '../components/ErrorMessage';
import Header from "../components/Header";
import Label from '../components/Label';
import Option from '../components/Option';
import PhoneInput from '../components/PhoneInput';
import { simulatorSchema } from '../helpers/schemas';
import TextInput from '../components/TextInput';
import { Field, Form, Formik } from "formik";

import { armoredes, brands, genders, incomes, models, states, usages } from '../helpers/selectContent';

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
	<div class="lg:container mx-auto grid grid-cols-4 gap-0 mb-10">
		<div className="bg-blue px-3 py-5 text-white flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="inline ml-10">Passo 01</h3>
    </div>
		<div className="bg-blue text-white px-3 py-5 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="inline ml-10">Passo 02</h3>
    </div>
		<div className="bg-blue px-3 py-5 text-white flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="inline ml-10">Passo 03</h3>
    </div>
		<div className="bg-blue text-white px-3 py-5 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="inline ml-10">Passo 04</h3>
    </div>
	</div>
  <div className="m-auto w-4/5 p-11 border rounded shadow-lg">
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
          <Form className='lg:container mx-auto'>
            <div>
            <fieldset>
                <ul>
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
              </fieldset>
            </div>
            <div className='col-span-12 flex justify-end'>
              <fieldset className='mt-4'>
                <ul className='flex'>
                  <li className='mr-4'>
                    <Button type="reset" label="Limpar" />
                  </li>
                  <li>
                    <Button type="submit" label="Calcular" />
                  </li>
                </ul>
              </fieldset>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </main>
  )
}
