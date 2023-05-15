<p class="{classType}">{contentString}</p>

<script>
    export let content = 'NO CONTENT :((('
    //console.log(content)
    $: contentString = content.message
    $: classType = getClassType(content)
    function getClassType(content) {
        // console.log('contentString', contentString)
        if (content.message.startsWith("/")) {
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
        font-family: "Apple Chancery",serif;
        font-size: 1em;
        transform: scale(1);
        transform-origin: center left;
        color: #00ff00
    }
    .userQuestion {
        font-family: "Apple Chancery",serif;
        font-size: 2em;
        color: #ff99cc;
        text-shadow: 3px 3px 20px #ff99cc,
        -2px 1px 30px #ff99cc;
    }
    .botResponse {
        font-size: 3em;
        line-height: 1.1;
        margin-block: 0.2rem;
        text-shadow: 3px 3px 20px #ffffff
    }
</style>
