import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                : {props.ingredients[igKey]}
                </li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Checkout?</p>

            <Button buttonType="Danger">Cancel</Button>
            <Button buttonType="Success">Continue</Button>
        </Aux>
    );
};

export default orderSummary;