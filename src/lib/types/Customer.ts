import { type Drink, drinks } from './Drink';
import { randomProperty } from '$lib/helpers/helpers'

export type Customer = {
	name: string;
	coffeePreference: Drink;
	totalContribution: number;
};

export const exampleCustomers : Customer[] = [
	{
		name: 'Bob',
        coffeePreference: drinks.cappuccino,
        totalContribution : 50
	},
    {
        name: 'Jeremy',
        coffeePreference: drinks.black,
        totalContribution: 45
    },
    {
        name: 'Ashly',
        coffeePreference: drinks.latte,
        totalContribution: 30
    },
    {
        name: 'Mark',
        coffeePreference: drinks.cappuccino,
        totalContribution: 60
    },
    {
        name: 'Bill',
        coffeePreference: drinks.matcha,
        totalContribution: 20
    },
    {
        name: 'Lauryn',
        coffeePreference: drinks.tea,
        totalContribution: 60
    },
    {
        name: 'Abby',
        coffeePreference: drinks.americano,
        totalContribution: 55
    },
];

export const customer = {
    name: '',
    coffeePreference: { name: '', value: 0},
    totalContribution: 0
}