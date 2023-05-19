{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<object data="{contentURL}" width="800px" height="500" title="test">
</object>
    <SpeakText>
        {content.message.text}
    </SpeakText>
{/if}

<script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"

    export let content = 'NO CONTENT :((('
    console.log('debugIframe', content)
    // $: contentURL = content.message.oldDriveId
    $: contentURL = resolveURL(content)
    function resolveURL(content) {
        if (content.message['file id'] && content.message['file id'].match('drive.google.com')) {
            return content.message['file id']
        } else if (content.message['file id']) {
            return `https://yearpub.milan.place/api/img?telegram_id=${content.message['file id']}`
        } else {
            return content.message['file id']
        }
    }
</script>
