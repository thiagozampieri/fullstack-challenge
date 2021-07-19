import Api from './api';

const SERVICE = '/professional-type';

const create = async (data) => {
  if (!data) return;
  return Api.post(`${SERVICE}/create`, data);
};

const update = async (data) => {
  if (!data || !data?.id) return;
  return Api.put(`${SERVICE}/${data?.id}`, data);
};

const destroy = async (id) => {
  if (!id) return;
  return Api.delete(`${SERVICE}/${id}`);
};

const show = async (id) => {
  if (!id) return;
  return Api.get(`${SERVICE}/${id}`);
};

const list = async () => {
  return Api.get(`${SERVICE}`);
};

const ProfessionalType = {
  create,
  destroy,
  list,
  show,
  update
};

export default ProfessionalType;