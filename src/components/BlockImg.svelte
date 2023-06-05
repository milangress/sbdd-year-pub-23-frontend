<div class="imgWrapper">
    <div class="imgElm">
        <img src="{contentURL}" alt="{content.message.ImageAltText}">
    </div>
    <div class="txtElm">
    {#if content.message.text}
        <SpeakText>
            {@html content.message.text}
        </SpeakText>
    {/if}
    </div>
</div>

<script>
    import SpeakText from "./SpeakText.svelte"

    export let content = 'NO CONTENT :((('
    console.log(content)
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

<style>
    img {
        width: 100%;
        max-height: 100%;
        display: block;
    }
    .imgWrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        gap: 1rem;
    }
    .imgElm {
        flex-grow: 2;
        /*max-height: 80vh;*/
    }
    .txtElm {
        flex-grow: 1;
        max-width: 45%;
    }
    @media only screen and (max-width: 800px) {
        .imgWrapper {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .txtElm {
            max-width: 100%;
        }
    }
</style>
