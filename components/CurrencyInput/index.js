import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  requireDecimal: true,
  integerLimit: 9,
  allowNegative: false,
  allowLeadingZeroes: false
}

export default function CurrencyInput({ maskOptions, ...inputProps }) {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  return (
    <MaskedInput 
      mask={currencyMask}
      className='border border-gray-200 font-light mt-1 p-2 rounded-md text-sm' 
      {...inputProps} 
    />
  );
}

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {}
}

CurrencyInput.propTypes = {
  inputMode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.boolean,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.boolean,
    integerLimit: PropTypes.number,
    allowNegative: PropTypes.boolean,
    allowLeadingZeroes: PropTypes.boolean
  })
}
