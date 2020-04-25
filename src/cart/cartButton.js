import React from 'react';
import CartModal from './cartModal';
import { Button } from 'reactstrap';

export default function cartButton(props) {
	return (
		<div className='container'>
			<div className='row'>
				<div
					className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize
				text-right'
					style={{ marginRight: '-30px' }}>
					<Button
						className='btn btn-danger text-uppercase mb-3 px-5'
						onClick={props.openModal}>
						Proceed to Pay
					</Button>
					{props.show ? (
						<CartModal
							show={props.show}
							postLogin={props.postLogin}
							closeModal={props.closeModal}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
}
