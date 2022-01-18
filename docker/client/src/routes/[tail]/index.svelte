<script lang="ts">
    import { onMount } from 'svelte';
    import {page} from "$app/stores";
    const { tail } = $page.params
    export let title = ''
    export let description = ''
    onMount(async () => {
        const res = await fetch(`http://localhost:8080/api/rest/long-tail-by-tail-cus/${tail}`);
        if (res.ok) {
            const content = await res.json()
            const longTail = content.getLongTailByTailCus
            if (longTail) {
                title = longTail.title
                description = longTail.description
            } else {
                title = 'Not Found'
            }
        }
    })
</script>


<svelte:head>
    <title>{$page.params.tail}</title>
</svelte:head>

<section>
    <h1>{title}</h1>
    <span>{description}</span>

</section>
