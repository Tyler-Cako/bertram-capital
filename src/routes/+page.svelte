<script lang="ts">
    /*
        Bob, Jeremy, and the other 5 coworkers in the Bertram Labs office love coffee. In fact, everyday,
        right after lunch, they walk down the street to their favorite coffee shop to grab a cup to go. Bob
        always gets a cappuccino, Jeremy likes his coffee black, and the others have their favorite
        coffee beverage too. To ease the checkout process, only one coworker pays for all the coffees
        each day. As you can imagine, they have a problem everyday: who's turn is it to pay for coffee?
    */
    import { Button } from 'flowbite-svelte';
    import { type Customer, exampleCustomers, customer } from '$lib/types/Customer'
    import CustomerTable from '$lib/components/CustomerTable.svelte'
    import CustomerForm  from '$lib/components/CustomerForm.svelte'
    import { onMount } from 'svelte'

    // Init State

    let customers : Customer[] = exampleCustomers
    let newCustomer: Customer = customer;


    // Event functions
    const generateExample = () => {
        customers = exampleCustomers
    }

    const addNewCustomer = () => {
        customers.push(newCustomer)
        newCustomer = customer;
        customers = customers;
    }

    const clearCustomers = () => {
        customers = []
    }

    // Reactive code
    const findNextBuyer = () => {
        let tempBuyer = customers[0] ?? {}
        let tempCost = tempBuyer.totalContribution + customer.coffeePreference.value;
        let currentCost = 0;
        customers.find(customer => {
            currentCost = customer.totalContribution + customer.coffeePreference.value;
            if (currentCost < tempCost) {
                tempBuyer = customer
                tempCost = tempBuyer.totalContribution + customer.coffeePreference.value;
            }
        })

        return tempBuyer
    }

    $: nextBuyer = customers && findNextBuyer();

  </script>

<div class="w-screen flex flex-col justify-center content-center bg-gray-200">

    <div>
        <Button on:click={generateExample}>Load Example</Button>
        <Button on:click={clearCustomers}>Clear Customers</Button>
    </div>

    <div class="w-5/6">
        <!-- Create new customers with this form -->
        <CustomerForm bind:newCustomer = {newCustomer} on:submit={addNewCustomer}/>
    </div>

    <!-- If customers exist, display table, and the person who should buy next-->
    {#if customers.length > 0}
        <CustomerTable bind:customers={customers}/>
        <p>Next Buyer: {nextBuyer.name}</p>
    {:else}
        <p>Please add a customer</p>
    {/if}

    
</div>

