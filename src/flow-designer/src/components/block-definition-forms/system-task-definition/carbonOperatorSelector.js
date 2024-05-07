import * as React from 'react';
import { toOptions, useValueEditor } from 'react-querybuilder';
import { Select, TextInput } from '@carbon/react';

const CarbonOperatorSelector = ({
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
  const { valueAsArray, multiValueHandler } = useValueEditor({
    handleOnChange,
    inputType: 'text',
    operator: 'between',
    value: Array.isArray(value) ? value : ['', value],
    type: 'text',
    listsAsArrays: 'false',
    parseNumbers: 'false',
    values: []
  });

  return (
    <>
      <TextInput
        id="txt-input"
        type="text"
        value={valueAsArray.length > 1 ? valueAsArray[0] : ''}
        title={title}
        isDisabled={disabled}
        className={className}
        placeholder={'Operand'}
        labelText={''}
        onChange={(e) => multiValueHandler(e.target.value, 0)}
        {...extraProps}
      />
      <Select
        id="selector-label"
        className={className}
        title={title}
        value={valueAsArray.length > 1 ? valueAsArray[1] : valueAsArray[0]}
        disabled={disabled}
        onChange={(e) => multiValueHandler(e.target.value, 1)}
        {...extraProps}
      >
        {toOptions(options)}
      </Select>
    </>
  );
};

export default CarbonOperatorSelector;
