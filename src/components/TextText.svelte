<p class="{classType}">
   <SpeakText>{@html contentString}</SpeakText>
</p>

<script>
    import SpeakText from "./SpeakText.svelte"

    export let content = 'NO CONTENT :((('
    //console.log(content)
    $: contentString = content.message
    $: classType = getClassType(content)
    function getClassType(content) {
        // console.log('contentString', contentString)
        if (content.message.startsWith("/") && content.source === 'user') {
            return 'command'
        } else if (content.message.includes('?') && content.source === 'user') {
            return 'userQuestion'
        } else if (content.source === 'bot' && content.pipeline === 'ai') {
            return 'botResponse'
        } else {
            return 'generic'
        }
    }
</script>


<style>
    p {
        white-space: pre-wrap;
    }
    .command {
        font-family: "sporting-grotesque",serif;
        font-size: 1em;
        transform: scale(1);
        transform-origin: center left;
        color: #00ff00
    }
    .userQuestion, .generic {
        font-family: "sporting-grotesque",serif;
        font-size: 2em;
        color: #ff99cc;
        /*text-shadow: 3px 3px 20px #ff99cc,*/
        /*-2px 1px 30px #ff99cc;*/
    }
    .botResponse {
        font-size: 2em;
        line-height: 1.1;
        margin-block: 0.2rem;
        /*text-shadow: 3px 3px 20px #ffffff;*/
        font-family: 'romantics',serif;
        letter-spacing: 0.15em;
       /*filter: url(#n1);*/
       /*transform: scaleY(1.5);*/
       /*padding-block: 1em;*/
    }
</style>
