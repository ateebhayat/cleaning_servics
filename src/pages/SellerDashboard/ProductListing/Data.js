import shoes from '@images/shoes.png';
import phone from '@images/phone.png';

import mvpIcon from '@icons/mostvalued.svg';
import userIcon from '@icons/activeusers.svg';

import budgetIcon from '@icons/budget.svg';
import expenseIcon from '@icons/expenses.svg';

export const Products = [
    {
        id: 3,
        CompaignName: 'Sports',
        FundraiserName: 'David',
        description: 'Innovative features',
        ObjectiveAmount: '$4500K',
        img: shoes
    },
    {
        id: 1,
        CompaignName: 'Medical',
        FundraiserName: 'Emily',
        description: 'Classy and comfortable',
        ObjectiveAmount: '$5600K',
        img: phone
    },

    {
        id: 3,
        CompaignName: 'Shelter',
        FundraiserName: 'David Pappu',
        description: 'Innovative features',
        ObjectiveAmount: '$4500K',
        img: shoes
    },
    {
        id: 2,
        CompaignName: 'Food',
        FundraiserName: 'Greg',
        description: 'Sleek and powerful',
        ObjectiveAmount: '$5000K',
        img: phone
    },
    {
        id: 5,
        CompaignName: 'Medical',
        FundraiserName: 'Emily',
        description: 'Classy and comfortable',
        ObjectiveAmount: '$5600K',
        img: phone
    },

    {
        id: 6,
        CompaignName: 'Shelter',
        FundraiserName: 'David Pappu',
        description: 'Innovative features',
        ObjectiveAmount: '$4500K',
        img: shoes
    },
    {
        id: 1,
        CompaignName: 'Medical',
        FundraiserName: 'Emily',
        description: 'Classy and comfortable',
        ObjectiveAmount: '$5600K',
        img: phone
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
