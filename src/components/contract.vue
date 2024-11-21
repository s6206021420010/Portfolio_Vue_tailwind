<template>
  <div class="flex gap-2">
    <button class="button" @click="GithubOutlined()">
        <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text ">
                <div class="d-flex justify-content-center align-items-center">
                    <GithubOutlined class="fs-1 me-2" />
                    <span>Git hub</span>
                </div>
            </span>
        </span>
    </button>
    <button class="button ms-2" @click="LinkedinOutlined()">
        <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text ">
                <div class="d-flex justify-content-center align-items-center">
                    <LinkedinOutlined class="fs-1 me-2" />
                    <span>Linkin</span>
                </div>
            </span>
        </span>
    </button>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
      GithubOutlined(){
        location.href = "https://github.com/s6206021420010"
      },
      LinkedinOutlined(){
        location.href = "https://www.linkedin.com/in/taratep-kerdboon-a0b46826b/"
      }
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
    width: 50%;
}

.button::before,
.button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
}

.button::before {
    top: 0;
    border-bottom-width: 0;
}

.button::after {
    bottom: 0;
    border-top-width: 0;
}

.button:active,
.button:focus {
    outline: none;
}

.button:active::before,
.button:active::after {
    right: 3px;
    left: 3px;
}

.button:active::before {
    top: 3px;
}

.button:active::after {
    bottom: 3px;
}

.button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
}

.button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
}

.button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #ff4655;
    transform: skew(-15deg);
    transition: all .2s ease;
}

.button_text {
    position: relative;
}

.button:hover {
    color: #0f1923;
}

.button:hover .button_sl {
    width: calc(100% + 15px);
}

.button:hover .button_lg::after {
    background-color: #fff;
}

.nm_text {
    color: #a5dbff !important;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Figtree", sans-serif;
}

body {
    display: grid;
    place-content: center;
    min-height: 100vh;
    background: #000 !important;
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
    width: 800px;
    height: 500px;
    transition: all 400ms;
}

.container:hover .box {
    filter: grayscale(100%) opacity(24%);
}

.box {
    position: relative;
    background: var(--img) center center;
    background-size: cover;
    transition: all 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .box:hover {
    filter: grayscale(0%) opacity(100%);
}

.container:has(.box-1:hover) {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-2:hover) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
}

.container:has(.box-3:hover) {
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
}

.container:has(.box-4:hover) {
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
}

.container:has(.box-5:hover) {
    grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
}

.box:nth-child(odd) {
    transform: translateY(-16px);
}

.box:nth-child(even) {
    transform: translateY(16px);
}

.box::after {
    content: attr(data-text);
    position: absolute;
    bottom: 20px;
    background: #000;
    color: #fff;
    padding: 10px 10px 10px 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    transform: translateY(60px);
    opacity: 0;
    transition: all 400ms;
}

.box:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
}
</style>