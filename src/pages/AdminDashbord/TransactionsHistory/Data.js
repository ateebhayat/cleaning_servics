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
        BuyerName: 'Emily',
        SellerName: 'Emily John',
        Date: 'Nov 30th 2023',
        product: 'Classy and comfortable',
        ObjectiveAmount: '$5600K',
        img: phone
    },
    {
        id: 2,
        CompaignName: 'Food',
        Date: 'Nov 30th 2023',
        SellerName: 'Emily John',
        BuyerName: 'Greg',
        product: 'Sleek and powerful',
        ObjectiveAmount: '$5000K',
        img: shoes
    },
    {
        id: 3,
        CompaignName: 'Sports',
        Date: 'Nov 30th 2023',
        SellerName: 'Emily John',
        BuyerName: 'David',
        product: 'Innovative features',
        ObjectiveAmount: '$4500K',
        img: shoes
    },
    {
        id: 4,
        CompaignName: 'Shelter',
        SellerName: 'Emily John',
        Date: 'Nov 30th 2023',
        BuyerName: 'David Pappu',
        product: 'Innovative features',
        ObjectiveAmount: '$450d0K',
        img: shoes
    },
    {
        id: 5,
        CompaignName: 'Food',
        Date: 'Nov 30th 2023',
        SellerName: 'Emily John',
        BuyerName: 'Greg',
        product: 'Sleek and powerful',
        ObjectiveAmount: '$5000K',
        img: shoes
    },
    {
        id: 6,
        CompaignName: 'Sports',
        Date: 'Nov 30th 2023',
        SellerName: 'Emily John',
        BuyerName: 'David',
        product: 'Innovative features',
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
