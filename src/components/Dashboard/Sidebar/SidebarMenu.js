import homeLight from '@icons/home-light.svg';
import product from '@images/product.png';
import marketing from '@images/marketing.png';
import group from '@images/group.png';
import support from '@images/dollar.png';

export const sideBarAdminItems = [
    {
        id: 1,
        name: 'Dashboard',
        iconLight: homeLight,
        linkTo: '/home'
    },
    {
        id: 2,
        name: 'User Management',
        iconLight: group,
        linkTo: '/user_management'
    },
    {
        id: 3,
        name: 'Campaign Management',
        iconLight: marketing,
        linkTo: '/campaign_management'
    },
    {
        id: 4,
        name: 'Product Management',
        iconLight: product,
        linkTo: '/product_management'
    },
    {
        id: 5,
        name: 'Transactions History',
        iconLight: support,
        linkTo: '/transactions_history'
    }
];

export const sideBarFundRaiserItems = [
    {
        id: 1,
        name: 'Dashboard',
        iconLight: homeLight,
        linkTo: '/fundraise'
    },
    {
        id: 2,
        name: 'Campaign',
        iconLight: marketing,
        linkTo: '/fundraise/campaigns_management'
    },
    {
        id: 3,
        name: 'Product Management',
        iconLight: product,
        linkTo: '/fundraise/products_management'
    },
    {
        id: 4,
        name: 'Transactions History',
        iconLight: support,
        linkTo: '/fundraise/transactions_history'
    }
];

export const sideBarBuyItems = [
    {
        id: 1,
        name: 'Dashboard',
        iconLight: homeLight,
        linkTo: '/seller'
    },
    {
        id: 2,
        name: 'Product Listing',
        iconLight: marketing,
        linkTo: '/product_listing'
    },
    {
        id: 3,
        name: 'Chat',
        iconLight: marketing,
        linkTo: '/sellerchat'
    }
];
