<div class="imgWrapper">
<img src="{contentURL}" alt="{content.message.ImageAltText}">
<SpeakText>
    {content.message.text}
</SpeakText>
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
        max-height: 50vh;
        width: auto;
    }
    .imgWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: left;
    }
</style>
