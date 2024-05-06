/* eslint-disable react/prop-types */
import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import FormSpy from '@data-driven-forms/react-form-renderer/form-spy';
//import componentMapper from '@data-driven-forms/carbon-component-mapper/component-mapper';
import textField from '@data-driven-forms/carbon-component-mapper/text-field';
import textarea from '@data-driven-forms/carbon-component-mapper/textarea';
import select from '@data-driven-forms/carbon-component-mapper/select';
import checkbox from '@data-driven-forms/carbon-component-mapper/checkbox';
import { Button } from '@carbon/react';
//import Button from '@mui/material/Button';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: textField,
  [componentTypes.TEXTAREA]: textarea,
  [componentTypes.SELECT]: select,
  [componentTypes.CHECKBOX]: checkbox
};

const schema = {
  //title: 'Custom MUI buttons',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'name',
      labelText: 'Name*',
      //onChange: handleChange,
      //validateOnMount: true,
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED
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
        }
      ]
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'estimate_days',
      labelText: 'Estimaate (Days)*',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED
        }
      ]
    },
    {
      component: componentTypes.SELECT,
      name: 'role',
      labelText: 'Role',
      options: [
        {
          label: 'AssignRole_Auto_Sponsor',
          value: 'AssignRole_Auto_Sponsor'
          //selectNone: true
        },
        {
          label: 'AssignRole_Auto_Sponsor2',
          value: 'AssignRole_Auto_Sponsor2'
          //selectNone: true
        },
        {
          label: 'Both',
          value: 'Both'
          //selectNone: true
        },
        {
          label: 'Both1',
          value: 'Both1'
          //selectNone: true
        },
        {
          label: 'Both441344',
          value: 'Both441344'
          //selectNone: true
        },
        {
          label: 'BothRole1',
          value: 'BothRole1'
          //selectNone: true
        },
        {
          label: 'BothRole2',
          value: 'BothRole2'
          //selectNone: true
        }
      ]
    },
    {
      component: componentTypes.CHECKBOX,
      name: 'show_to_partner',
      labelText: 'Show to partner'
    }
  ]
};

const FormTemplate = ({ formFields, schema }) => {
  const { handleSubmit, onReset, onCancel, getState } = useFormApi();
  const { submitting, valid, pristine } = getState();
  return (
    <form onSubmit={handleSubmit}>
      {schema.title}
      {formFields}
      <FormSpy>
        {() => (
          <div style={{ marginTop: 10 }}>
            <Button disabled={submitting || !valid} style={{ marginRight: 8 }} type="submit" color="primary" variant="contained">
              Submit
            </Button>
            {/* <Button disabled={pristine} style={{ marginRight: 8 }} onClick={onReset} variant="contained">
              Reset
            </Button> */}
            <Button variant="contained" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        )}
      </FormSpy>
    </form>
  );
};

const asyncSubmit = (values, api) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('FormValues', values);
      resolve('Yay');
    }, 1500)
  );

const FormControls = () => (
  <FormRenderer
    FormTemplate={FormTemplate}
    componentMapper={componentMapper}
    schema={schema}
    onSubmit={asyncSubmit}
    onCancel={() => console.log('Cancelling')}
    onReset={() => console.log('Resetting')}
  />
);

//FormControls.displayName = 'Form controls';

export default FormControls;
