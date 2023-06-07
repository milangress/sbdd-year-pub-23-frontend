{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<video controls width="500px" bind:this={videoElement}>
    <source src="{contentURL}">
</video>
    <SpeakText>
        {@html content.message.text}
    </SpeakText>
{/if}

    <script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"
    import {onMount} from "svelte"

    export let content = 'NO CONTENT :((('
    console.log('debugIframe', content)

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

    let videoElement

    onMount(() => {
        console.log('play Video: ', videoElement)
        videoElement.play()
        setTimeout(() => {
            videoElement.pause()
        }, 15000)
    })
</script>
