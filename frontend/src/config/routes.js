import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const ProfessionalType = lazy(() => import('../pages/ProfessionalType'));
const ProfessionalTypeForm = lazy(() => import('../pages/ProfessionalType/Form'));
const Professional = lazy(() => import('../pages/Professional'));
const ProfessionalForm = lazy(() => import('../pages/Professional/Form'));

export const ROUTES = [
  { path: '/home', component: Home, title: 'Principal' },
  { path: '/professional-type', component: ProfessionalType, title: 'Tipos de Professional' },
  { path: '/professional-type/:id', component: ProfessionalTypeForm, title: 'Tipo de Professional' },
  { path: '/professional', component: Professional, title: 'Professionais' },
  { path: '/professional/:id', component: ProfessionalForm, title: 'Professional' },
];
