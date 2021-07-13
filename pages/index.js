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

export default function Home() {
  const currencyMask = () => createNumberMask({
    prefix: 'R$ ',
    suffix: 'a'
  });


  const [total, setTotal] = useState('');
  const [entry, setEntry] = useState('');
  const [fee, setFee] = useState('');
  const [period, setPeriod] = useState('');


  const formik = useFormik({
    initialValues: {
      valor: '',
      entrada: '',
      taxa: '',
      periodo: ''
    },
    validationSchema: Yup.object({
      valor: Yup.string().required('Campo obrigatório'),
      entrada: Yup.string().required('Campo obrigatório'),
      taxa: Yup.string().required('Campo obrigatório'),
      periodo: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: values => {
      setTotal(values.valor);
      setEntry(values.entrada);
      setFee(values.taxa);
      setPeriod(values.periodo);
      console.log(total, entry, fee, period);
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
                  <Label target="valor" content="Valor" />
                  <CurrencyInput 
                    type='text' 
                    guide={false}
                    placeholder='Ex: R$ 10.000,00'
                    id='valor'
                    name='valor'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.valor} 
                  />
                  {formik.touched.valor && formik.errors.valor ? (
                    <ErrorMessage content={formik.errors.valor} />
                  ) : null}
                </li>
                <li className="flex flex-col mt-2">
                  <Label target="entrada" content="Valor de entrada" />
                  <CurrencyInput 
                    type='text' 
                    guide={false}
                    placeholder='Ex: R$ 10.000,00'
                    id='entrada'
                    name='entrada'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.entrada} 
                  />
                  {formik.touched.entrada && formik.errors.entrada ? (
                    <ErrorMessage content={formik.errors.entrada} />
                  ) : null}
                </li>
                <li className="flex flex-col mt-2">
                  <Label target="taxa" content="Taxa de juros" />
                  <FeeInput 
                    type='text'
                    guide={false}
                    placeholder='Ex: 1,99%'
                    id='taxa'
                    name='taxa'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.taxa}
                  />
                  {formik.touched.taxa && formik.errors.taxa ? (
                    <ErrorMessage content={formik.errors.taxa} />
                  ) : null}
                </li>
                <li className="flex flex-col mt-2">
                  <Label target="periodo" content="Período" />
                  <PeriodInput 
                    type='text'
                    guide={false}
                    placeholder='12'
                    id='periodo'
                    name='periodo'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.periodo}
                  />
                  {formik.touched.periodo && formik.errors.periodo ? (
                    <ErrorMessage content={formik.errors.periodo} />
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
