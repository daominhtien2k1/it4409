// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        },
        {
            id: 'building',
            title: 'Building',
            type: 'item',
            url: '/building',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'officer',
            title: 'Officer',
            type: 'item',
            url: '/officer',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'profile',
            type: 'item',
            url: '/profile',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
