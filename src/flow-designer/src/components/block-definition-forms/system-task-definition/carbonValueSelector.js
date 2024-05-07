import * as React from 'react';
import { toOptions } from 'react-querybuilder';
import { Select } from '@carbon/react';

const carbonValueSelector = ({
  className,
  handleOnChange,
  options,
  value,
  title,
  disabled,
  // Props that should not be in extraProps
  testID: _testID,
  rule: _rule,
  rules: _rules,
  level: _level,
  path: _path,
  context: _context,
  validation: _validation,
  operator: _operator,
  field: _field,
  fieldData: _fieldData,
  multiple: _multiple,
  listsAsArrays: _listsAsArrays,
  schema: _schema,
  ...extraProps
}) => {
  return (
    <>
      <Select id="selector-label" className={className} title={title} value={value} disabled={disabled} onChange={(e) => handleOnChange(e.target.value)} {...extraProps}>
        {toOptions(options)}
      </Select>
    </>
  );
};

export default carbonValueSelector;
