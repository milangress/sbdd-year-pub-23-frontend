{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<video controls width="500px">
    <source src="{contentURL}">
</video>
    <p>
        {content.message.text}
    </p>
{/if}

    <script>
    import BlockImg from "./BlockImg.svelte"

    export let content = 'NO CONTENT :((('
    console.log('debugIframe', content)
    $: contentURL = content.message['file id']
</script>
