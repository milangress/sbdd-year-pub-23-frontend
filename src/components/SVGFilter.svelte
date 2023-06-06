<svg class="fixed inset-0 transform -translate-x-full">
    <defs>
        <filter id="n0">
            <feTurbulence type="turbulence" baseFrequency="0.001 0.1" numOctaves="5" result="NOISE"></feTurbulence>
            <feGaussianBlur in="SourceGraphic" result="BLURRED" stdDeviation="4.5"></feGaussianBlur>
            <feDisplacementMap in2="NOISE" in="BLURRED" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
        <filter id="n1">
            <feTurbulence type="fractalNoise" baseFrequency="0.001 0.001" numOctaves="5" result="NOISE" seed="102032"></feTurbulence>
            <feGaussianBlur in="SourceGraphic" result="BLURRED" stdDeviation="0"></feGaussianBlur>
            <feDisplacementMap id="displacer" in2="NOISE" in="BLURRED" scale="28" xChannelSelector="R" yChannelSelector="R" result="DISPLACED"></feDisplacementMap>
        </filter>
        <filter id="n2" color-interpolation-filters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.001 0.001" numOctaves="5" result="NOISE" seed="102032"></feTurbulence>
            <feGaussianBlur in="SourceGraphic" result="BLURRED" stdDeviation="0"></feGaussianBlur>
            <feDisplacementMap id="displacer" in2="NOISE" in="BLURRED" scale="15" xChannelSelector="R" yChannelSelector="R" result="DISPLACED"></feDisplacementMap>

            <feColorMatrix in="DISPLACED" result="RED" type="matrix" values="0 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 1 0"></feColorMatrix>

            <feColorMatrix in="DISPLACED" result="GREEN" type="matrix" values="1 0 0 0 0
                            0 0 0 0 0
                            0 0 1 0 0
                            0 0 0 1 0"></feColorMatrix>

            <feColorMatrix in="DISPLACED" result="BLUE" type="matrix" values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 0 0 0
                            0 0 0 1 0"></feColorMatrix>

            <feOffset in="RED" dx="-3" dy="0" result="D_RED"></feOffset>
            <feOffset in="GREEN" dx="0" dy="0" result="D_GREEN"></feOffset>
            <feOffset in="BLUE" dx="3" dy="0" result="D_BLUE"></feOffset>

            <feBlend in="D_RED" in2="D_BLUE" out="RB" mode="multiply"></feBlend>

            <feBlend in="D_GREEN" in2="RB" out="RGB" mode="multiply"></feBlend>


        </filter>
        <filter id="clouds">
            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="180" seed="{seed}" />
            <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
        <filter id="clouds-little">
            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="180" seed="{seed}"/>
            <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
    </defs>
</svg>

<script>
    let seed = Math.random() * 1000000;
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
