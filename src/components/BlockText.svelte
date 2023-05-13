<p>
    <!--eslint-disable-next-line svelte/no-at-html-tags-->
    {@html contentString}
</p>


<script>
    import snarkdown from "snarkdown"
    export let content = 'NO CONTENT :((('
    console.log(content)
    $: contentString = snarkdown(content.message.text.replaceAll('~', '~~')).replaceAll('||', '')
    console.log('snarkdown', snarkdown(content.message.text), content.message.text.replaceAll('~', '~~'))
</script>

<style>
    p {
        white-space: pre-wrap;
    }
</style>
