import React from 'react';

// Normal Prop
function ReactProps(props) {
    return (
        <div>
            { props.data }
            { props.name }
        </div>
    );
}

// Object Key Pick
// function ReactProps(props) {
//    const { data, name } = props
//     return (
//         <div>
//             { data }
//             { name }
//         </div>
//     );
// }


// Object destructuring
// function ReactProps({ data, name }) {
//     return (
//         <div>
//             { data }
//             { name }
//         </div>
//     );
// }

export default ReactProps;
