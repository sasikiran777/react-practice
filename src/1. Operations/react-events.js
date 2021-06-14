import React from 'react';

function ReactEvents() {
    function add() {
        let num1 = parseInt(document.getElementById('number_1').value)
        let num2 = parseInt(document.getElementById('number_2').value)
        console.log(num1 + num2)
    }

    return (
        <div>
            <p>
                <input type='text' id="number_1" />
            </p>
            <p>
                <input type='text' id="number_2" />
            </p>
            <p>
                {/*<button onClick={ () => add() } > Add </button>*/}
                <button onClick={ add }> Add </button>
            </p>
        </div>
    );
}

export default ReactEvents;
