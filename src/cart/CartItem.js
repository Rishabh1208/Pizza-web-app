import React from 'react';
import Styled from 'styled-components';

export default function CartItem({ item, increment, decrement, removeItem }) {
	return (
		<div className='row my-2 text-capitalize text-center'>
			<div className='col-10 mx-auto col-lg-2'>
				<img
					src={item.img}
					style={{ width: '5rem', height: '5rem' }}
					className='img-fluid'
					alt='product'></img>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<span className='d-lg-none'>product: </span>
				{item.title}
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<span className='d-lg-none'>price: </span>
				{item.price}
			</div>
			<div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
				<div className='d-flex justify-content-center'>
					<Icon
						className='btn btn-black mx-1 '
						onClick={() => decrement(item.id)}>
						-
					</Icon>
					<Icon className='btn btn-black mx-1 '>{item.count}</Icon>
					<Icon
						className='btn btn-black mx-1 '
						onClick={() => increment(item.id)}>
						+
					</Icon>
				</div>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<div className='cart-icon' onClick={() => removeItem(item.id)}>
					<i className='fa fa-trash'></i>
				</div>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<strong>${item.total}</strong>
			</div>
		</div>
	);
}

const Icon = Styled.span`

	background: transparent;
	text-transform: capitalize;
	font-size: 0.8rem !important;
	color: #232528 !important;
	border-radius: 0 !important;
	border: 0.1rem solid #232528 !important;

&:hover {
	background: #232528 !important;
	color: white !important;
`;
