<div class="block-wrapper" style="{newStyle}">
    <slot></slot>
</div>

<script>
    export let position = 0
    const brightness = `${Math.random() / 5 + 1}`
    $: myPosition = position - 1

    $: blockStyle = `transform: scaleY(${1 / myPosition}); margin-top: ${-(1 / myPosition) * 100}%`
    $: newStyle = `--rotation: ${Math.random(position) * 2 - 1}deg; --brightness: ${brightness}`
    console.log(blockStyle)

</script>

<style>
    .block-wrapper {
        box-shadow: inset 0.4em 0.4em 0.4em rgba(255, 255, 255, .3), inset -0.4em -0.4em 0.4em rgba(0, 0, 0, .2), 3px 3px 20px #ffffff;;
        text-shadow: 0 0.03em 0 rgba(255, 255, 255, .8), 0 -0.035em 0 rgba(0, 0, 0, .3);
        background: #9e9eb0;
        color: oklch(58% 0.5 255);
        text-align: center;
        width: fit-content;
        border-radius: 10vw;
        padding: 5vw 10vw;
        margin-block: -1vw;
        margin-inline: auto;
        transition: transform 0.5s ease-in-out;
        transform: rotate(var(--rotation));
        filter: brightness(var(--brightness));
    }
</style>
