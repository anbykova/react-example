import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

let DevTools;
export default DevTools = createDevTools(
    // Monitors are individually adjustable with props.
    // Consult their repositories to learn about those props.
    // Here, we put LogMonitor inside a DockMonitor.
    // Note: DockMonitor is visible by default.
    <DockMonitor toggleVisibilityKey='ctrl-h'
                changePositionKey='ctrl-q'
                defaultIsVisible={true}>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);