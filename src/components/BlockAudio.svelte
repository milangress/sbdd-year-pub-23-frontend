{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<audio src="{contentURL}" controls>
    <a href="{contentURL}">Download audio</a>.
</audio>
<p>
    {content.message.text}
</p>
{/if}
<script>
    import BlockImg from "./BlockImg.svelte"

    export let content = 'NO CONTENT :((('
    $: contentURL = content.message['file id']
</script>
