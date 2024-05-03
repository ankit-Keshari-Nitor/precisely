import { Form, Grid, Column, TextArea, TextInput, Button, Select, SelectItem } from '@carbon/react';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function PartnerDefineForm({ id, setOpenCancelDialog, onSubmitDefinitionForm }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      estimateDays: 0,
      role: 'option-1'
    }
  });

  return (
    <>
      <Form aria-label="partnerForm" name="partnerForm" data-testid={id} onSubmit={handleSubmit(onSubmitDefinitionForm)}>
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
          <Column className="col-margin" lg={16}>
            <TextInput
              id="estimateDays"
              data-testid="estimateDays"
              labelText="Estimate (Days)*"
              invalidText={errors.estimateDays?.message}
              invalid={errors.estimateDays ? true : false}
              {...register('estimateDays', {
                required: 'Estimate Days is required'
              })}
            />
          </Column>
          <Column className="col-margin" lg={16}>
            <Select id={`role`} data-testid="role" labelText="Role" {...register('role')}>
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </Select>
          </Column>
        </Grid>
        <Grid>
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
