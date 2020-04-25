import React, { Component } from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';

import Styled from 'styled-components';
import { Loading } from './Loading';
import { FadeTransform } from 'react-animation-components';
import { fetchMenu, openModal, addProductToCart } from '../redux/actionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	menu: state.menu,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMenu: () => dispatch(fetchMenu()),

	addProductToCart: (id) => dispatch(addProductToCart(id)),
});

class PizzaMenu extends Component {
	componentDidMount() {
		this.props.fetchMenu();
	}

	render() {
		if (this.props.menu.isLoading) {
			return <Loading />;
		} else if (this.props.menu.errMess) {
			return <h2>Error Message</h2>;
		} else if (this.props.menu.menu != null) {
			return (
				<div className='container'>
					<div
						className='row'
						style={{
							textAlign: 'center',
							fontSize: '1.5rem',
							margin: '0 auto',
							fontWeight: 'bold',
							lineHeight: '3rem',
						}}>
						Our Delicious Pizza's
					</div>

					<div className='row'>
						{this.props.menu.menu.map((menu) => {
							return (
								<PizzaCard
									className='col-md-4 '
									key={menu.id}
									style={{ padding: '20px' }}>
									<FadeTransform
										in
										transformProps={{
											exitTransform: 'scale(0.5) translateY(-50%)',
										}}>
										<Card className='cardShow'>
											<CardImg
												top
												width='100%'
												src={menu.img}
												alt='Card image cap'
											/>
											<CardBody>
												<CardTitle style={{ fontWeight: 'bold' }}>
													{menu.title}
												</CardTitle>
												<CardText>{menu.info}</CardText>

												<Button
													style={{ background: '#FF8E38', border: 'none' }}
													disabled={menu.inCart ? true : false}
													onClick={() => {
														this.props.addProductToCart(menu.id);
													}}>
													{menu.inCart ? 'In cart' : 'Add To Cart'}
												</Button>
											</CardBody>
										</Card>
									</FadeTransform>
								</PizzaCard>
							);
						})}
					</div>
				</div>
			);
		} else {
			return <h2>No pizza avaliable</h2>;
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMenu);

const PizzaCard = Styled.div`
	
	.cardShow {
		box-shadow: 5px 5px 8px 5px #888888;
		transition: all 1s linear;
	} 
	.cardShow: hover {
		border: 0.04rem solid rgba(0,0,0,0.2);
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
		transform: scale(1.1);
	}
	
`;
