import { Select } from './styles';

export default function Dropdown({ id, children }) {
  return (
    <Select
      id={id} 
      name={id}
    >
      {children}
    </Select>
  );
}
