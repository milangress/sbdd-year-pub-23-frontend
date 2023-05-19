<SpeakText>
    <!--eslint-disable-next-line svelte/no-at-html-tags-->
    {@html contentString}
</SpeakText>


<script>
    // import snarkdown from "snarkdown"
    import SpeakText from "./SpeakText.svelte"

    export let content = 'NO CONTENT :((('
    console.log(content)
    // $: contentString = content.message.text ? snarkdown(content.message.text.replaceAll('~', '~~')).replaceAll('||', '') : ''
    $: contentString = content.message.text
</script>

<style>
    p {
        white-space: pre-wrap;
    }
</style>
