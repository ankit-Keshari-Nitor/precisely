import React, { useState } from 'react';
import { Modal, Tabs, TabList, Tab, TabPanels, TabPanel, Select, SelectItem, Button, TextInput } from '@carbon/react';
import './system-task-definition.scss';
import ExitValidationFrom from '../../exit-validation-form';
import SystemDefineForm from './system-define-form';
import { QueryBuilder, defaultOperators } from 'react-querybuilder';
import CarbonWrapper from './carbonWrapper';

export default function SystemTaskDefinitionForm({ selectedNode }) {
  const [open, setOpen] = useState(false);

  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const fields = [
    { name: 'firstName', label: 'DataType-1' },
    { name: 'lastName', label: 'DataType-2', operators: defaultOperators.filter((op) => op.name === '=' || op.name === 'in') }
  ];
  const initialQuery = {
    combinator: 'and',
    rules: [
      { field: 'firstName', operator: ['demo-1', 'beginsWith'], value: 'Stev' },
      { field: 'lastName', operator: ['demo-2', 'in'], value: 'Vai,Vaughan' }
    ]
  };

  const combinator = [
    { name: 'and', value: 'and', label: 'AND' },
    { name: 'or', value: 'or', label: 'OR' }
  ];
  const [query, setQuery] = useState(initialQuery);
  const onSubmitDefinitionForm = (data) => {
    console.log('onSubmitDefinitionForm', data);
  };
  return (
    <div className="activity-form">
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>Define</Tab>
          <Tab>Exit Validation</Tab>
        </TabList>
        <TabPanels>
          {/* Define Form */}
          <TabPanel>
            <SystemDefineForm id={'system-define-form'} setOpenCancelDialog={setOpenCancelDialog} onSubmitDefinitionForm={onSubmitDefinitionForm} />
          </TabPanel>
          {/* Exit Validation Form */}
          <TabPanel>
            {/* <QueryBuilderDnD> */}
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <CarbonWrapper>
                <QueryBuilder
                  fields={fields}
                  query={query}
                  onQueryChange={setQuery}
                  combinators={combinator}
                  controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
                  // __RQB_PROPS__
                />
              </CarbonWrapper>
            </div>
            {/* </QueryBuilderDnD> */}
            <ExitValidationFrom />
            {/* <h4>Query</h4>
            <pre>
              <code>{formatQuery(query, 'json')}</code>
            </pre> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal
        open={openCancelDialog}
        onRequestClose={() => setOpenCancelDialog(false)}
        isFullWidth
        modalHeading="Confirmation"
        primaryButtonText="Exit"
        secondaryButtonText="Cancel"
      >
        <p
          style={{
            padding: '0px 0px 1rem 1rem'
          }}
        >
          Your changes are not saved. Do you want to exit without saving changes?{' '}
        </p>
      </Modal>
    </div>
  );
}
