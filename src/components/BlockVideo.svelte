{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<video controls width="500px">
    <source src="{contentURL}">
</video>
    <SpeakText>
        {content.message.text}
    </SpeakText>
{/if}

    <script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"

    export let content = 'NO CONTENT :((('
    console.log('debugIframe', content)
    $: contentURL = content.message['file id']
</script>
