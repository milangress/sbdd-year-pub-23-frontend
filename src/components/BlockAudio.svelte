{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<audio src="{contentURL}" controls bind:this={audioElement}>
    <a href="{contentURL}">Download audio</a>.
</audio>
<SpeakText>
    {@html content.message.text}
</SpeakText>
{/if}
<script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"
    import {onMount} from "svelte"

    export let content = 'NO CONTENT :((('
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

    let audioElement

    onMount(() => {
        console.log('play Audio: ', audioElement)
        audioElement.play()
        setTimeout(() => {
            audioElement.pause()
        }, 15000)
    })
</script>
