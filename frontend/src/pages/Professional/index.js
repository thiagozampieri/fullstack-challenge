import React, { useMemo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Typography, Table, Button, Popconfirm, Affix, IconButton, Tag } from '../../components';
import service from '../../services/professional';

import './Professional.less';

const containerLayout = {
  xs: { span: 24 },
  style: { padding: 20 }
}

export default function Professional() {
  const { push } = useHistory();
  const [data, setData] = useState([]);

  const fetch = async () => {
    const response = await service.list();
    if (response) setData(response.data);
  }

  const onDestroy = async (id) => {
    if (!id) return;
    await service.destroy(id);
    await fetch();
  }

  const onEdit = async (id) => {
    if (!id) return;
    await push(`/professional/${id}`);
  }

  const onAdd = async () => {
    await push(`/professional/create`);
  }

  useEffect(() => {
    fetch();
  }, [])

  const columns = useMemo(() => {
    return [
      { title: 'Nome', dataIndex: 'name', key: 'name' },
      { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
      { title: 'E-mail', dataIndex: 'email', key: 'email' },
      { 
        title: 'Tipo Professional',
        dataIndex: 'professionalType',
        key: 'professionalType',
        render: (val) => val?.description
      },
      { 
        title: 'Situação',
        dataIndex: 'status',
        key: 'status',
        render: (val) => {
          return (
            <Tag color={(val ? 'green' : 'red')}>
              {val ? 'Ativo' : 'Inativo'}
            </Tag>
          )
        }
      },
      {
        title: 'Ações',
        dataIndex: '',
        key: 'x',
        render: (_, { id }) => ([
          <Button style={{ marginRight: 10 }} onClick={() => onEdit(id)}>Editar</Button>,
          <Popconfirm
          title="Tem certeza que deseja remover?"
          onConfirm={() => onDestroy(id)}
          okText="Sim" 
          cancelText="Não"
          >
            <Button>Remover</Button>
          </Popconfirm>
        ]),
      },
    ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row gutter={16} style={{ marginBottom: 30 }}>
        <Col span={20}>
          <Typography type="h3" alignText="center">Professionais</Typography>
        </Col>
        <Col span={4}>
          <Affix offsetTop={100}>
            <IconButton
              type="primary"
              onClick={onAdd}
              icon="plus"
            />
          </Affix>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col {...containerLayout}>
          <Table
            size="small"
            pagination={false}
            width="100%"
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
    </>
  );
}