import Button from '../components/Button';
import CepInput from '../components/CepInput';
import CpfInput from '../components/CpfInput';
import DateInput from '../components/DateInput';
import Dropdown from '../components/Dropdown';
import ErrorMessage from '../components/ErrorMessage';
import Header from "../components/Header";
import Label from '../components/Label';
import Option from '../components/Option';
import PhoneInput from '../components/PhoneInput';
import Schema from '../helpers/schema';
import TextInput from '../components/TextInput';
import { Form, Formik } from "formik";

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
          name: '',
          mail: '',
          phone: '',
          cep: '',
          cpf: '',
          place: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: '',
          secured: '',
          birth: ''
        }}
        onSubmit={onSubmit}
        validationSchema={Schema}
        render={({ errors, handleChange, setFieldValue, values }) => (
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
                    <Dropdown id='brand'>
                      <Option content='Selecione...' />
                      <Option content='Chevrolet' />
                      <Option content='FIAT' />
                    </Dropdown>
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='model' content='O modelo do seu veículo é' />
                    <Dropdown id='model'>
                      <Option content='Selecione...' />
                      <Option content='Gol' />
                      <Option content='Palio' />
                      <Option content='Versa' />
                    </Dropdown>
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='usage' content='Qual é o tipo de uso do carro?' />
                    <Dropdown id='usage'>
                      <Option content='Selecione...' />
                      <Option content='Particular' />
                      <Option content='Particular, uso comercial e motorista de aplicativo' />
                      <Option content='Representante comercial/vendas' />
                      <Option content='Taxi' />
                      <Option content='Transporte de carga' />
                      <Option content='Transporte de passageiros' />
                    </Dropdown>
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='armored' content='Seu carro é blindado?' />
                    <Dropdown id='armored'>
                      <Option content='Selecione...' />
                      <Option content='Sim' />
                      <Option content='Não' />
                    </Dropdown>
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
                    <TextInput 
                      placeholder='Estado'
                      id='state'
                      name='state'
                      onChange={handleChange}
                      value={values.state} 
                    />
                    {errors.name && (
                      <ErrorMessage content={errors.state} />
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
                    <Dropdown id='income'>
                      <Option content='Selecione...' />
                      <Option content='De R$ 0,00 à R$ 5.000,00' />
                      <Option content='De R$ 5.000,01 à R$ 10.000,00' />
                      <Option content='De R$ 10.000,01 à R$ 15.000,00' />
                    </Dropdown>
                  </li>
                  <li className='flex flex-col mt-2'>
                    <Label target='gender' content='O sexo da pessoal é' />
                    <Dropdown id='gender'>
                      <Option content='Selecione...' />
                      <Option content='Masculino' />
                      <Option content='Feminino' />
                    </Dropdown>
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
      />
    </main>
  )
}
