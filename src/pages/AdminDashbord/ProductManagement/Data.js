import shoes from '@images/shoes.png';
import phone from '@images/phone.png';

import mvpIcon from '@icons/mostvalued.svg';
import userIcon from '@icons/activeusers.svg';

import budgetIcon from '@icons/budget.svg';
import expenseIcon from '@icons/expenses.svg';

export const Products = [
    {
        id: 1,
        CompaignName: 'Medical',
        FundraiserName: 'John',
        description: 'High-quality medical supplies for everyone',
        ObjectiveAmount: '$7000K',
        img: phone
    },
    {
        id: 2,
        CompaignName: 'Food',
        FundraiserName: 'Alice',
        description: 'Delicious and sustainable food options',
        ObjectiveAmount: '$6000K',
        img: shoes
    },
    {
        id: 3,
        CompaignName: 'Sports',
        FundraiserName: 'Michael',
        description: 'Top-notch sports equipment for athletes',
        ObjectiveAmount: '$5500K',
        img: phone
    },
    {
        id: 4,
        CompaignName: 'Shelter',
        FundraiserName: 'Sarah',
        description: 'Comfortable shelters for those in need',
        ObjectiveAmount: '$5000K',
        img: shoes
    },
    {
        id: 5,
        CompaignName: 'Food',
        FundraiserName: 'Alice',
        description: 'Delicious and sustainable food options',
        ObjectiveAmount: '$6000K',
        img: phone
    },
    {
        id: 6,
        CompaignName: 'Medical',
        FundraiserName: 'John',
        description: 'High-quality medical supplies for everyone',
        ObjectiveAmount: '$7000K',
        img: shoes
    }
];

export const statCards = [
    {
        id: 1,
        title: 'Fund Raisers',
        value: '7500$',
        icon: budgetIcon
    },
    {
        id: 2,
        title: 'users (Buyers/Sellers)',
        value: '1500$',
        icon: expenseIcon
    },
    {
        id: 3,
        title: 'ReRaise Earning',
        value: '750',
        icon: mvpIcon
    },
    {
        id: 4,
        title: 'Donations Collected',
        value: '1.5K',
        icon: userIcon
    }
];
