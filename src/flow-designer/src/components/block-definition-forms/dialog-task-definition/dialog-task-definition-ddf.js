/* eslint-disable react/prop-types */
import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { FORM_TEMPLATE, COMPONENT_MAPPER } from '../../../constants';
import { componentTypes, validatorTypes } from '@data-driven-forms/react-form-renderer';

export const SCHEMA = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'name',
      labelText: 'Name*',
      helperText: 'Name should not contain &,<,>,",\',.,{,}, characters.',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: 'Name is required'
        },
        {
          type: validatorTypes.PATTERN,
          pattern: /^[^&<>"'.{}]+$/i,
          message: 'Name should not contain &,<,>,",\',.,{,}, characters.'
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 100,
          message: 'Name must be no longer then 100 characters'
        }
      ]
    },
    {
      component: componentTypes.TEXTAREA,
      name: 'description',
      labelText: 'Description*',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 100,
          message: 'Name must be no longer then 100 characters'
        }
      ]
    }
  ]
};

const DialogDefineFormDDF = ({ id, setOpenCancelDialog, onSubmitDefinitionForm }) => (
  <FormRenderer
    id={id}
    FormTemplate={FORM_TEMPLATE}
    componentMapper={COMPONENT_MAPPER}
    schema={SCHEMA}
    onSubmit={onSubmitDefinitionForm}
    onCancel={() => console.log('Cancelling')}
    onReset={() => console.log('Resetting')}
  />
);

export default DialogDefineFormDDF;
