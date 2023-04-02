import { useAppDispatch, useAppSelector } from 'store';
import { getProductOption, setOption } from 'store/product/slice';

import { StyledSelect } from './style';

export const Select = ({ values }: { values?: string[] }) => {
  const option = useAppSelector(getProductOption);
  const dispatch = useAppDispatch();

  return (
    <StyledSelect
      name="select"
      value={option}
      onChange={(e) => dispatch(setOption(e.target.value))}
    >
      {values &&
        values.map((value, idx) => (
          <option key={value + idx} value={value}>
            {!value ? 'Default' : value}
          </option>
        ))}
    </StyledSelect>
  );
};
