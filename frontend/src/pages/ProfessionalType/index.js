import React, { useMemo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Row,
  Col,
  Typography,
  Table,
  Button,
  Popconfirm,
  Affix,
  IconButton,
  Tag 
} from '../../components';
import service from '../../services/professional-type';

import './ProfessionalType.less';

const containerLayout = {
  xs: { span: 24 },
  style: { padding: 20 }
}

export default function ProfessionalType() {
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
    await push(`/professional-type/${id}`);
  }

  const onAdd = async () => {
    await push(`/professional-type/create`);
  }

  useEffect(() => {
    fetch();
  }, [])

  const columns = useMemo(() => {
    return [
      { title: 'Descrição', dataIndex: 'description', key: 'description', width: '80%' },
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
          <Typography type="h3" alignText="center">Tipos de Professional</Typography>
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