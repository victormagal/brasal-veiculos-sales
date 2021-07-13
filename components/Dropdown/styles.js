import styled from 'styled-components';

export const Select = styled.select.attrs({
  className: 'border border-gray-200 font-light mt-1 p-2 rounded-md text-sm w-full'
})`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #CCC, #CCC);
  background-position: 
    calc(100% - 20px) calc(1rem + 1px),
    calc(100% - 15px) calc(1rem + 1px),
    calc(100% - 2.5rem) 0.45rem;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5rem;
  background-repeat: no-repeat;
`;