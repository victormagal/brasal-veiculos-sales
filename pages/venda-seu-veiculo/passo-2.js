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
    <main className="h-screen">
      <Header />
      <div className="flex">
        <div className="bg-blue flex items-center p-5 text-white w-1/3">
          <CheckCircleIcon width={24} height={24} className='text-white' />
          <span className="font-sans ml-4 text-md text-white">Passo 01</span>
        </div>
        <div className="bg-blue flex items-center text-white p-5 w-1/3">
          <MinusCircleIcon width={24} height={24}/>
          <span className="font-sans ml-4 text-md">Passo 02</span>
        </div>
        <div className="bg-gray-50 flex items-center p-5 w-1/3">
          <MinusCircleIcon width={24} height={24} className='text-gray-500' />
          <span className="font-sans ml-4 text-md text-gray-500">Passo 03</span>
        </div>
      </div>
      <div className="w-1/3 mx-auto text-center mt-16 mb-5">
      <h2 className='text-xl'>Escolha sua marca</h2>
      </div>
      <div className="w-1/2 mx-auto grid grid-cols-6 gap-4 items-center justify-end">
        <button className="col-start-2 col-end-4 mx-2 text-center p-10 border rounded focus:ring-2 focus:ring-blue">
        <Image
            src="/brand/ford.png"
            alt="Marca Ford"
            width={80}
            height={80}
          />
        </button>
        <button className="col-start-4 col-end-6 mx-2 text-center p-10 border rounded focus:ring-2 focus:ring-blue">
        <Image
            src="/brand/volkswagen.png"
            alt="Marca Volkswagen"
            width={80}
            height={80}
          />
        </button>
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
