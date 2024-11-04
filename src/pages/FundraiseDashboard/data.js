import shoes from '@images/shoes.png';
import phone from '@images/phone.png';

import users from '@icons/users.svg';
import campaigns from '@icons/campaigns.svg';

import donations from '@icons/donations.svg';

export const Products = [
    {
        id: 1,
        productname: 'Apple Watch',
        price: '$12',
        campaign: 'Medical',
        img: phone
    },
    {
        id: 2,
        productname: 'Lather wallet',
        price: '$50',
        campaign: 'Food',
        img: shoes
    },
    {
        id: 3,
        productname: 'Jogging Shoe',
        price: '$18',
        campaign: 'Sports',
        img: shoes
    },
    {
        id: 4,
        productname: 'Mac Book',
        price: '$18',
        campaign: 'Shelter',
        img: shoes
    },
    {
        id: 5,
        productname: 'IPhone 15 pro max',
        price: '$50',
        campaign: 'Medical',
        img: shoes
    },
    {
        id: 6,
        productname: 'Laptop Table',
        price: '$18',
        campaign: 'Sports',
        img: shoes
    },
    {
        id: 7,
        productname: 'Watch 14MKV',
        price: '$18',
        campaign: 'Food',
        img: shoes
    }
];

export const statCards = [
    {
        id: 1,

        title: 'Total Products',
        value: '92,680',
        icon: users
    },
    {
        id: 2,
        title: 'Total Campaigns',
        value: '25',
        icon: campaigns
    },
    {
        id: 3,
        title: 'Donations Collected',
        value: '$580.5K',
        icon: donations
    }
];
