import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({
	cartSubTotal,
	cartTax,
	cartTotal,
	clearCart,
}) {
	return (
		<React.Fragment>
			<div className='container'>
				<div className='row'>
					<div
						className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'
						style={{ marginRight: '-30px' }}>
						<Link to='/'>
							<button
								className='btn btn-outline-danger text-uppercase mb-3 px-5'
								onClick={() => clearCart()}>
								clear cart
							</button>
						</Link>
						<h5>
							<span className='text-title'>subTotal :</span>
							<strong>{cartSubTotal}$</strong>
						</h5>
						<h5>
							<span className='text-title'>tax :</span>
							<strong>{cartTax}$</strong>
						</h5>
						<h5>
							<span className='text-title'>delivery :</span>
							<strong>1$</strong>
						</h5>
						<h5>
							<span className='text-title'>Total :</span>
							<strong>{cartTotal}$</strong>
						</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
