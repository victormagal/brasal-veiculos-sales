export default function TextInput({ ...inputProps }) {
  return (
    <input 
      type='text'
      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm'
      { ...inputProps }
    />
  );
}
