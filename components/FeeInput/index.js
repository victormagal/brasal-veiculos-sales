import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: '',
  suffix: '%',
  includeThousandsSeparator: false,
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  requireDecimal: true,
  integerLimit: 2,
  allowNegative: false,
  allowLeadingZeroes: false
}

export default function FeeInput({ maskOptions, ...inputProps }) {
  const feeMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  return (
    <MaskedInput 
      mask={feeMask}
      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm' 
      {...inputProps} 
    />
  );
}

FeeInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {}
}

FeeInput.propTypes = {
  inputMode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.boolean,
    allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.boolean,
    allowNegative: PropTypes.boolean,
    allowLeadingZeroes: PropTypes.boolean,
    integerLimit: PropTypes.number
  })
}
