import { useState } from 'react';
import Button from '../components/Button';
import CurrencyInput from '../components/CurrencyInput';
import ErrorMessage from '../components/ErrorMessage';
import FeeInput from '../components/FeeInput';
import Header from "../components/Header";
import Label from '../components/Label';
import PeriodInput from '../components/PeriodInput';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Simulator() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');


  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      mail: Yup.string().required('Campo obrigatório'),
      phone: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: values => {
      setTotal(values.name);
      setEntry(values.mail);
      setFee(values.phone);
      // console.log(total, entry, fee, period);
    }
  });

  return (
    <main>
      <Header />
      <div className="lg:container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <fieldset>
              <ul>
                <li className="flex flex-col">
                  <Label target="name" content="Meu nome é" />
                  <CurrencyInput 
                    type='text' 
                    guide={false}
                    placeholder='Ex: R$ 10.000,00'
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
                  <CurrencyInput 
                    type='text' 
                    guide={false}
                    placeholder='Ex: R$ 10.000,00'
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
                  <FeeInput 
                    type='text'
                    guide={false}
                    placeholder='Ex: 1,99%'
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
          </form>
        </div>
        <div className="col-span-6"></div>
      </div>
    </main>
  )
}
