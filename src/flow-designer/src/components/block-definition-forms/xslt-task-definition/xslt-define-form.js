import { Form, Grid, Column, TextArea, TextInput, Button } from '@carbon/react';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function XsltDefineForm({ id, setOpenCancelDialog, onSubmitDefinitionForm }) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: ''
    }
  });

  return (
    <>
      <Form aria-label="xslt-define-Form" name="xslt-define-Form" data-testid={id} onSubmit={handleSubmit(onSubmitDefinitionForm)}>
        <Grid className="define-grid">
          <Column className="col-margin" lg={16}>
            <TextInput
              id="name"
              data-testid="name"
              labelText="Name*"
              invalidText={errors.name?.message}
              invalid={errors.name ? true : false}
              helperText={'Should not contain &,<,>,",\',.,{,}, characters.'}
              {...register('name', {
                required: 'Name is required',
                pattern: { value: /^[^&<>"'.{}]+$/i, message: 'Name should not contain &,<,>,",\',.,{,}, characters.' },
                maxLength: { value: 100, message: 'Name must be no longer then 100 characters' }
              })}
            />
          </Column>
          <Column className="col-margin" lg={16}>
            <TextArea
              id="description"
              data-testid="description"
              labelText="Description*"
              invalidText={errors.description?.message}
              invalid={errors.description ? true : false}
              {...register('description', {
                required: 'Description is required',
                maxLength: { value: 100, message: 'Description must be no longer then 100 characters' }
              })}
            />
          </Column>
        </Grid>
        <Grid className="buttons-wrapper-grid">
          <Column lg={8}>
            <Button data-testid="cancel" name="cancel" kind="secondary" type="button" className="cancel-button" onClick={() => setOpenCancelDialog(true)}>
              Cancel
            </Button>
          </Column>
          <Column lg={8}>
            <Button data-testid="save" name="save" kind="secondary" type="submit" className="save-button">
              Save
            </Button>
          </Column>
        </Grid>
      </Form>
    </>
  );
}
