import MaskedInput from 'react-text-mask';

export default function DateInput({ ...inputProps }) {
  return (
    <MaskedInput 
      type='text'
      mask={[/[0-9]/, /\d/, '/', /[0-9]/, /\d/, '/', /[0-9]/, /\d/, /\d/, /\d/]}
      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm'
      {...inputProps}
    />
  );
}
