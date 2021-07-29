import Button from '../../components/Button';
// import CepInput from '../components/CepInput';
// import CpfInput from '../components/CpfInput';
// import DateInput from '../components/DateInput';
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
          <MinusCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 02</span>
        </div>
        <div className="bg-gray-50 flex items-center p-5 w-1/4">
          <MinusCircleIcon width={24} height={24} className='text-gray-500' />
          <span className="font-sans ml-4 text-md text-gray-500">Passo 03</span>
        </div>
        <div className="bg-gray-50 flex items-center-5 p-5 w-1/4">
          <MinusCircleIcon width={24} height={24} className='text-gray-500' />
          <span className="font-sans ml-4 text-md text-gray-500">Passo 04</span>
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
            <ul className="col-span-6 col-start-4">
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
