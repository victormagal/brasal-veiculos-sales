import { LabelForm } from './styles';

export default function Label({ target, content }) {
  return (
    <LabelForm htmlFor={target}>{content}</LabelForm>
  );
}
