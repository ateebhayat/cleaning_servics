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
        status: 'Active',
        img: phone
    },
    {
        id: 2,
        productname: 'Lather wallet',
        price: '$50',
        campaign: 'Food',
        status: 'Pending',

        img: shoes
    },
    {
        id: 3,
        productname: 'Jogging Shoe',
        price: '$18',
        campaign: 'Sports',
        status: 'Active',
        img: shoes
    },
    {
        id: 4,
        productname: 'Mac Book',
        price: '$18',
        campaign: 'Shelter',
        status: 'Pending',
        img: shoes
    },
    {
        id: 5,
        productname: 'IPhone 15 pro max',
        price: '$50',
        campaign: 'Medical',
        status: 'Pending',

        img: shoes
    },
    {
        id: 6,
        productname: 'Laptop Table',
        price: '$18',
        campaign: 'Sports',
        status: 'Active',
        img: shoes
    },
    {
        id: 7,
        productname: 'Watch 14MKV',
        price: '$18',
        campaign: 'Food',
        status: 'Active',
        img: shoes
    }
];

export const statCards = [
    {
        id: 1,
        title: 'Product Bought',
        value: '7500',
        icon: users
    },
    {
        id: 2,
        title: 'Product Sold',
        value: '1500',
        icon: users
    },
    {
        id: 3,
        title: 'Approved Products',
        value: '750',
        icon: campaigns
    },
    {
        id: 4,
        title: 'Amount Donated',
        value: '$1.5K',
        icon: donations
    }
];
