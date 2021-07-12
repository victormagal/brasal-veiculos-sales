import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import Header from "../components/Header";
import Input from "../components/Input";
import Label from '../components/Label';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      valor: '',
      entrada: '',
      taxa: '',
      periodo: ''
    },
    validationSchema: Yup.object({
      valor: Yup.number().required('Campo obrigatório'),
      entrada: Yup.number().required('Campo obrigatório'),
      taxa: Yup.number().required('Campo obrigatório'),
      periodo: Yup.number().required('Campo obrigatório'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <main>
      <Header />
      <div className="lg:container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <ul>
                <li className="flex flex-col">
                  <Label target="valor" content="Valor" />
                  <Input
                    id="valor"
                    name="valor" 
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
                  <Input  
                    id="entrada"
                    name="entrada" 
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
                  <Input  
                    id="taxa"
                    name="taxa"  
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
                  <Input  
                    id="periodo"
                    name="periodo" 
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
