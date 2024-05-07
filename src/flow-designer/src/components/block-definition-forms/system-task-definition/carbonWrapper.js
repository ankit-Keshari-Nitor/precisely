import React from 'react';
import { DownToBottom, UpToTop, Close, Copy, Locked, Unlocked } from '@carbon/icons-react';
import { getCompatContextProvider } from 'react-querybuilder';
import CarbonValueEditor from './carbonValueEditor';
import carbonValueSelector from './carbonValueSelector';
import CarbonActionElement from './carbonActionElement';
import CarbonOperatorSelector from './carbonOperatorSelector';

export const chakraControlElements = {
  actionElement: CarbonActionElement,
  valueSelector: carbonValueSelector,
  operatorSelector: CarbonOperatorSelector,
  valueEditor: CarbonValueEditor
};

export const chakraTranslations = {
  removeGroup: { label: <Close /> },
  removeRule: { label: <Close /> },
  cloneRuleGroup: { label: <Copy /> },
  cloneRule: { label: <Copy /> },
  lockGroup: { label: <Unlocked /> },
  lockRule: { label: <Unlocked /> },
  lockGroupDisabled: { label: <Locked /> },
  lockRuleDisabled: { label: <Locked /> },
  shiftActionDown: { label: <DownToBottom /> },
  shiftActionUp: { label: <UpToTop /> }
};

const CarbonWrapper = getCompatContextProvider({
  key: 'carbon',
  controlElements: chakraControlElements,
  translations: chakraTranslations
});

export default CarbonWrapper;
