import React from 'react';
import { ISpacer } from './types';

const Spacer: React.FC<ISpacer> = ({
    vertical,
    horizontal
}) => {
    return (
    <div
     style={{
        width: `${vertical}px` || '0',
        height: `${horizontal}px` || '0'
     }}></div>
    );
};

export default Spacer;