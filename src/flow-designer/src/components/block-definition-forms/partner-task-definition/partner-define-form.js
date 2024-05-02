import { Form, Grid, Column, TextArea, TextInput, Button, Select, SelectItem } from '@carbon/react';
import React from 'react';

export default function PartnerDefineForm({ id, setOpen }) {
  return (
    <>
      <Form aria-label="partner form" data-testid={id}>
        <Grid className="define-grid">
          <Column className="col-margin" lg={16}>
            <TextInput id="one" labelText="Name*" />
          </Column>
          <Column className="col-margin" lg={16}>
            <TextArea id="one" labelText="Description" />
          </Column>
          <Column className="col-margin" lg={16}>
            <TextInput id="one" labelText="Estimate (Days)*" />
          </Column>
          <Column className="col-margin" lg={16}>
            <Select id={`select-1`} labelText="Role">
              <SelectItem value="" text="" />
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </Select>
          </Column>
        </Grid>
        <Grid className="buttons-wrapper-grid">
          <Column lg={8}>
            <Button type="button" kind="secondary" className="cancel-button" onClick={() => setOpen(true)}>
              Cancel
            </Button>
          </Column>
          <Column lg={8}>
            <Button type="submit" kind="secondary" className="save-button">
              Save
            </Button>
          </Column>
        </Grid>
      </Form>
    </>
  );
}
