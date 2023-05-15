<p>
    <!--eslint-disable-next-line svelte/no-at-html-tags-->
    {@html contentString}
</p>


<script>
    import snarkdown from "snarkdown"
    export let content = 'NO CONTENT :((('
    console.log(content)
    $: contentString = content.message.text ? snarkdown(content.message.text.replaceAll('~', '~~')).replaceAll('||', '') : ''
</script>

<style>
    p {
        white-space: pre-wrap;
    }
</style>
