<h1>WS Client</h1>

{#each messages as message}
    <p>{message}</p>
{/each}

<script>
    import {browser} from '$app/environment';

    let messages = []

    function connectWS() {
        if (browser) {
            const socket = new WebSocket("wss://sbdd-year-pub-23.fly.dev")
            socket.addEventListener("open", () => {
                console.log("Opened")
                messages = ["WS Opened", ...messages]
            })
            socket.addEventListener("message", (event) => {
                console.log("Message", event.data)
                messages = [event.data, ...messages]
            })
            socket.addEventListener("error", (event) => {
                console.log("WebSocket error: ", event);
                messages = ["WebSocket error:", JSON.stringify(event), ...messages]
            });
            socket.addEventListener("close", (event) => {
                console.log("The connection has been closed successfully.");
                messages = ["CLOSED", JSON.stringify(event), ...messages]

                messages = ['Socket is closed. Reconnect will be attempted in 5 second.', JSON.stringify(event), ...messages]
                console.log('Socket is closed. Reconnect will be attempted in 5 second.', event.reason);
                setTimeout(function() {
                    connectWS();
                }, 5000);
            });
        }
    }
    connectWS()
</script>
