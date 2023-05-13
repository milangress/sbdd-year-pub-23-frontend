<p style="color: rebeccapurple" class="{classType}">{contentString}</p>

<script>
    export let content = 'NO CONTENT :((('
    //console.log(content)
    $: contentString = content.message
    $: classType = getClassType(contentString)
    function getClassType(contentString) {
        // console.log('contentString', contentString)
        if (contentString.startsWith("/")) {
            return 'command'
        } else if (contentString.includes('?') && content.source === 'user') {
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
        white-space: pre;
    }
    .command {
        font-family: "Apple Chancery",serif;
        font-size: 1em;
        transform: scale(1.5);
        transform-origin: center left;
        opacity: 0.5;
    }
    .userQuestion {
        font-family: "Apple Chancery",serif;
        font-size: 1.5em;
        color: #fff;
        text-shadow: 3px 3px 20px #ff99cc,
        -2px 1px 30px #ff99cc;
    }
    .botResponse {
        font-size: 3em;
        line-height: 1.1;
        margin-block: 0.2rem;
    }
</style>
