{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<iframe src="{contentURL}" width="800px" height="500" title="test">
</iframe>
    <p>
        {content.message.text}
    </p>
{/if}

<script>
    import BlockImg from "./BlockImg.svelte"

    export let content = 'NO CONTENT :((('
    console.log('debugIframe', content)
    $: contentURL = content.message.oldDriveId
</script>
