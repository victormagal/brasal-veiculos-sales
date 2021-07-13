export default function Button({ type, label }) {
  return (
    <button className='bg-blue font-bold px-6 py-2 rounded-md text-sm text-white' type={type}>
      {label}
    </button>
  );
}
