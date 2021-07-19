import React from 'react';
import { withRouter } from 'react-router';
import { Layout } from 'antd'; 

function LayoutContent({ location, children, ...props }) {
  return (
    <Layout.Content
      id={location.pathname.replace("/", "")}
      {...props}
    >
      {children}
    </Layout.Content>
  );
}

export default withRouter(LayoutContent);