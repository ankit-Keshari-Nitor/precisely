import React from 'react';
import { Form, Grid, Column, TextArea, TextInput, Button, Select, SelectItem } from '@carbon/react';
import { useForm } from 'react-hook-form';

export default function AttributeDefineForm({ id, setOpenCancelDialog, onSubmitDefinitionForm }) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      estimateDays: 0,
      attributeType: 'none',
      attributeValue: 'none'
    }
  });

  return (
    <>
      <Form aria-label="attribute-define-Form" name="attribute-define-Form" data-testid={id} onSubmit={handleSubmit(onSubmitDefinitionForm)}>
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
            <Select id={`attributeType`} data-testid="attributeType" {...register('attributeType')} labelText="Attribut Type*">
              <SelectItem value="none" text="None" />
              <SelectItem value="Attribute2_with_values" text="Attribute2 with values" />
              <SelectItem value="USA_states_ACD" text="USA_states_ACD" />
              <SelectItem value="AttributeTask_Scenarious" text="AttributeTask_Scenarious" />
              <SelectItem value="All_Map_Del" text="All_Map_Del" />
              <SelectItem value="Regions_ACD" text="Regions_ACD" />
              <SelectItem value="Attribute_Admin_Edit" text="Attribute_Admin_Edit" />
              <SelectItem value="Sposnortask" text="Sposnortask" />
            </Select>
          </Column>
          <Column className="col-margin" lg={16}>
            <Select id={`attributeValue`} data-testid="attributeValue" {...register('attributeValue')} labelText="Attribute Value*">
              <SelectItem value="none" text="None" />
              <SelectItem value="East" text="East" />
              <SelectItem value="North" text="North" />
              <SelectItem value="South" text="South" />
              <SelectItem value="ValueDelete" text="ValueDelete" />
              <SelectItem value="West" text="West" />
              <SelectItem value="PartnerCount-1" text="PartnerCount-1" />
              <SelectItem value="PartnerCount-2" text="PartnerCount-2" />
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
