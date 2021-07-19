import React from 'react';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";
import { Menu, Layout } from 'antd'; 

import './Header.less';

const { Header: HeaderWrapper } = Layout;

const levels = [
  { key: '1', path: '/home', name: 'Principal' },
  { key: '2', path: '/professional', name: 'Professionais' },
  { key: '3', path: '/professional-type', name: 'Tipos de Professional' }
]

function Header({ location }) {
  const { push } = useHistory();
  const index = levels.findIndex(({ path }) => {
    // eslint-disable-next-line no-unused-vars
    const [ _, pathLevel ] = path.split("/");
    // eslint-disable-next-line no-unused-vars
    const [ _1, locationLevel ] = location.pathname.split("/");
    return pathLevel === locationLevel;
  }) || 0;

  const position = (index+1).toString();

  return (
    <HeaderWrapper>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[position]}
        style={{ lineHeight: '64px' }}  
      >
        {levels.map(item => (
          <Menu.Item key={item.key} onClick={() => push(item.path)}>{item.name}</Menu.Item>
        ))}        
      </Menu>
    </HeaderWrapper>
  )
}

export default withRouter(Header);