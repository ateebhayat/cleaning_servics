import shoes from '@images/shoes.png';
import phone from '@images/phone.png';

import budgetIcon from '@icons/budget.svg';
import expenseIcon from '@icons/expenses.svg';

export const Products = [
    {
        id: 1,
        campaign: 'Medical',
        target: '$500K',
        donation: '$200K',
        products: '4025',
        status: 'Active',

        img: shoes
    },
    {
        id: 2,
        campaign: 'Shelter',
        target: '$1700K',
        donation: '$400K',
        products: '1544',
        status: 'Active',

        img: phone
    },
    {
        id: 3,
        campaign: 'Sports',
        target: '$450K',
        donation: '$175K',
        products: '360',
        status: 'Active',

        img: budgetIcon
    },
    {
        id: 4,
        campaign: 'Education',
        target: '$1620K',
        donation: '$400K',
        products: '1544',
        status: 'Active',

        img: shoes
    },
    {
        id: 5,
        campaign: 'Food',
        target: '$8850K',
        donation: '$175K',
        products: '360',
        status: 'Active',
        img: expenseIcon
    },
    {
        id: 6,
        campaign: 'Medical',
        target: '$1700K',
        donation: '$200K',
        products: '4025',
        status: 'Pending',
        img: shoes
    },
    {
        id: 7,
        campaign: 'Shelter',
        target: '$1700K',
        donation: '$400K',
        products: '1544',
        status: 'Pending',
        img: shoes
    },
    {
        id: 8,
        campaign: 'Sports',
        target: '$450K',
        donation: '$175K',
        products: '360',
        status: 'Pending',
        img: expenseIcon
    }
];
