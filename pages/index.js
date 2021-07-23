import { useEffect, useState } from 'react';
import Button from '../components/Button';
import CurrencyPriceInput from '../components/CurrencyPrice';
import ErrorMessage from '../components/ErrorMessage';
import FeeInput from '../components/FeeInput';
import Header from "../components/Header";
import Label from '../components/Label';
import PeriodInput from '../components/PeriodInput';
import { Form, Formik } from "formik";
import { priceSchema } from '../helpers/schemas';

const onlyNumbers = (value) => {
  return value.replace(/[^0-9]/g, '');
}

export default function Home() {
  const [finalAmortization, setFinalAmortization] = useState([]);
  const [finalBalance, setFinalBalance] = useState([]);
  const [finalFee, setFinalFee] = useState([]);

  useEffect(() => {
    console.log(finalAmortization);
    console.log(finalBalance);
    console.log(finalFee);
  }, [finalAmortization]);

  const onSubmit = (values, actions) => {
    const amortizations = [0];
    const balance = [];
    const fees = [0];

    const amount = (onlyNumbers(values.total) - onlyNumbers(values.entry)) / 100;
    const fee = onlyNumbers(values.fee) / 10000;
    const period = parseInt(values.period);
    
    balance.push(amount);

    const portion = amount * (Math.pow((1 + fee), period) * fee) / (Math.pow((1 + fee), period) - 1); 

    for (let index = 0; index < period; index++) {
      let nextFee = (balance[index] * fee).toFixed(2);
      let nextAmortization = (portion - nextFee).toFixed(2);
      let nextBalance = (balance[index] - nextAmortization).toFixed(2);

      amortizations.push(nextAmortization);
      balance.push(nextBalance);
      fees.push(nextFee);
    }
    
    setFinalAmortization(amortizations);
    setFinalBalance(balance);
    setFinalFee(fees);
  }

  return (
    <main>
      <Header />
      <Formik
        initialValues={{
          entry: '',
          fee: '',
          period: '',
          total: '',
        }}
        onSubmit={onSubmit}
        validationSchema={priceSchema}
      >
        {({ errors, handleChange, values }) => (
          <Form className="lg:container mx-auto grid grid-cols-12 gap-4">
            <ul className="col-span-3">
              <li className="border flex flex-col p-2 rounded-md">
                <Label target="total" content="Qual o valor do seu veículo?" />
                <CurrencyPriceInput 
                  type='text' 
                  guide={false}
                  placeholder='Ex: R$ 10.000,00'
                  id='total'
                  name='total'
                  onChange={handleChange}
                  value={values.total} 
                />
                {errors.total ? (
                  <ErrorMessage content={errors.total} />
                ) : null}
              </li>
            </ul>
            <ul className="col-span-3">
              <li className="border flex flex-col p-2 rounded-md">
                <Label target="entry" content="Qual o valor de entrada?" />
                <CurrencyPriceInput 
                  type='text' 
                  guide={false}
                  placeholder='Ex: R$ 10.000,00'
                  id='entry'
                  name='entry'
                  onChange={handleChange}
                  value={values.entry} 
                />
                {errors.entry ? (
                  <ErrorMessage content={errors.entry} />
                ) : null}
              </li>
            </ul>
            <ul className="col-span-3">
              <li className="border flex flex-col p-2 rounded-md">
                <Label target="fee" content="Taxa de juros" />
                <FeeInput 
                  type='text'
                  guide={false}
                  placeholder='Ex: 1,99%'
                  id='fee'
                  name='fee'
                  onChange={handleChange}
                  value={values.fee}
                />
                {errors.fee ? (
                  <ErrorMessage content={errors.fee} />
                ) : null}
              </li>
            </ul>
            <ul className="col-span-3">
              <li className="border flex flex-col p-2 rounded-md">
                <Label target="period" content="Período" />
                <PeriodInput 
                  type='text'
                  guide={false}
                  placeholder='12'
                  id='period'
                  name='period'
                  onChange={handleChange}
                  value={values.period}
                />
                {errors.period ? (
                  <ErrorMessage content={errors.period} />
                ) : null}
              </li>
              <fieldset className='mt-4'>
                <ul className='flex justify-end'>
                  <li className='mr-4'>
                    <Button type="reset" label="Limpar" />
                  </li>
                  <li>
                    <Button type="submit" label="Calcular" />
                  </li>
                </ul>
              </fieldset>
            </ul>
          </Form>
        )}
      </Formik>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Juros</th>
            <th>Amortização</th>
            <th>Parcela</th>
            <th>Saldo devedor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr>
            <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
