import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function BootstrapCarousel() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='images/carousel.jpg'
						alt='First slide'
						style={{
							width: 'auto',
							height: '500px',
						}}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='images/carousel1.jpg'
						alt='Third slide'
						style={{
							width: 'auto',
							height: '500px',
						}}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='images/carousel2.jpg'
						alt='Third slide'
						style={{
							width: 'auto',
							height: '500px',
						}}
					/>
				</Carousel.Item>
			</Carousel>
			<br />
			<br />
			<br />
			<hr />
		</div>
	);
}
