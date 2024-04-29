/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { GatewayNodeIcon } from '../../icons';

import './style.scss';

export default function GatewayNode(nodeConfig) {
  const { onDoubleClick } = nodeConfig?.data;

  const [openContextMenu, setOpenContextMenu] = useState(false);

  return (
    <div
      onClick={() => {
        setOpenContextMenu(!openContextMenu);
      }}
      onDoubleClick={onDoubleClick}
      className="gateway-node-container"
    >
      <Handle id="left" type="target" position={Position.Left} className="targetHandlerConnector" isConnectable={nodeConfig?.isConnectable} />
      <GatewayNodeIcon />
      <Handle id="top" type="source" position={Position.Top} className="sourceHandlerConnector" isConnectable={nodeConfig?.isConnectable} />
      <Handle id="bottom" type="source" position={Position.Bottom} className="sourceHandlerConnector" isConnectable={nodeConfig?.isConnectable} />
      <Handle id="right" type="source" position={Position.Right} className="sourceHandlerConnector" isConnectable={nodeConfig?.isConnectable} />
    </div>
  );
}
