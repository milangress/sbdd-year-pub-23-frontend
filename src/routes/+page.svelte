<script>
    import SVGFilter from "../components/SVGFilter.svelte"
    import WrapperBlock from "../components/WrapperBlock.svelte"
</script>

<SVGFilter></SVGFilter>

<div class="home">
    <a href="https://t.me/YearPubBot" >
        <WrapperBlock>
        Open Chat <br> (in telegram)
        </WrapperBlock>
    </a>
    <a href="/broadcast">
    <WrapperBlock>
    Watch live broadcast
    </WrapperBlock>
    </a>

    <img src="2023-06-01 12.12.38.png" alt="sticker">
</div>

<style>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 5vh;
    }
    img {
        max-height: 100vh;
        max-width: 80vw;
        width: auto;
    }
    a {
        transition: all 0.2s ease-in-out;
        font-size: 3em;
        text-decoration: none;
    }
    a:hover {
        transform: scale(1.1);
    }
</style>
