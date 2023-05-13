<p>{contentString}</p>


<style>
</style>

<script>
    export let content = 'NO CONTENT :((('
    console.log(content)
    $: contentString = content.message.text
</script>
