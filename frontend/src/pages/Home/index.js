import React from 'react';
import { 
  Row,
  Col,
  Typography,
} from '../../components';

import './Home.less';

export default function Home() {  
  return (
    <>
      <Row gutter={16} style={{ marginBottom: 30 }}>
        <Col span={24}>
          <Typography type="h3" alignText="center">Escolha uma das opções do menu</Typography>
        </Col>
      </Row>
    </>
  );
}