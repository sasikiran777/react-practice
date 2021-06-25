import React from "react";
import PropTypes from 'prop-types'
import sample from "../assets/img/sample.jpg"

const Products = ({name, img}) => {

    // handle Logically
    // const path = img && img.file

    return (
        <>
            <div>
                <p>{name}</p>
                <p><img src={img.file}/></p>
                {/*<p><img src={path || sample} height='200' width='200' /></p>*/}
            </div>
        </>
    )
}


Products.prototype = {
    name: PropTypes.string.require,
    img: PropTypes.object.require,

}

Products.defaultProps = {
    name: "sample furniture",
    img: {
        file: sample
    }
}

export default Products
