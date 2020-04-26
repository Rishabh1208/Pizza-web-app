import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		color: '#666666',
		fontFamily: 'Helvetica',
		fontSize: 15,
	},
	dark: {
		color: 'black',
		fontSize: 20,
	},
	movieContainer: {
		display: 'flex',
		flexDirection: 'row',
		padding: 5,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 4,
		marginTop: 30,
		lineHeight: 1.5,
	},
	company: {
		display: 'flex',
		flexDirection: 'column',
	},
	tax: {
		marginLeft: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		fontSize: 40,
		fontWeight: 700,
	},
	bill: {
		display: 'flex',
		flexDirection: 'column',
	},
	invoice: {
		marginLeft: 50,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		fontWeight: 550,
	},
	tableContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 24,
		margin: 30,
	},

	container: {
		flexDirection: 'row',
		height: 30,
		alignItems: 'center',
		fontStyle: 'bold',
		color: 'white',
		backgroundColor: '#666666',
		paddingLeft: 5,
		paddingRight: 5,
	},
	description: {
		width: '60%',
	},
	qty: {
		width: '15%',
	},
	rate: {
		width: '15%',
	},
	amount: {
		width: '10%',
	},
	row: {
		flexDirection: 'row',
		borderBottom: 1,
		height: 50,
		alignItems: 'flex-start',
		color: 'black',
		paddingTop: 10,
		paddingLeft: 5,
		paddingRight: 5,
	},
	total: {
		flexDirection: 'row',
		height: 40,
		alignItems: 'center',
		color: 'black',
		paddingLeft: 5,
		paddingRight: 5,
	},
	TotalWidth: {
		width: '48%',
	},
	notes: {
		padding: 5,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 4,
		marginTop: 30,
		lineHeight: 1.5,
	},
	totalAmount: {
		width: '10%',
		backgroundColor: '#DCDCDC',
	},
	totalAmountWidth: {
		width: '48%',
		backgroundColor: '#DCDCDC',
		height: 40,
		paddingTop: 8,
	},
});

export function PdfDocument(props) {
	return (
		<Document>
			<Page style={styles.page}>
				<View style={styles.movieContainer}>
					<View style={styles.tax}>
						<Text>PIZZA INVOICE</Text>
					</View>
				</View>

				<View style={styles.movieContainer}>
					<View style={styles.bill}>
						<Text style={styles.dark}>
							Bill To: {props.form.firstname} {props.form.lastname}
						</Text>
						<Text>Address: {props.form.address}</Text>
						<Text>Telephone: {props.form.telnum}</Text>
						<Text>Email: {props.form.email}</Text>
					</View>

					<View style={styles.invoice}>
						<Text>Invoice# {Math.floor(100000 + Math.random() * 900000)}</Text>
						<Text>
							Invoice Date:{' '}
							{new Intl.DateTimeFormat('en-US', {
								year: 'numeric',
								month: 'short',
								day: '2-digit',
							}).format(new Date())}
						</Text>
					</View>
				</View>
				<View style={styles.tableContainer}>
					<View style={styles.container}>
						<Text style={styles.description}>Item Description</Text>
						<Text style={styles.qty}>Qty</Text>
						<Text style={styles.rate}>Rate</Text>
						<Text style={styles.amount}>Amount</Text>
					</View>
					{props.cart.map((item) => (
						<View style={styles.row} key={item.id}>
							<Text style={styles.description}>{item.title} pizza</Text>
							<Text style={styles.qty}>{item.count}</Text>
							<Text style={styles.rate}></Text>
							<Text style={styles.amount}>{item.total}$</Text>
						</View>
					))}

					<View style={styles.total}>
						<Text style={styles.description}></Text>
						<Text style={styles.qty}>Sub Total</Text>
						<Text style={styles.rate}></Text>
						<Text style={styles.amount}>{props.cartSubTotal}$</Text>
					</View>

					<View style={styles.total}>
						<Text style={styles.description}></Text>
						<Text style={styles.qty}>Tax</Text>
						<Text style={styles.rate}></Text>
						<Text style={styles.amount}>{props.cartTax}$</Text>
					</View>

					<View style={styles.total}>
						<Text style={styles.description}></Text>
						<Text style={styles.qty}>Delivery Charges</Text>
						<Text style={styles.rate}></Text>
						<Text style={styles.amount}>1$</Text>
					</View>

					<View style={styles.total}>
						<Text style={styles.description}></Text>
						<Text style={styles.qty}>TOTAL</Text>
						<Text style={styles.rate}></Text>
						<Text style={styles.totalAmount}>{props.cartTotal}$</Text>
					</View>
				</View>

				<View style={styles.notes}>
					<Text style={styles.dark}>Notes</Text>
					<Text>It was great doing business with you.</Text>
				</View>
			</Page>
		</Document>
	);
}
