import React from 'react';
import Styled from 'styled-components';

export default function EmptyCart() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-10 mx-auto'>
					<Cart>Your Cart is Currently Empty</Cart>
				</div>
			</div>
		</div>
	);
}

const Cart = Styled.h1`
	margin: 110px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;
