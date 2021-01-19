import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { 
  EditOutlined, 
  SettingOutlined, 
  ShopOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';

const menuItem = [
	{
		title: "Edit Profile",
		icon: EditOutlined ,
		path: "/"
    },
    
    {
		title: "Account Setting",
		icon: SettingOutlined,
		path: "/"
    }
]

export const NavProfile = ({signOut}) => {
    const profileImg = "/img/avatars/thumb-1.jpg";
    const profileMenu = (
        <div className="nav-profile nav-dropdown">
        <div className="nav-profile-header">
            <div className="d-flex">
            <img src="red-diamond.png" style={{ height: 45 }} />
            <div className="pl-3">
                <h4 className="mb-0">Dhruva Agrawal</h4>
                <span className="text-muted">Agent</span>
            </div>
            </div>
        </div>
        <div className="nav-profile-body">
            <Menu>
            {menuItem.map((el, i) => {
                return (
                <Menu.Item key={i}>
                    <a href={el.path}>
                    <Icon className="mr-3" type={el.icon} />
                    <span className="font-weight-normal">{el.title}</span>
                    </a>
                </Menu.Item>
                );
            })}
            <Menu.Item key={menuItem.legth + 1} onClick={e => signOut()}>
                <span>
                <LogoutOutlined className="mr-3"/>
                <span className="font-weight-normal">Sign Out</span>
                </span>
            </Menu.Item>
            </Menu>
        </div>
        </div>
    )
    return (
        <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
            <Menu className="d-flex align-item-center" mode="horizontal">
                <Menu.Item>
                    <Link to="#"><p className="ml-4 mr-4">User: Dhruva Agrawal</p></Link> 
                </Menu.Item>
            </Menu>
        </Dropdown>
    )
}

export default connect(null, {signOut})(NavProfile)