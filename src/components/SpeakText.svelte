<p class="speakText" on:click={clickSpeak} bind:this={speakTextElement}>
    <slot></slot>
</p>

<script>

    import {onMount, onDestroy} from "svelte"

    let voices = []
    let speakTextElement


    onMount(() => {
        // speak()
    })
    onDestroy(() => {
        window.speechSynthesis.cancel();
    })

    function clickSpeak() {
        window.speechSynthesis.cancel();
        speak()
    }
    function speak(text) {
        text = speakTextElement.innerText

        const voice = voices.find(voice => voice.voiceURI === 'Alex');

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
    .speakText {
        cursor: pointer;
    }
</style>
