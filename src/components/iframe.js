import React from 'react';
import '../iframe.css'

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe id="eia_widget" src={src} load="iframe_load"></iframe>
            </div>
        </div>
    );
};

export default Iframe;