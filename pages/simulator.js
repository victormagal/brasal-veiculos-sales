import { useState } from 'react';
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
import TextInput from '../components/TextInput';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Simulator() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [secured, setSecured] = useState('');
  const [birth, setBirth] = useState('');


  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      phone: '',
      cep: '',
      cpf: '',
      secured: '',
      birth: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      mail: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
      phone: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      cpf: Yup.string().required('Campo obrigatório'),
      secured: Yup.string().required('Campo obrigatório'),
      birth: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: values => {
      setTotal(values.name);
      setEntry(values.mail);
      setFee(values.phone);
      setCep(values.cep);
      setCpf(values.cpf);
      setCpf(values.secured);
      setBirth(values.birth);
      // console.log(total, entry, fee, period);
    }
  });

  return (
    <main>
      <Header />
      <form className="lg:container mx-auto grid grid-cols-12 gap-4" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div className="col-span-3">
          <fieldset>
            <ul>
              <li className="flex flex-col">
                <Label target="name" content="Meu nome é" />
                <TextInput 
                  placeholder='Seu nome'
                  id='name'
                  name='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name} 
                />
                {formik.touched.name && formik.errors.name ? (
                  <ErrorMessage content={formik.errors.name} />
                ) : null}
              </li>
              <li className="flex flex-col mt-2">
                <Label target="mail" content="E o meu e-mail é" />
                <TextInput 
                  placeholder='Seu email'
                  id='mail'
                  name='mail'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mail} 
                />
                {formik.touched.mail && formik.errors.mail ? (
                  <ErrorMessage content={formik.errors.mail} />
                ) : null}
              </li>
              <li className="flex flex-col mt-2">
                <Label target="phone" content="Se precisar, meu telefone é" />
                <PhoneInput 
                  placeholder='Ex: (99) 99999-9999'
                  id='phone'
                  name='phone'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <ErrorMessage content={formik.errors.phone} />
                ) : null}
              </li>
            </ul>
          </fieldset>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cep}
                />
                {formik.touched.cep && formik.errors.cep ? (
                  <ErrorMessage content={formik.errors.cep} />
                ) : null}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cpf}
                />
                {formik.touched.cpf && formik.errors.cpf ? (
                  <ErrorMessage content={formik.errors.cpf} />
                ) : null}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='secured' content='O nome do segurado é' />
                <TextInput 
                  placeholder='Nome do segurado'
                  id='secured'
                  name='secured'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.secured}
                />
                {formik.touched.secured && formik.errors.secured ? (
                  <ErrorMessage content={formik.errors.secured} />
                ) : null}
              </li>
              <li className='flex flex-col mt-2'>
                <Label target='birth' content='Nascido(a) no dia' />
                <DateInput 
                  placeholder='DD/MM/AAAA'
                  id='birth'
                  name='birth'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birth}
                />
                {formik.touched.birth && formik.errors.birth ? (
                  <ErrorMessage content={formik.errors.birth} />
                ) : null}
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
      </form>
    </main>
  )
}
