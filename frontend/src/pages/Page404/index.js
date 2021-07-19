import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from '../../components';

import page404 from './page404.svg';
import './Page404.less';

const basicLayout = {
  xs: { span: 24 },
  sm: { span: 12 },
  /*
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 12 },
  xxl: { span: 12 },
  */
  style: { padding: 10 }
}

export default function Page404() {
  return (
    <Row className="page404" justify="center">
      <Col {...basicLayout}>
        <img src={page404} width="100%" alt="page404" />
      </Col>
      <Col {...basicLayout}>
        <h1>404</h1>
        <h2>UH OH! Você está perdido.</h2>
        <p>Está página que você está procurando parece não existir.
          Como você chegou até aqui é um mistério, mas você pode clicar abaixo e voltar para o início.
        </p>
        <Link to="/">Início</Link>
      </Col>
    </Row>
  );
}