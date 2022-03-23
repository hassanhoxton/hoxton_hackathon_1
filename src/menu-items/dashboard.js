// assets
import { IconDashboard, IconLayoutKanban } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconLayoutKanban };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'pipeline',
            title: 'Sales Pipeline',
            type: 'item',
            url: '/sales',
            icon: icons.IconLayoutKanban,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
