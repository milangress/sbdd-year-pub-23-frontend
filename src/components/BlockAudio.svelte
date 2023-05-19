{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<audio src="{contentURL}" controls>
    <a href="{contentURL}">Download audio</a>.
</audio>
<SpeakText>
    {content.message.text}
</SpeakText>
{/if}
<script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"

    export let content = 'NO CONTENT :((('
    $: contentURL = content.message['file id']
</script>
