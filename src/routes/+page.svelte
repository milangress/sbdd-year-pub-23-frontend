<h1>WS Client</h1>

{#each messages as message}
    <p>{message}</p>
{/each}

<script>
    import {browser} from '$app/environment';

    let messages = []


    if (browser) {
        const socket = new WebSocket("wss://sbdd-year-pub-23.fly.dev")
        socket.addEventListener("open", () => {
            console.log("Opened")
        })
        socket.addEventListener("message", (event) => {
            console.log("Message", event.data)
            messages = [...messages, event.data]
        })
    }
</script>
