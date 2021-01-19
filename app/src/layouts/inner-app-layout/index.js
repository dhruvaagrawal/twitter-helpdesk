import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Grid, Drawer, Avatar, Tag, Col } from "antd";
import utils from 'utils'
import { MenuOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { COLOR_4 } from 'constants/ChartConstant'

const { useBreakpoint } = Grid;

const LeftSideContent = props => {
	const { sideContent, sideContentWidth = 250, border } = props
	return (
		<div className={ `side-content ${ border ? 'with-border' : '' }` } style={{ width: `${sideContentWidth}px`, fontSize: '0.80rem' }}>
			{ sideContent }
		</div>
	)
}

const LeftSideContentMobile = props => {
	const { sideContent, visible, onSideContentClose } = props
	return (
		<Drawer
			width={ 320 }
			placement="left"
			closable={ false }
			onClose={ onSideContentClose }
			visible={ visible }
			bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}
		>
			<div className="h-100">
				{ sideContent }
			</div>
		</Drawer>
	)
}

const RightSideContent = props => {
	const { sideContentWidth = 250, border } = props
	return (
		<div className={ `side-content ${ border ? 'with-border' : '' }` } style={{ width: `${sideContentWidth}px`, fontSize: '0.80rem', border: `1px solid ${COLOR_4}` }}>
			<div className="text-center mt-4 ml-4" style={{ paddingLeft: '0.6rem' }}>
				<Avatar size={80} />
				<h4 className="mt-3 mb-0">Dhruva Agrawal</h4>
				<Tag color="green" className="ml-2 mt-2">Online</Tag><br />
				{/* <Tag color="red" className="mt-2">Offine</Tag> */}
				<Tag color="default" className="ml-2 mt-3"><PhoneOutlined className="mr-1" />Call</Tag>
				<Tag color="default" className="mt-3"><MailOutlined className="mr-1" />E-mail</Tag><br />
				<p className="mt-3">Room: <span className="ml-2">102</span></p>
				<p>Category: <span className="ml-2">Standard</span></p>
				<p>Country: <span className="ml-2">India</span></p>
			</div>
		</div>
	)
}

export const InnerAppLayout = (props) => {
	const { mainContent, pageHeader, sideContentGutter = true } = props
	const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
	const [ visible, setVisible ] = useState(false);

	const close = (e) => {
		setVisible(false)
	} 

	const openSideContentMobile = () => {
		setVisible(true)
	}

	return (
		<div className="inner-app-layout">
			{ isMobile ? 
				<LeftSideContentMobile 
					visible={ visible }
					onSideContentClose={ close }
					{ ...props }
				/> 
				: 
				<LeftSideContent { ...props}  />
			}
			<div className={ `main-content ${ pageHeader? 'has-page-header' : '' } ${ sideContentGutter? 'gutter' : 'no-gutter' }` }>
				{ isMobile ? 
					<div className={ `font-size-lg mb-3 ${ !sideContentGutter ? 'pt-3 px-3' : '' }` }>
						<MenuOutlined onClick={ () => openSideContentMobile() }/>
					</div>
					:
					null
				}
				{ mainContent }
			</div>
			<RightSideContent { ...props}  />
		</div>
	)
}

InnerAppLayout.propTypes = {
	sideContent: PropTypes.node,
	mainContent: PropTypes.node,
	pageHeader: PropTypes.bool,
	sideContentWidth: PropTypes.number,
	border: PropTypes.bool,
	sideContentGutter: PropTypes.bool
};

export default InnerAppLayout
