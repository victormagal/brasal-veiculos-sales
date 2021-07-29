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
      <div className="flex mb-12">
        <div className="bg-blue p-5 text-white flex items-center w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="inline ml-10">Passo 01</h3>
        </div>
        <div className="bg-blue text-white p-5 flex items-center w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="inline ml-10">Passo 02</h3>
        </div>
        <div className="bg-blue p-5 text-white flex items-center w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="inline ml-10">Passo 03</h3>
        </div>
        <div className="p-5 bg-gray-50 flex items-center w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="inline ml-10">Passo 04</h3>
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
          <Form className='lg:container mx-auto grid grid-cols-12 gap-4'>
            <ul className='col-span-6 col-start-4'>
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
