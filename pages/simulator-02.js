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
		<div className="bg-blue text-white px-3 py-5 items-center flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="inline ml-10">Passo 02</h3>
    </div>
		<div className="px-3 py-5 bg-gray-50 items-center flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="inline ml-10">Passo 03</h3>
    </div>
		<div className="px-3 py-5 bg-gray-50 items-center flex">
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
                  <li className="flex flex-col">
                    <Label target="name" content="Meu nome é" />
                    <TextInput 
                      placeholder='Seu nome'
                      id='name'
                      name='name'
                      onChange={handleChange}
                      value={values.name} 
                    />
                    {errors.name && (
                      <ErrorMessage content={errors.name} />
                    )}
                  </li>
                  <li className="flex flex-col mt-2">
                    <Label target="mail" content="E o meu e-mail é" />
                    <TextInput 
                      placeholder='Seu email'
                      id='mail'
                      name='mail'
                      onChange={handleChange}
                      value={values.mail} 
                    />
                    {errors.mail && (
                      <ErrorMessage content={errors.mail} />
                    )}
                  </li>
                  <li className="flex flex-col mt-2">
                    <Label target="phone" content="Se precisar, meu telefone é" />
                    <PhoneInput 
                      placeholder='Ex: (99) 99999-9999'
                      id='phone'
                      name='phone'
                      onChange={handleChange}
                      value={values.phone}
                    />
                    {errors.phone && (
                      <ErrorMessage content={errors.phone} />
                    )}
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="col-span-3">
              <fieldset>
                <ul>
                  <li className='flex flex-col'>
                    <Label target='brand' content='A marca do seu veículo é' />
                    <Field 
                      as='select' 
                      id='brand' 
                      name='brand'
                      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                    >
                      <Option value={null} label='Selecione...' />
                      {brands.map((brand, index) => (
                        <Option key={index} value={brand.id} label={brand.label} />
                      ))}
                    </Field>
                    {errors.brand && (
                      <ErrorMessage content={errors.brand} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='model' content='O modelo do seu veículo é' />
                    <Field
                      as='select'
                      id='model'
                      name='model'
                      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                    >
                      <Option value={null} label='Selecione...' />
                      {models.map((model, index) => (
                        <Option key={index} value={model.id} label={model.label} />
                      ))}
                    </Field>
                    {errors.model && (
                      <ErrorMessage content={errors.model} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='usage' content='Qual é o tipo de uso do carro?' />
                    <Field
                      as='select'
                      id='usage'
                      name='usage'
                      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                    >
                      <Option value={null} label='Selecione...' />
                      {usages.map((usage, index) => (
                        <Option key={index} value={usage.id} label={usage.label} />
                      ))}
                    </Field>
                    {errors.usage && (
                      <ErrorMessage content={errors.usage} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='armored' content='Seu carro é blindado?' />
                    <Field
                      as='select'
                      id='armored'
                      name='armored'
                      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                    >
                      <Option value={null} label='Selecione...' />
                      {armoredes.map((armored, index) => (
                        <Option key={index} value={armored.id} label={armored.label} />
                      ))}
                    </Field>
                    {errors.armored && (
                      <ErrorMessage content={errors.armored} />
                    )}
                  </li>
                </ul>
              </fieldset>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      <footer class="mr-1 mt-5">
        <div className="bg-blue px-3 py-5 text-white flex items-center float-right rounded">
          <h3 className="inline mr-10">Continuar</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
	</footer>
    </main>
  )
}