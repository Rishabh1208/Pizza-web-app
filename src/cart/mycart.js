import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './cartTotals';
import CartButton from './cartButton';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import {
	increment,
	decrement,
	removeItem,
	clearCart,
	openModal,
	postLogin,
	closeModal,
} from '../redux/actionCreator';

const mapStateToProps = (state) => ({
	cart: state.menu.cart,
	show: state.menu.isModalOpen,
	cartSubTotal: state.menu.cartSubTotal,
	cartTax: state.menu.cartTax,
	cartTotal: state.menu.cartTotal,
	form: state.menu.loginForm,
});

const mapDispatchToProps = (dispatch) => ({
	increment: (id) => dispatch(increment(id)),
	decrement: (id) => dispatch(decrement(id)),
	removeItem: (id) => dispatch(removeItem(id)),
	clearCart: () => dispatch(clearCart()),
	openModal: () => dispatch(openModal()),
	closeModal: () => dispatch(closeModal()),
	postLogin: (
		firstname,
		lastname,
		telnum,
		email,
		agree,
		contactType,
		address
	) =>
		dispatch(
			postLogin(firstname, lastname, telnum, email, agree, contactType, address)
		),
});

function Cart(props) {
	if (props.cart.length > 0) {
		return (
			<React.Fragment>
				<h2 style={{ textAlign: 'center', margin: '50px' }}>Your Cart</h2>
				<CartColumns />
				<CartList
					cart={props.cart}
					increment={props.increment}
					decrement={props.decrement}
					removeItem={props.removeItem}
				/>
				<CartTotals
					cartSubTotal={props.cartSubTotal}
					cartTax={props.cartTax}
					cartTotal={props.cartTotal}
					clearCart={props.clearCart}
				/>
				<CartButton
					show={props.show}
					openModal={props.openModal}
					postLogin={props.postLogin}
					closeModal={props.closeModal}
				/>
				<div>
					{props.form.address ? (
						<div className='container'>
							<div className='row'>
								<div className='col-6'>
									<Alert color='success'>
										<h4 className='alert-heading'>
											Congratulations! Your Order has been Placed.
										</h4>
										<p>
											<div>
												Name: {props.form.firstname} {props.form.lastname}
											</div>
											<div>Address: {props.form.address}</div>
											<div>Pizza: {props.cart.length}</div>
											<div>Price: ${props.cartTotal}</div>
										</p>
										<hr />
										<p className='mb-0'>
											Your Order will be delivered within 30 Minutes.
										</p>
									</Alert>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</React.Fragment>
		);
	} else {
		return <EmptyCart />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
