import Icon, {
  BlockOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { DashboardCustom } from 'assets/icons';
import { UserRoles } from 'types';
import ISODashboard from 'views/isoDashboard';
import { SiderRoutes } from './types';
import ISOOrganization from 'views/iso/organization';
import ISOPeople from 'views/iso/people';
import ISOPhysical from 'views/iso/physical';
import ISOTechnological from 'views/iso/technological';

export const isoTabs: Array<SiderRoutes> = [
  {
    path: '',
    component: ISODashboard,
    label: 'Dashboard',
    id: 'dashboard',
    index: true, // index will create it first route when navigating to /
    icon: <Icon className="icon active-icon" component={DashboardCustom} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'org-control',
    component: ISOOrganization,
    label: 'Organization',
    id: 'org-control',
    icon: <BlockOutlined />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'people-control',
    component: ISOPeople,
    label: 'People',
    id: 'people-control',
    icon: <TeamOutlined />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'physical-control',
    component: ISOPhysical,
    label: 'Physical',
    id: 'physical-control',
    icon: <DatabaseOutlined />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'tech-control',
    component: ISOTechnological,
    label: 'Technological',
    id: 'tech-control',
    icon: <DesktopOutlined />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  }
];
