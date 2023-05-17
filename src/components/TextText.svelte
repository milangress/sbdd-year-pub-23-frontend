<p class="{classType}"
   on:click={speak}
>{contentString}</p>

<script>
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

    let voices = []

    function speak(text) {
        window.speechSynthesis.cancel();

        text = contentString

        const voice = voices.find(voice => voice.voiceURI === 'Alex');
        console.log('voice', voice)

        console.log('speak', text)
        let utter = new SpeechSynthesisUtterance(text); // To Make The Utterance
        utter.voice = voice;
        utter.pitch = 0.9;
        utter.rate = 0.7;
        utter.volume = 1;
        window.speechSynthesis.speak(utter);
    }
    function updateVoices() {
        // add an option for each available voice that isn't already added
        window.speechSynthesis.getVoices().forEach(voice => {
            const isAlreadyAdded = [...voices].some(option => option.voiceURI === voice.voiceURI);
            if (!isAlreadyAdded) {
                voices = [...voices, voice];
            }
        });
    }
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
</script>


<style>
    p {
        white-space: pre-wrap;
        cursor: pointer;
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
