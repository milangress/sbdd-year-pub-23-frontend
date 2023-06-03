<script>
    import SVGFilter from "../components/SVGFilter.svelte"
</script>

<SVGFilter></SVGFilter>

<div class="home">
    <a href="https://t.me/YearPubBot" >Open Chat</a>
    <a href="/broadcast">Watch Broadcast</a>

    <img src="2023-06-01 12.12.38.png" alt="sticker">
</div>

<style>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        filter: url(#n1);
    }
    img {
        max-height: 100vh;
        width: auto;
    }
</style>
