import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: false,
  integerLimit: 3,
  allowNegative: false,
  allowLeadingZeroes: false
}

export default function PeriodInput({ maskOptions, ...inputProps }) {
  const periodMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  return (
    <MaskedInput 
      mask={periodMask}
      className='mt-1 text-xl' 
      {...inputProps} 
    />
  );
}

PeriodInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {}
}

PeriodInput.propTypes = {
  inputMode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.boolean,
    allowDecimal: PropTypes.boolean,
    integerLimit: PropTypes.number,
    allowNegative: PropTypes.boolean,
    allowLeadingZeroes: PropTypes.boolean
  })
}
