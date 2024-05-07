import React, { useState } from 'react';
import { Modal, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';

import './partner-task-definition.scss';
import ExitValidationFrom from '../../exit-validation-form/exit-validation-form';
import PartnerDefineFormDDF from './partner-task-definition-ddf';

export default function PartnerTaskDefinitionForm({ selectedNode }) {
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  const onSubmitDefinitionForm = (values, api) =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log('FormValues', values);
        resolve('Yay');
      }, 1500)
    );

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
            <PartnerDefineFormDDF id={'partner-define-form'} setOpenCancelDialog={setOpenCancelDialog} onSubmitDefinitionForm={onSubmitDefinitionForm} />
          </TabPanel>
          {/* Exit Validation Form */}
          <TabPanel>
            <ExitValidationFrom />
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
