import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { Layout } from "antd";
import Logo from './Logo';
import { NAV_TYPE_TOP, SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from 'constants/ThemeConstant';
import utils from 'utils'
import NavProfile from './NavProfile'

const { Header } = Layout;

export const HeaderNav = props => {
  const { navCollapsed, navType, headerNavColor, isMobile } = props;

  const isNavTop = navType === NAV_TYPE_TOP ? true : false
  const mode = utils.getColorContrast(headerNavColor)
  const getNavWidth = () => {
    if(isNavTop || isMobile) {
      return '0px'
    }
    if(navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`
    } else {
      return `${SIDE_NAV_WIDTH}px`
    }
  }

  return (
    <Header className={`app-header ${mode}`} style={{ background: '#f7f1e3' }} >
      <div className={ `app-header-wrapper ${ isNavTop ? 'layout-top-nav' : '' }` }>
        <Logo logoType={ mode } />
        <div className="nav" style={{ width: `calc(100% - ${ getNavWidth() })`}}>
        <div className="nav-left mt-4 ml-4" style={{ paddingLeft: '10px' }}>
            <Link to="#"><p>Updates</p></Link>
          </div>
          <div className="nav-right mt-4">
            <Link to="#"><p>Session: 34 minutes</p></Link>
            <NavProfile />
          </div>
        </div>
      </div>
    </Header>
  )
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, headerNavColor, mobileNav } =  theme;
  return { navCollapsed, navType, headerNavColor, mobileNav }
};

export default connect(mapStateToProps)(HeaderNav);