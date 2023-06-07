<div class="block-wrapper" style="{style}">
    <CloudGenerator seed="{seed}" />
    <div class="block-clouds"></div>
    <div class="block-wrapper-slot">
        <slot></slot>
    </div>
</div>

<script>
    import CloudGenerator from "./CloudGenerator.svelte"

    export let position = 0
    const brightness = `${Math.random() / 5 + 1}`
    const seed = Math.round(Math.random() * 100000000)

    $: updateStyle = `--rotation: ${Math.random(position) * 4 - 2}deg; --brightness: ${brightness}`
    $: cloudStyle = `--clouds: url(#clouds${seed}); --clouds-little: url(#clouds-little${seed})`
    $: style = updateStyle + '; ' + cloudStyle

</script>

<style>
    .block-wrapper {
        color: oklch(58% 0.5 255);

        display: grid;
        grid-template-columns: 1fr;
        width: fit-content;
        text-align: center;
        margin-inline: auto;
        transition: transform 0.5s ease-in-out;
        transform: rotate(var(--rotation));
        max-width: 85vw;
        contain: layout;
        margin-block: -1vw;


    }
    .block-clouds {
        box-shadow: inset 1.4em 1.4em 1.4em rgba(255, 255, 255, .5), inset -1.4em -1.4em 1.4em rgba(0, 0, 0, .2), 3px 3px 20px #ffffff;;
        background: #b2b2b2;
        border-radius: 10vw;

        /*filter: brightness(var(--brightness));*/
        filter: var(--clouds);
        grid-row: 1/2;
        grid-column: 1/2;
        width: 100%;
        z-index: -1;
    }
    .block-wrapper-slot {
        grid-row: 1/2;
        grid-column: 1/2;
        width: fit-content;
        padding: 5vw 10vw;
        text-shadow: 0 0.03em 0 rgba(255, 255, 255, .8), 0 -0.035em 0 rgba(0, 0, 0, .3);
        filter: var(--clouds-little);
        contain: paint;
    }
</style>
