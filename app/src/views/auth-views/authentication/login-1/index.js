import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Card, Row, Col } from "antd";

const backgroundStyle = {
	backgroundImage: 'url(/login_background.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}

const LoginOne = props => {
	return (
		<div className="h-100" style={backgroundStyle}>
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={7}>
						<Card>
							<div className="my-4">
								<div className="text-center">
									<img className="img-fluid" src="red-diamond.png" alt="Red Diamond Logo" style={{ marginBottom: '6%', marginTop: 0, paddingTop: 0, height: 100 }} />
								</div>
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										<LoginForm {...props} />
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default LoginOne