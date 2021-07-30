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
import Image from "next/image";

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
    <main className="pb-8">
      <Header />
      <div className="flex">
        <div className="bg-blue flex items-center p-5 text-white w-1/3">
          <CheckCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 01</span>
        </div>
        <div className="bg-blue flex items-center text-white p-5 w-1/3">
        <CheckCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md">Passo 02</span>
        </div>
        <div className="bg-blue flex items-center p-5 w-1/3">
          <MinusCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 03</span>
        </div>
      </div>
      <div className="w-1/3 mx-auto text-center mt-16 mb-5">
        <h2 className='text-xl'>Descreva o estado de conservação do seu veiculo. Inclua fotos do seu veiculo</h2>
      </div>
      <div className="container mx-auto grid grid-cols-6 gap-4 items-center justify-end">
        <textarea placeholder="Escreva aqui" className="border p-5 col-start-2 col-end-6 h-40"></textarea>
        <div className="col-start-2 col-end-6 my-4 bg-blue p-5 rounded text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
            <input type="file" className="inline ml-3"></input>
        </div>
        <div className="col-start-2  mx-auto items-center justify-end">
          <div className="mx-2 text-center p-3 border rounded">
            <Image
                src="/car/01.png"
                alt="Nome do Carro"
                width={165}
                height={110}
              />
          </div>
        </div>
        <ul className='col-span-6 col-start-1 mx-auto flex'>
              <li>
                <Button type="reset" label="Limpar" />
              </li>
              <li className='ml-4'>
                <Button type="submit" label="Continuar" />
              </li>
            </ul>
      </div>
    </main>
  )
}
