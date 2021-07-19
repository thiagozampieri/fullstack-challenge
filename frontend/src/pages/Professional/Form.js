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
import service from '../../services/professional';
import ProfessionalTypeService from '../../services/professional-type';

import './Professional.less';

const headerLayoutCard = {
  xs: { span: 24 },
  sm: { span: 14, offset: 5 },
  md: { span: 10, offset: 7 },
  style: { alignSelf: 'center' }
}

export default function Form({ match }) {
  const { id } = match.params;
  const [data, onChange] = useState({});
  const [professionalTypes, setProfessionaTypes] = useState([]);
  const [loading, isLoading] = useState(id !== 'create');
  const { push } = useHistory();

  useEffect(() => {
    const onLoadProfessionalTypes = async () => {
      const response = await ProfessionalTypeService.list();
      if (!response) return;

      const list = response.data
        .map(({ id, description }) => ({ name: description, value: id }));
      setProfessionaTypes(list);
    }

    const onFetch = async () => {
      if (id === 'create') return;
      const response = await service.show(id);
      if (!response) return;
      await onChange(response.data);
      isLoading(false);
    }

    onLoadProfessionalTypes();
    onFetch();
  }, [id])

  const onAction = async () => {
    const response = (id === 'create') ? await service.create(data) : await service.put(data);
    if (response) {
      notification
        .success({ message: 'Atenção', description: 'Gravado com sucesso!' });
        setTimeout(() => push(`/professional/${response.data.id}`), 100);
    }
  }

  const isDisabled = useMemo(() => {
    const fields = ['name', 'phone', 'email', 'professional_type_id', 'status'];
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
                <Typography strong type="h5" alignText="center">Profisional</Typography>
              </Col>
            </Row>
            
            <Row type="flex" justify="center" align="middle" gutter={16} className="boxList">
              <Col span={24}>
                <Input
                  placeholder="Nome"
                  onChange={(name) => onChange({ ...data, name })}
                  value={data?.name}
                  size="large"
                />
              </Col>

              <Col span={24}>
                <Input
                  placeholder="Telefone"
                  onChange={(phone) => onChange({ ...data, phone })}
                  value={data?.phone}
                  size="large"
                />
              </Col>

              <Col span={24}>
                <Input
                  placeholder="E-mail"
                  onChange={(email) => onChange({ ...data, email })}
                  value={data?.email}
                  size="large"
                />
              </Col>

              <Col span={24}>                
                <Select 
                  placeholder="Tipo Profissional"
                  onChange={(professional_type_id) => onChange({ ...data, professional_type_id })}
                  value={data?.professional_type_id}
                  size="large"
                  options={professionalTypes}
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
                  onClick={() => push('/professional')}
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