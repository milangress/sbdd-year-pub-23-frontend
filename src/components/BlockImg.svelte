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
    $: contentURL = content.message['file id']
</script>
