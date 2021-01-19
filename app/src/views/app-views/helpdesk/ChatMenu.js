import React, { useState } from 'react'
import ChatData from "assets/data/chat.data.json"
import { Badge } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { COLOR_1, COLOR_4 } from 'constants/ChartConstant';
import { useHistory } from "react-router-dom";

const ChatMenu = ({ match, location }) => {
	const [ list, setList ] = useState(ChatData);
	let history = useHistory();
	const openChat = id => {
		const data = list.map( elm => {
			if(elm.id === id) {
				elm.unread = 0
			}
			return elm
		})
		setList(data)
		history.push(`${match.url}/${id}`)
	}

	const id = parseInt(location.pathname.match(/\/([^/]+)\/?$/)[1])

	return (
		<div className="chat-menu">
			<div className="chat-menu-list">
				{
					list.map( (item, i) => (
						<div 
							key={ `chat-item-${item.id}` } 
							onClick={ () => openChat(item.id) } 
							className={ `chat-menu-list-item ${ i === (list.length - 1)? 'last' : '' } ${ item.id === id ? 'selected' : '' }` }
							style={{ border: `1px solid ${COLOR_4}`, borderRadius: '4px', margin: '0 0 5px', paddingRight: '10px' }}
						>
							<AvatarStatus src={ item.avatar } name={ item.name } subTitle={ item.msg[item.msg.length - 1].text } />
							<div className="text-right">
								{ item.unread === 0 ? <span></span> : <Badge count={ item.unread } style={{ backgroundColor: COLOR_1, fontSize: '0.75rem' }} />}
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default ChatMenu