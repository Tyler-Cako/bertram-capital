<script lang="ts">
    import {Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, Button} from 'flowbite-svelte'
    import { customer, type Customer } from '$lib/types/Customer'

    export let customers : Customer[] = [];

    const findNextContribution = () => {
        let totalPrice = 0;
        
        customers.forEach(cust => {
            totalPrice += cust.coffeePreference.value
        })

        return totalPrice
    }

    const customerBought = (customer: Customer) => {
        customer.totalContribution += nextContributionPrice;
        customers = customers;
    }

    $: nextContributionPrice = customers && findNextContribution();
</script>

<Table>
    <TableHead>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Coffee Preference</TableHeadCell>
      <TableHeadCell>Total Contribution</TableHeadCell>
      <TableHeadCell>Bought</TableHeadCell>
    </TableHead>

    <TableBody>
        {#each customers as customer}
            <TableBodyRow>
                <TableBodyCell>{customer.name}</TableBodyCell>
                <TableBodyCell>{customer.coffeePreference.name}</TableBodyCell>
                <TableBodyCell>${customer.totalContribution}</TableBodyCell>
                <Button on:click={() => customerBought(customer)}>Bought</Button>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>

<p>Next contribution price: {nextContributionPrice} </p>