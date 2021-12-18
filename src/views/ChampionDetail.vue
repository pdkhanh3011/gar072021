<template>
    <div>
        <div v-if="data" class="container-big-wallpaper" :style="bigImg">
            <div class="center">
                <div class="nav">
                    <ul>
                        <li>
                            <a href="">Trang chủ</a>
                            <i class="fas fa-chevron-right"></i>
                        </li>
                        <li>
                            <a href="">Giới thiệu</a>
                            <i class="fas fa-chevron-right"></i>
                        </li>
                        <li>
                            <router-link to="/champion">Tướng</router-link>
                            <i class="fas fa-chevron-right"></i>
                        </li>
                        <li>
                            <a href="">Aatrox</a>
                        </li>
                    </ul>
                </div>
                <div class="small-wallpaper">
                    <div class="small-img" :style="smallImg"></div>
                    <div class="info">
                        <svg
                            viewBox="0 0 1080 286"
                            class="svgContentBorder"
                            data-v-45896a2b=""
                        >
                            <polygon
                                points="910,0 910,1 1079,1 1079,285 1,285 1,1 170,1 170,0 0,0 0,286 1080,286 1080,0"
                                data-v-45896a2b=""
                            ></polygon>
                        </svg>
                        <div class="info-name">
                            <p class="fake-name">
                                {{ data.title }}
                            </p>
                            <p class="true-name">
                                {{ data.name }}
                            </p>
                        </div>
                        <div class="info-content">
                            <div class="info-content-tag">
                                <svg viewBox="0 0 100 100" data-v-45896a2b="">
                                    <!---->
                                    <path
                                        d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z"
                                    ></path>
                                    <path
                                        d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z"
                                    ></path>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </svg>
                                <p class="position-tag">VAI TRÒ</p>
                                <p class="position">{{ data.tags[0] }}</p>
                            </div>
                            <div class="info-content-dificult">
                                <span class="dificult-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <p class="dificult-tag">Độ khó</p>
                                <p class="dificult">Dễ / Trung Bình / Khó</p>
                            </div>
                            <div class="info-content-lore">
                                <p>
                                    {{ data.lore }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="interrupt-symbol">
            <div class="straightLine"></div>
            <div class="square square1"></div>
            <div class="square square2"></div>
        </div>
        <div v-if="data" class="skills-section-container">
            <svg data-v-45896a2b="" viewBox="0 0 100 100">
                <!---->
                <path
                    d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z"
                ></path>
                <path
                    d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z"
                ></path>
                <!---->
                <!---->
                <!---->
                <!---->
            </svg>
            <div class="skills-section">
                <div class="skills-section-info">
                    <p>Giới Thiệu Kỹ Năng</p>
                    <div class="skill-items">
                        <div
                            class="skill-item active"
                            @click="setActive('passive', 'P', $event)"
                        >
                            <div class="img-box">
                                <svg data-v-45896a2b="" viewBox="0 0 71 71">
                                    <path
                                        data-v-45896a2b=""
                                        d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                                    ></path>
                                </svg>
                                <img :src="passiveImg" alt="" />
                            </div>
                            <span class="point">
                                <div class="point-line"></div>
                                <div class="point-innerpoint"></div>
                            </span>
                        </div>
                        <div
                            class="skill-item"
                            @click="setActive(0, 'Q', $event)"
                        >
                            <div class="img-box">
                                <svg data-v-45896a2b="" viewBox="0 0 71 71">
                                    <path
                                        data-v-45896a2b=""
                                        d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                                    ></path>
                                </svg>
                                <img :src="skillQ" alt="" />
                            </div>
                            <span class="point">
                                <div class="point-line"></div>
                                <div class="point-innerpoint"></div>
                            </span>
                        </div>
                        <div
                            class="skill-item"
                            @click="setActive(1, 'W', $event)"
                        >
                            <div class="img-box">
                                <svg data-v-45896a2b="" viewBox="0 0 71 71">
                                    <path
                                        data-v-45896a2b=""
                                        d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                                    ></path>
                                </svg>
                                <img :src="skillW" alt="" />
                            </div>
                            <span class="point">
                                <div class="point-line"></div>
                                <div class="point-innerpoint"></div>
                            </span>
                        </div>
                        <div
                            class="skill-item"
                            @click="setActive(2, 'E', $event)"
                        >
                            <div class="img-box">
                                <svg data-v-45896a2b="" viewBox="0 0 71 71">
                                    <path
                                        data-v-45896a2b=""
                                        d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                                    ></path>
                                </svg>
                                <img :src="skillE" alt="" />
                            </div>
                            <span class="point">
                                <div class="point-line"></div>
                                <div class="point-innerpoint"></div>
                            </span>
                        </div>
                        <div
                            class="skill-item"
                            @click="setActive(3, 'R', $event)"
                        >
                            <div class="img-box">
                                <svg data-v-45896a2b="" viewBox="0 0 71 71">
                                    <path
                                        class="hehe"
                                        data-v-45896a2b=""
                                        d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                                    ></path>
                                </svg>
                                <img :src="skillR" alt="" />
                            </div>
                            <span class="point">
                                <div class="point-line"></div>
                                <div class="point-innerpoint"></div>
                            </span>
                        </div>
                    </div>
                    <div class="skill-underline"></div>
                    <div class="skill-info">
                        <div class="skill-info-tag">{{ skill.tag }}</div>
                        <div class="skill-info-name">{{ skill.name }}</div>
                        <div class="skill-info-desc">{{ skill.des }}</div>
                    </div>
                </div>
                <div class="skills-section-video">
                    <svg data-v-45896a2b="" viewBox="0 0 600 370">
                        <path
                            data-v-45896a2b=""
                            d="M579.57,1l19.42,19.39V369h-598V1H579.57 M579.99,0H0v370h600V19.98L579.99,0L579.99,0z"
                        ></path>
                    </svg>
                    <video muted autoplay :src="skill.video"></video>
                </div>
            </div>
        </div>
    </div>
    <skin-slide
        v-if="data"
        :name="championName"
        :skins="data.skins"
    ></skin-slide>
    <the-footer></the-footer>
</template>

<script>
import SkinSlide from "../components/SkinSlide.vue";
import Footer from "../components/Footer.vue";
export default {
    data() {
        return {
            data: null,
            skill: null,
        };
    },
    components: {
        SkinSlide,
        "the-footer": Footer,
    },
    computed: {
        championName() {
            return this.$route.params.name;
        },
        smallImg() {
            return `background-image: url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championName}_0.jpg);`;
        },
        bigImg() {
            return `background: linear-gradient(black 1%, transparent 10%) center center, 
            linear-gradient(to top, black 2%, transparent 100%) center center, 
            url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championName}_0.jpg);`;
        },
        passiveImg() {
            return `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/passive/${this.data.passive.image.full}`;
        },
        skillQ() {
            return `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${this.data.spells[0].image.full}`;
        },
        skillW() {
            return `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${this.data.spells[1].image.full}`;
        },
        skillE() {
            return `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${this.data.spells[2].image.full}`;
        },
        skillR() {
            return `https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${this.data.spells[3].image.full}`;
        },
        championId() {
            return ("00" + this.data.key).slice(-3);
        },
    },
    methods: {
        setActive(type, tag, e) {
            const items = document.querySelectorAll(".skill-item");
            items.forEach(function (item) {
                item.classList.remove("active");
            });
            e.target.closest('div[class="skill-item"]').classList.add("active");
            if (type == "passive") {
                this.skill = {
                    tag: "Nội tại",
                    name: this.data.passive.name,
                    des: this.data.passive.description,
                    video: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${this.championId}/ability_0${this.championId}_${tag}1.mp4`,
                };
            } else {
                this.skill = {
                    tag: tag,
                    name: this.data.spells[type].name,
                    des: this.data.spells[type].description,
                    video: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${this.championId}/ability_0${this.championId}_${tag}1.mp4`,
                };
            }
        },
        async loadData() {
            const res = await fetch(
                `https://ddragon.leagueoflegends.com/cdn/11.16.1/data/vn_VN/champion/${this.championName}.json`
            )
            const json = await res.json()
            const response = json.data[this.championName]
            this.data = response;
            const key = ("00" + response.key).slice(-3);
            this.skill = {
                tag: "Nội tại",
                name: response.passive.name,
                des: response.passive.description,
                video: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_P1.mp4`,
            };
            const level = (await response.info.difficulty) / 4;
            const number = Math.floor(level);
            const bars = document.querySelectorAll(".dificult-bar > span");
            for (let i = 0; i <= number; i++) {
                bars[i].classList.add("active");
            }
        },
    },
    created() {
        this.loadData();
    },
};
</script>

<style scoped>
.img-box > svg > path {
    fill: none;
    stroke: #fce5b9;
    stroke-width: 1px;
    stroke-dasharray: 536.9199829101562px;
    stroke-dashoffset: 536.9199829101562px;
    animation: move 2.5s linear forwards;
}
@keyframes move {
    100% {
        stroke-dashoffset: 0;
    }
}
.skills-section-container {
    width: 100%;
    background: black;
    padding-top: 130px;
    position: relative;
}
.skills-section-container > svg {
    position: absolute;
    width: 35%;
    fill: #111418;
    top: 7%;
    left: 33%;
}
.skills-section {
    display: flex;
    width: 1334px;
    margin: 0 auto;
}
.skills-section-info {
    width: 50%;
    margin-top: -50px;
    z-index: 1;
}
.skills-section-info > p {
    color: white;
    margin-left: 40px;
    font-size: 5.8rem;
    text-align: center;
}
.skill-items {
    display: flex;
    justify-content: center;
}
.skill-item {
    height: 175px;
    margin: 0 20px;
    position: relative;
    cursor: pointer;
}
.img-box {
    position: relative;
    transition: all 0.1s;
    vertical-align: top;
}
.skill-item.active .point {
    opacity: 1;
}
.skill-item.active .img-box svg {
    display: block;
}
.img-box svg {
    position: absolute;
    width: 69px;
    height: 69px;
    fill: #fce5b9;
    z-index: 1;
    top: 60px;
    left: -5px;
    display: none;
}
.img-box img {
    width: 60px;
    height: 60px;
    margin-top: 80px;
    transition: all 0.2s;
}
.skill-item.active .img-box img {
    margin-top: 65px;
}
.img-box img:hover {
    margin-top: 77px;
}
.skill-underline {
    width: 100%;
    height: 1px;
    background: #313943;
    position: relative;
    top: -0.1rem;
    z-index: 2;
}
.point {
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 2px solid #fce5b9;
    display: block;
    margin: 41px auto 0;
    z-index: 3;
    left: 23px;
    bottom: -8px;
    opacity: 0;
}
.point-line {
    position: absolute;
    width: 1px;
    height: 26px;
    background-color: #fce5b9;
    top: -27px;
    left: 5px;
    z-index: 3;
}
.point-innerpoint {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fce5b9;
    top: 28%;
    left: 26%;
    z-index: 3;
}
.skill-info {
    margin: 0 105px;
    padding-top: 32px;
}
.skill-info-tag {
    color: #08bedb;
    font-size: 1.4rem;
}
.skill-info-name {
    font-weight: 700;
    margin-top: 5px;
    color: white;
    font-size: 2rem;
}
.skill-info-desc {
    margin-top: 6px;
    margin-left: 2px;
    color: white;
    font-size: 1.4rem;
}
.skills-section-video {
    width: 50%;
    position: relative;
    height: 500px;
}
.skills-section-video > svg {
    position: absolute;
    width: 93%;
    height: 102%;
    fill: #313943;
    top: -73px;
    left: 9px;
}
.skills-section-video > video {
    width: 620px;
    height: 365px;
    object-fit: cover;
}
.interrupt-symbol {
    padding-top: 150px;
    background: black;
}
.straightLine {
    width: 3px;
    height: 30px;
    background-color: #313943;
    margin: 0 auto 7px;
}
.square.square1 {
    width: 7px;
    height: 7px;
    border: 1px solid #313943;
    transform: rotate(45deg);
    margin: 0.06rem auto auto;
    z-index: 1;
}
.square.square2 {
    width: 7px;
    height: 7px;
    border: 1px solid #313943;
    transform: rotate(45deg);
    margin: -2px auto auto;
    z-index: 1;
}

.container-big-wallpaper {
    position: relative;
    width: 100%;
    transform: translateY(68px);
}
.center {
    width: 1220px;
    margin: auto;
    height: 717px;
}
.nav {
    padding-top: 30px;
    padding-left: 5px;
    margin-bottom: 30px;
}
.nav ul li {
    display: inline-block;
    margin-right: 15px;
}
.nav ul li i {
    font-size: 1.5rem;
    color: white;
}
.nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    padding-right: 15px;
    font-weight: 600;
}
.small-wallpaper {
    position: relative;
    background-color: black;
}
.small-img {
    width: 100%;
    height: 85vh;
    background-size: cover;
    -webkit-mask-image: linear-gradient(#000 65%, transparent 98%);
}
.info {
    position: absolute;
    top: 61%;
}
.info > svg {
    position: absolute;
    top: 95px;
    width: 89%;
    left: 70px;
}
.info-name {
    margin-bottom: 35px;
}
.info-content {
    display: flex;
    width: 100%;
}
.info-content-tag {
    min-width: 25%;
    text-align: center;
    padding-left: 180px;
}
.fake-name {
    text-align: center;
    color: #fff;
    font-style: italic;
    font-weight: 700;
    font-size: 1.8rem;
}
.true-name {
    text-align: center;
    color: #fff;
    font-style: italic;
    font-weight: 700;
    font-size: 10rem;
}
.position-tag {
    font-size: 1.4rem;
    color: white;
    margin-top: 10px;
}
.position {
    font-size: 1.4rem;
    color: #d7a25e;
    margin-top: 3px;
}
.info-content {
    position: relative;
}
.info-content-tag svg {
    width: 33px;
    height: 33px;
    fill: #fce5b9;
}
.info-content-dificult {
    min-width: 25%;
    text-align: center;
    padding-right: 110px;
    padding-top: 20px;
}
.dificult-bar {
    margin-left: 9px;
}
.dificult-bar span {
    display: inline-block;
    width: 15px;
    height: 8px;
    opacity: 1;
    background-color: #053041;
    margin-right: 4px;
    background-clip: content-box;
    transform: skewX(-50deg);
}
.dificult-bar .active {
    background: #09cedf;
}
.dificult-bar > .active {
    color: white;
}
.dificult-tag {
    font-size: 1.4rem;
    color: white;
    margin-top: 15px;
}
.dificult {
    font-size: 1.6rem;
    color: #d7a25e;
    margin-top: 3px;
}
.info-content-lore {
    width: 50%;
    text-align: left;
    padding-left: 60px;
    margin-right: 100px;
    overflow: auto;
    height: 120px;
    border-left: 1px solid rgba(255, 255, 255, 0.432);
}
.info-content-lore::-webkit-scrollbar {
    width: 3px;
    background-color: rgba(0, 0, 0, 0.397);
}
.info-content-lore::-webkit-scrollbar-thumb {
    background: #d7a25e;
}
.info-content-lore p {
    color: white;
    font-size: 1.4rem;
}
@media (max-width: 426px) {
    .container-big-wallpaper {
        background: none;
    }
    .fake-name {
        font-size: 5vw;
    }
    .true-name {
        font-size: 15vw;
    }
    .center {
        width: 100%;
        height: 100vh;
    }
    .skills-section {
        flex-direction: column;
    }
    .info > svg,
    .nav,
    .interrupt-symbol {
        display: none;
    }
    .skills-section {
        width: 100%;
    }
    .info {
        top: 70%;
    }
    .skill-item {
        margin: 0 9px;
    }
    .skills-section-container {
        padding-top: 0;
        z-index: 1;
    }
    .skill-item {
        height: 100%;
    }
    .skills-section {
        padding-bottom: 0;
    }
    .skills-section-info {
        width: 100%;
        margin-top: 0;
        order: 1;
    }
    .skills-section-info > p {
        margin: 15px;
        font-size: 7vw;
    }
    .skills-section-video {
        width: 100%;
        padding: 15px;
        height: unset;
    }
    .skill-underline,
    .point {
        display: none;
    }
    .skill-item.active .img-box img {
        margin-top: 0;
    }
    .img-box > img {
        margin-top: 0;
        width: 14vw;
        height: 14vw;
    }
    .img-box svg {
        top: -8%;
        left: -8%;
        height: unset;
        width: 16vw;
    }
    .skills-section-video > video {
        width: 100%;
        height: 30vh;
    }
    .skills-section-video > svg {
        display: none;
    }
    .skill-info {
        margin: 15px;
        padding: 20px;
    }
    .skill-info-desc {
        font-size: 4vw;
        line-height: 100%;
    }
    .info-content {
        flex-wrap: wrap;
    }
    .info-content-tag {
        padding: 0;
        width: 50%;
    }
    .info-content-dificult {
        width: 50%;
        padding: 0;
    }
    .info-content-lore {
        width: 100%;
        border-left: none;
        margin: 15px;
        padding: 0;
    }
    .small-img {
        height: 50vh;
        background-size: cover;
        background-position: center;
        -webkit-mask-image: linear-gradient(#000 65%, transparent 98%);
    }
    .img-box img:hover {
        margin-top: 0;
    }
}
</style>
