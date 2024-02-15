import type { Coffee } from './Coffee'

export type Customer = {
    name : string,
    coffeePreference: Coffee,
    totalContribution: number,
}