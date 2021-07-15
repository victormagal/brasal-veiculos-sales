import Button from '../components/Button';
import CurrencyInput from '../components/CurrencyInput';
import ErrorMessage from '../components/ErrorMessage';
import FeeInput from '../components/FeeInput';
import Header from "../components/Header";
import Label from '../components/Label';
import PeriodInput from '../components/PeriodInput';
import { Form, Formik } from "formik";
import { priceSchema } from '../helpers/schemas';

export default function Home() {
  const onSubmit = (values, actions) => {
    console.log('SUBMIT', values)
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
            <div className="col-span-3">
              <fieldset>
                <ul>
                  <li className="flex flex-col">
                    <Label target="total" content="Valor" />
                    <CurrencyInput 
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
                  <li className="flex flex-col mt-2">
                    <Label target="entry" content="Valor de entrada" />
                    <CurrencyInput 
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
                  <li className="flex flex-col mt-2">
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
                  <li className="flex flex-col mt-2">
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
            <div className="col-span-6"></div>
          </Form>
        )}
      </Formik>
    </main>
  )
}
