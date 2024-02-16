<script lang="ts">
    import {Label, Input, Select, Button} from 'flowbite-svelte'
    import { createEventDispatcher } from 'svelte';
    import { type Drink, drinkDropdowns, drinks } from '$lib/types/Drink'
    import { type Customer, customer } from '$lib/types/Customer'

    export let newCustomer : Customer;
    
    const dispatch = createEventDispatcher();

    function submit() {
        dispatch('submit');
    }
</script>
        <form class="flex" on:submit={submit}>
            <Label>
                Name
                <Input bind:value={newCustomer.name}/>
            </Label>
            <Label>
                Coffee Choice
                <Select items={drinkDropdowns} value={drinkDropdowns}/>
            </Label>
        <Button type="submit">New Customer</Button>
    </form>