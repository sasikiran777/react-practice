import React from 'react';

function ReactPropsAdv({ name, date, data }) {
    return (
        <div>
            <p>{name}</p>
            <p>{ date }</p>
            <p>{data}</p>
        </div>
    );
}

export default ReactPropsAdv;
