import React, { useState, useMemo, useEffect } from 'react';
import { pick } from 'lodash';
import { useHistory } from 'react-router-dom';
import { 
  Row,
  Col,
  Typography,
  Card,
  Input,
  Button,
  Select,
  notification,
  Skeleton
} from '../../components';
import service from '../../services/professional-type';

import './ProfessionalType.less';

const headerLayoutCard = {
  xs: { span: 24 },
  sm: { span: 14, offset: 5 },
  md: { span: 10, offset: 7 },
  style: { alignSelf: 'center' }
}

export default function Form({ match }) {
  const { id } = match.params;
  const [data, onChange] = useState({});
  const [loading, isLoading] = useState(id !== 'create');
  const { push } = useHistory();

  useEffect(() => {
    const onFetch = async () => {
      if (id === 'create') return;
      const response = await service.show(id);
      if (!response) return;
      await onChange(response.data);
      isLoading(false);
    }

    onFetch();
  }, [id])

  const onAction = async () => {
    const response = (id === 'create') ? await service.create(data) : await service.put(data);
    if (response) {
      notification
        .success({ message: 'Atenção', description: 'Gravado com sucesso!' });
        setTimeout(() => push(`/professional-type/${response.data.id}`), 100);
    }
  }

  const isDisabled = useMemo(() => {
    const fields = ['description', 'status'];
    const pickFields = pick(data, fields);

    const validate = fields.every(elem => pickFields[elem] != null);
    return !validate;
  }, [data]);

  if (loading) return <Skeleton active />

  return (
    <>
      <Row gutter={16} className="box">
        <Col {...headerLayoutCard}>
        <Card>
            <Row>
              <Col span="24">
                <Typography strong type="h5" alignText="center">Tipo de Profissional</Typography>
              </Col>
            </Row>
            
            <Row type="flex" justify="center" align="middle" gutter={16} className="boxList">
              <Col span={24}>
                <Input
                  placeholder="Descrição"
                  onChange={(description) => onChange({ ...data, description })}
                  value={data?.description}
                  size="large"
                />
              </Col>

              <Col span={24}>                
                <Select 
                  placeholder="Situação"
                  onChange={(status) => onChange({ ...data, status })}
                  value={data?.status}
                  size="large"
                  options={[
                    { name: 'Sim', value: true },
                    { name: 'Não', value: false },
                  ]}
                />
              </Col>

            </Row>

            <Row type="flex" justify="space-between" className="button-block" style={{ marginTop: 20 }}>
              <Col>
                <Button
                  size="large"
                  type="link"
                  onClick={() => push('/professional-type')}
                  style={{ padding: '20px 60px 40px 60px' }}
                >
                  Voltar
                </Button>
              </Col>
              <Col>
                <Button
                  size="large"
                  type="primary"
                  onClick={onAction}
                  disabled={isDisabled}
                  style={{ padding: '20px 60px 40px 60px' }}
                >
                  Salvar
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}