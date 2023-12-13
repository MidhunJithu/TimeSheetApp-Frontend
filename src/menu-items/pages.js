// assets
import { LoginOutlined, DatabaseOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'tracker',
  title: 'Timesheet',
  type: 'group',
  children: [
    {
      id: 'timesheet',
      title: 'timesheet',
      type: 'item',
      url: '/timesheet',
      icon: icons.DatabaseOutlined,
      target: true
    }
  ]
};

export default pages;
