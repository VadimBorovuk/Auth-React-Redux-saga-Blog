import React from 'react';
import './style.scss';

const Loader = () => {
    return (
        <div className="block_loader">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
