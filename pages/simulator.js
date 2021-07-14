import Button from '../components/Button';
import CepInput from '../components/CepInput';
import CpfInput from '../components/CpfInput';
import DateInput from '../components/DateInput';
import ErrorMessage from '../components/ErrorMessage';
import Header from "../components/Header";
import Label from '../components/Label';
import Option from '../components/Option';
import PhoneInput from '../components/PhoneInput';
import Schema from '../helpers/schema';
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
        validationSchema={Schema}
      >
        {({ errors, handleChange, setFieldValue, values }) => (
          <Form className='lg:container mx-auto grid grid-cols-12 gap-4'>
            <div className="col-span-3">
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
            <div className="col-span-3">
              <fieldset>
                <ul>
                  <li className='flex flex-col'>
                    <Label target='cpf' content='O CPF do segurado é' />
                    <CpfInput 
                      placeholder='Ex: 999.999.999-99'
                      id='cpf'
                      name='cpf'
                      onChange={handleChange}
                      value={values.cpf}
                    />
                    {errors.cpf && (
                      <ErrorMessage content={errors.cpf} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='secured' content='O nome do segurado é' />
                    <TextInput 
                      placeholder='Nome do segurado'
                      id='secured'
                      name='secured'
                      onChange={handleChange}
                      value={values.secured}
                    />
                    {errors.secured && (
                      <ErrorMessage content={errors.secured} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='birth' content='Nascido(a) no dia' />
                    <DateInput 
                      placeholder='DD/MM/AAAA'
                      id='birth'
                      name='birth'
                      onChange={handleChange}
                      value={values.birth}
                    />
                    {errors.birth && (
                      <ErrorMessage content={errors.birth} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='income' content='Com renda familiar mensal de' />
                    <Field
                      as='select'
                      id='income'
                      name='income'
                      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                    >
                      <Option value={null} label='Selecione...' />
                      {incomes.map((income, index) => (
                        <Option key={index} value={income.id} label={income.label} />
                      ))}
                    </Field>
                    {errors.income && (
                      <ErrorMessage content={errors.income} />
                    )}
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='gender' content='O sexo da pessoa é' />
                    <Field
                      as='select'
                      id='gender'
                      name='gender'
                      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full customSelect'
                    >
                      <Option value={null} label='Selecione...' />
                      {genders.map((gender, index) => (
                        <Option key={index} value={gender.id} label={gender.label} />
                      ))}
                    </Field>
                    {errors.gender && (
                      <ErrorMessage content={errors.gender} />
                    )}
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="col-span-3">
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
    </main>
  )
}
