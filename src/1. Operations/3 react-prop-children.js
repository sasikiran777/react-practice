import React from 'react';

function ReactPropChildren(props) {
    return (
        <div>
            <p>{ props.data }</p>
            { props.children }
        </div>
    );
}

// function ReactPropChildren(props) {
//     const { data, children } = props
//     return (
//         <div>
//             <p>{ data }</p>
//             { children }
//         </div>
//     );
// }

// function ReactPropChildren({ data, children }) {
//     return (
//         <div>
//             <p>{ data }</p>
//             { children }
//         </div>
//     );
// }

export default ReactPropChildren;
