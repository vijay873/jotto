import React from 'react'

/**
 * Functional react component for congratulaatory meassage.
 * @function
 * @param {object} props - react props
 * @returns {JSX.Element} - Rendered Component {or null if `success' prop is false}
 */


export default (props) => {
    
    if (props.success) {
        return(
        <div data-test = "componet-congrats">
        <span data-test = "congrats-message">
        Congratualtions!you guessed the word.
        </span>
        </div>);
            
            }  else {
                return (
                    <div data-test = "componet-congrats"/>
                )
            }

        <div/>
    
}