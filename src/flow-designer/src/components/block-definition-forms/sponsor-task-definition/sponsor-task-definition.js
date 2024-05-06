import React, { useState } from 'react';
import { Modal, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import './sponsor-task-definition.scss';
import ExitValidationFrom from '../../exit-validation-form/exit-validation-form';
import SponsorDefineForm from './sponsor-define-form';
import SponsorTaskDefinitionDdf from './sponsor-task-definition-ddf';

export default function SponsorTaskDefinitionForm({ selectedNode }) {
  const [open, setOpen] = useState(false);
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
            <SponsorTaskDefinitionDdf />
            {/* <SponsorDefineForm id={'sponsor-define-form'} setOpen={setOpen} /> */}
          </TabPanel>
          {/* Exit Validation Form */}
          <TabPanel>
            <ExitValidationFrom />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal open={open} onRequestClose={() => setOpen(false)} isFullWidth modalHeading="Confirmation" primaryButtonText="Delete" secondaryButtonText="Cancel">
        Do you want to delete Sponsor task-01?
      </Modal>
    </div>
  );
}
