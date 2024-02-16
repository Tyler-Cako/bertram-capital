export type Drink = {
	name: string,
	value: number
}

export const drinks = {
	black: {
		name: 'Black',
		value: 3
	},
	tea: {
		name: 'Tea',
		value: 3
	},
	americano: {
		name: 'Americano',
		value: 4
	},
	flatWhite: {
		name: 'Flat White',
		value: 4
	},
	cappuccino: {
		name: 'Cappuccino',
		value: 5
	},
	latte: {
		name: 'Latte',
		value: 5
	},
	chaiTea: {
		name: 'Chai Tea Latte',
		value: 6
	},
	matcha: {
		name: 'Matcha',
		value: 6
	},
	coldBrew: {
		name: 'Cold Brew',
		value: 6
	}
};

export const drinkDropdowns = Object.values(drinks);
