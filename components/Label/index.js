export default function Label({ target, content }) {
  return (
    <label className='font-semibold text-sm' htmlFor={target}>
      {content}
    </label>
  );
}
