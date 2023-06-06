<!--<h1>SBDD Websocket Client</h1>-->

<SVGFilter></SVGFilter>

<div class="broadcast">
{#each messages as message, index (message.id)}
    <div animate:flip in:fade>
    <WrapperBlock position="{index}">

    {#if message.contentType === 'text'}
        <TextText content={message} />
    {:else if message.message.type === 'fileImage'}
        <BlockImg content={message} />
    {:else if message.message.type === 'fileVideo' || message.message.type === 'fileVideoRound' }
        <BlockVideo content={message} />
    {:else if message.message.type === 'fileAudio'}
        <BlockAudio content={message} />
    {:else if message.message.type === 'text'}
        <BlockText content={message} />
    {:else if message.message.type === 'fileFile'}
        <BlockFile content={message} />
    {:else if message.message.type === 'fileSticker'}
        <BlockSticker content={message} />

    {:else}
        <p>Unhandled JSON: {JSON.stringify(message.message)}</p>
    {/if}

    </WrapperBlock>
    </div>
{/each}

<!--{"source":"bot","pipeline":"ai","message":"Menko's shoes are wild\nNaomi's gems shine like the stars\nHotness fills the air"}-->
<!--<hr>-->
{#each systemMessages as message}
    <WrapperBlock>{message}</WrapperBlock>
{/each}

</div>

<script>
    import {browser} from '$app/environment';
    import TextText from "$components/TextText.svelte"
    import BlockImg from "$components/BlockImg.svelte"
    import BlockVideo from "$components/BlockVideo.svelte"
    import BlockAudio from "$components/BlockAudio.svelte"
    import BlockText from "$components/BlockText.svelte"
    import BlockFile from "$components/BlockFile.svelte"
    import BlockSticker from "$components/BlockSticker.svelte"
    // import SpeakText from "$components/SpeakText.svelte"
    import SVGFilter from "../../../components/SVGFilter.svelte"
    import WrapperBlock from "../../../components/WrapperBlock.svelte"
    import { fade, fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let messages = []
    // eslint-disable-next-line no-unused-vars
    let systemMessages = []

    function connectWS() {
        if (browser) {
            const socket = new WebSocket("wss://sbdd-year-pub-23.fly.dev")
            socket.addEventListener("open", () => {
                console.log("Opened")
                systemMessages = ["Connected :) waiting for next broadcast", ...systemMessages]
                // const messageObj = {
                //     contentType: 'text',
                //     message: 'Connected :)'
                // }
                // messages = [messageObj, ...messages]
            })
            socket.addEventListener("message", (event) => {
                console.log("Message", event.data)
                let data = JSON.parse(String(event.data))
                if (data.pipeline === 'ai' || (data.source === 'user' && data.pipeline === 'cmd'))
                    data.contentType = 'text'
                else
                    data.contentType = 'object'

                if (data?.message?.oldDriveId) data.message.oldDriveId = data.message.oldDriveId.replace(/(file\/d\/.*\/).*/, '$1preview')

                data.id = Date.now() + Math.random()

                messages = [data, ...messages]
            })
            socket.addEventListener("error", (event) => {
                console.log("WebSocket error: ", event);
                systemMessages = ["WebSocket error:", JSON.stringify(event), ...systemMessages]
            });
            socket.addEventListener("close", (event) => {
                console.log("The connection has been closed successfully.");
                systemMessages = ["CLOSED", JSON.stringify(event), ...systemMessages]

                systemMessages = ['Socket is closed. Reconnect will be attempted in 5 second.', JSON.stringify(event), ...systemMessages]
                console.log('Socket is closed. Reconnect will be attempted in 5 second.', event.reason);
                setTimeout(function() {
                    connectWS();
                }, 5000);
            });
        }
    }
    connectWS()

    if (browser) {
        document.addEventListener(
            "keydown",
            (e) => {
                if (e.key === "f") {
                    toggleFullScreen();
                }
            },
            false
        );
    }
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
</script>

<style>
    .broadcast {
        /*filter: url(#n1);*/
        padding-top: 5vh;
        width: 100%;
    }
</style>
