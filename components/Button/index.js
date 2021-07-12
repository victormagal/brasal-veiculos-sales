import { FormButton } from './styles';

export default function Button({ type, label }) {
  return (
    <FormButton type={type}>{label}</FormButton>
  );
}
