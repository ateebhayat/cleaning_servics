import shoes from '@images/shoes.png';
import phone from '@images/phone.png';

import users from '@icons/users.svg';
import campaigns from '@icons/campaigns.svg';

import donations from '@icons/donations.svg';

export const Products = [
    {
        id: 1,
        CompaignName: 'Medical',
        FundraiserName: 'Emily',
        description: 'Classy and comfortable',
        ObjectiveAmount: '$5600K',
        img: phone
    },
    {
        id: 2,
        CompaignName: 'Food',
        FundraiserName: 'Greg',
        description: 'Sleek and powerful',
        ObjectiveAmount: '$5000K',
        img: shoes
    },
    {
        id: 3,
        CompaignName: 'Sports',
        FundraiserName: 'David',
        description: 'Innovative features',
        ObjectiveAmount: '$4500K',
        img: shoes
    },
    {
        id: 3,
        CompaignName: 'Shelter',
        FundraiserName: 'David Pappu',
        description: 'Innovative features',
        ObjectiveAmount: '$4500K',
        img: shoes
    }
];

export const statCards = [
    {
        id: 1,
        title: 'Fund Raisers',
        value: '7500',
        icon: users
    },
    {
        id: 2,
        title: 'users (Buyers/Sellers)',
        value: '1500',
        icon: users
    },
    {
        id: 3,
        title: 'ReRaise Earning',
        value: '$750K',
        icon: campaigns
    },
    {
        id: 4,
        title: 'Donations Collected',
        value: '$1.5K',
        icon: donations
    }
];
