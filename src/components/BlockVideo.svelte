{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<video controls width="500px" bind:this={videoElement}>
    <source src="{contentURL}">
</video>
    <SpeakText>
        {content.message.text}
    </SpeakText>
{/if}

    <script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"
    import {onMount} from "svelte"

    export let content = 'NO CONTENT :((('
    console.log('debugIframe', content)
    $: contentURL = content.message['file id']

    let videoElement

    onMount(() => {
        console.log('play Video: ', videoElement)
        videoElement.play()
        setTimeout(() => {
            videoElement.pause()
        }, 15000)
    })
</script>
