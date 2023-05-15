<!--<h1>SBDD Websocket Client</h1>-->

{#each messages as message (message.id)}
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
{/each}

<!--{"source":"bot","pipeline":"ai","message":"Menko's shoes are wild\nNaomi's gems shine like the stars\nHotness fills the air"}-->
<hr>
{#each systemMessages as message}
    <p>{message}</p>
{/each}

<script>
    import {browser} from '$app/environment';
    import TextText from "$components/TextText.svelte"
    import BlockImg from "../components/BlockImg.svelte"
    import BlockVideo from "../components/BlockVideo.svelte"
    import BlockAudio from "../components/BlockAudio.svelte"
    import BlockText from "../components/BlockText.svelte"
    import BlockFile from "../components/BlockFile.svelte"
    import BlockSticker from "../components/BlockSticker.svelte"

    let messages = []
    let systemMessages = []

    function connectWS() {
        if (browser) {
            const socket = new WebSocket("wss://sbdd-year-pub-23.fly.dev")
            socket.addEventListener("open", () => {
                console.log("Opened")
                systemMessages = ["Connected :) waiting for next broadcast", ...messages]
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
                systemMessages = ["WebSocket error:", JSON.stringify(event), ...messages]
            });
            socket.addEventListener("close", (event) => {
                console.log("The connection has been closed successfully.");
                systemMessages = ["CLOSED", JSON.stringify(event), ...messages]

                systemMessages = ['Socket is closed. Reconnect will be attempted in 5 second.', JSON.stringify(event), ...messages]
                console.log('Socket is closed. Reconnect will be attempted in 5 second.', event.reason);
                setTimeout(function() {
                    connectWS();
                }, 5000);
            });
        }
    }
    connectWS()
</script>
