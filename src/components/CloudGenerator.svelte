<svg class="fixed inset-0 transform -translate-x-full">
    <defs>
        {#if !isSafariAgent}
        <filter id="{cloudID}">
            <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".01"
                    numOctaves="180"
                    result="turbulence"
                    seed="{seed}" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="{scale}" />
        </filter>
        <filter id="{cloudLittleID}">
            <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".01"
                    numOctaves="180"
                    result="turbulence"
                    seed="{seed}"/>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" />
        </filter>
        {/if}
    </defs>
</svg>

<script>
    import {browser} from "$app/environment"

    export let seed = Math.round(Math.random() * 1000000);
    let scale = Math.random() * 160 + 20;
    $: cloudID = 'clouds' + seed
    $: cloudLittleID = 'clouds-little' + seed
    let isSafariAgent = false;
    if (browser) {
        const userAgentString = navigator.userAgent;
        const isChromeAgent = userAgentString.indexOf("Chrome") > -1;
        isSafariAgent = userAgentString.indexOf("Safari") > -1;
        if ((isChromeAgent) && (isSafariAgent)) isSafariAgent = false;
        console.log(userAgentString)
    }

</script>

<style>
    svg {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
    }
</style>
