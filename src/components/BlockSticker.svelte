<img src="{contentURL}" alt="{content.message.ImageAltText}">
<style>
    img {
        max-width: 50vw;
        height: auto;
    }
</style>

<script>
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
