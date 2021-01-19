import React, { useState } from 'react'
import { Button, Col, Input, Row, Typography, Select, Badge } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import InnerAppLayout from 'layouts/inner-app-layout';
import ChatContent from './ChatContent';
import ChatMenu from './ChatMenu';
import ChatData from "assets/data/chat.data.json"

const { Title } = Typography
const { Option } = Select

const Helpdesk = props => {

    const [ list, setList ] = useState(ChatData);

    const searchOnChange = e => {
		const query = e.target.value;
		const data = ChatData.filter(item => {
			return query === '' ? item : item.name.toLowerCase().includes(query)
		})
		setList(data)
	}

	return (
        <div>
            <Row gutter={16} className="mb-2">
                <Col span={3} className="ml-2">
                    <Title level={ 2 }>Conversations</Title>
                </Col>
                <Col span={5}>
                    <Input
                        placeholder="Search" 
                        onChange={ searchOnChange }
                        prefix={
                            <SearchOutlined />
                        }
                        style={{ height: '2rem', fontSize: '0.75rem', borderRadius: '10px' }}
                    />
                </Col>
                <Col span={2}>
                    <Button style={{ height: '2rem', paddingTop: '5px', backgroundColor: '#f7f1e3', fontSize: '0.75rem', border: 'transparent', borderRadius: '10px' }}>
                        <FilterOutlined />
                        Filter
                    </Button>
                </Col>
                <Col span={2} offset={11}>
                    <Select size="small" defaultValue="online" style={{ width: 100, fontSize: '0.75rem' }}>
                        <Option value="online"><Badge status="success" />Online</Option>
                        <Option value="offline"><Badge status="error" />Offline</Option>
                    </Select>
                </Col>
            </Row>
            <div className="chat">
                <InnerAppLayout 
                    sideContent={ <ChatMenu { ...props }/> }
                    mainContent={ <ChatContent { ...props }/> }
                    sideContentWidth={ 350 }
                    sideContentGutter={ false }
                    border
                />
            </div>
        </div>
	)
}

export default Helpdesk