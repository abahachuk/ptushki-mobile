import PropTypes from 'prop-types';

export const pickerValueType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
});
export const pickerValuesArrayType = PropTypes.arrayOf(pickerValueType);
