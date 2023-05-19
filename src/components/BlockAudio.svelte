{#if content.message.webPreviewUrl}
    <BlockImg content="{content}"/>
{:else}
<audio src="{contentURL}" controls bind:this={audioElement}>
    <a href="{contentURL}">Download audio</a>.
</audio>
<SpeakText>
    {content.message.text}
</SpeakText>
{/if}
<script>
    import BlockImg from "./BlockImg.svelte"
    import SpeakText from "./SpeakText.svelte"
    import {onMount} from "svelte"

    export let content = 'NO CONTENT :((('
    $: contentURL = content.message['file id']

    let audioElement

    onMount(() => {
        console.log('play Audio: ', audioElement)
        audioElement.play()
        setTimeout(() => {
            audioElement.pause()
        }, 15000)
    })
</script>
