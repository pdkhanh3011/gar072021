<template>
    <div class="skins-slide-container">
        <div class="skins-slide">
            <div class="skins-slide-1">
                <swiper
                    :slides-per-view="1"
                    :space-between="50"
                    @slideChange="onSlideChange"
                    :effect="'fade'"
                    @swiper="setFirstSwiper"
                    :controller="{ control: secondSwiper }"
                >
                    <swiper-slide v-for="skin in skins" :key="skin.id">
                        <img
                            :src="
                                'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
                                name +
                                '_' +
                                skin.num +
                                '.jpg'
                            "
                            alt=""
                        />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="skins-slide-2">
                <h3>Trang phục</h3>
                <div class="all">
                    <div class="skins-slide-2-container">
                        <swiper
                            :slidesPerView="11"
                            :spaceBetween="30"
                            :centeredSlides="true"
                            :direction="'vertical'"
                            :autoplay="{
                                delay: 3500,
                                disableOnInteraction: true,
                            }"
                            @swiper="setSecondSwiper"
                            :controller="{ control: firstSwiper }"
                            :slideToClickedSlide="true"
                        >
                            <swiper-slide
                                v-for="skin in skins"
                                :key="skin.id"
                                class="item-slide-2"
                            >
                                <svg data-v-45896a2b="" viewBox="0 0 295 90">
                                    <path
                                        data-v-45896a2b=""
                                        d="M274.57,1l19.42,19.39V89h-293V1H274.57 M274.99,0H0v90h295V19.98L274.99,0L274.99,0z"
                                    ></path>
                                </svg>
                                <img
                                    width="100%"
                                    :src="
                                        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
                                        name +
                                        '_' +
                                        skin.num +
                                        '.jpg'
                                    "
                                    alt=""
                                />
                                <span>{{ skin.name }}</span>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SwiperCore, { Autoplay, EffectFade, Controller } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, EffectFade, Controller]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            firstSwiper: null,
            secondSwiper: null,
        };
    },
    props: ["skins", "name"],
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange(e) {
            console.log(e.activeIndex);
        },
    },
    computed: {},
    methods: {
        setFirstSwiper(swiper) {
            this.firstSwiper = swiper;
        },
        setSecondSwiper(swiper) {
            this.secondSwiper = swiper;
        },
    },
    created() {
        this.skins[0].name = "Trang phục mặc định";
    },
};
</script>

<style scoped>
.skins-slide-2-container .swiper-container {
    height: 160%;
    top: -60%;
}
.skins-slide-1 img {
    width: 100%;
}
.all {
    position: absolute;
    width: 100%;
    overflow: hidden;
    bottom: 0;
    height: 87%;
}
.skins-slide-container {
    width: 100%;
    background-color: black;
    padding-bottom: 150px;
}
.swiper-slide {
    margin-right: 0;
    height: unset;
}
.skins-slide {
    position: relative;
    max-width: 1334px;
    margin: 0 auto;
    max-height: 720px;
    overflow: hidden;
}
.skins-slide-2 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 24.3vw;
    z-index: 1;
}
.skins-slide-2-container {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 24.3vw;
    z-index: 1;
}
.skins-slide-2::after {
    content: "";
    position: absolute;
    top: 0;
    width: 94%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
}
.skins-slide-2 .swiper-container {
    padding-left: 50px;
}
.item-slide-2 {
    position: relative;
    height: 82.5px;
    cursor: pointer;
}
.item-slide-2.swiper-slide-active {
    cursor: unset;
}
.item-slide-2 svg {
    display: none;
    width: 19vw;
    position: absolute;
    stroke: rgb(70, 70, 70);
    top: 6%;
    z-index: -1;
}
.item-slide-2 path {
    fill: transparent;
    stroke-dasharray: 1508.9200439453125px;
    stroke-dashoffset: 1508.9200439453125px;
    animation: move 2.5s ease-in-out forwards;
}
@keyframes move {
    100% {
        stroke-dashoffset: 0;
    }
}
.item-slide-2.swiper-slide-active svg {
    display: block;
}
.item-slide-2 img {
    height: 6.3vw;
    width: 6.3vw;
    object-fit: cover;
    vertical-align: middle;
    transform: scale(0.6);
    transition: all 0.35s;
    opacity: 0.6;
}
.item-slide-2:hover img {
    opacity: 1;
}
.item-slide-2.swiper-slide-active img {
    transform: scale(1);
    opacity: 1;
}
.item-slide-2 span {
    transition: all 0.2s;
    font-size: 0.95vw;
    color: white;
    vertical-align: middle;
    opacity: 0.2;
    font-weight: 600;
    display: inline-block;
    width: 11vw;
}
.item-slide-2:hover span {
    opacity: 1;
}
.item-slide-2.swiper-slide-active span {
    opacity: 1;
    margin-left: 15px;
}
.skins-slide-2 > h3 {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    border-bottom: 1px solid white;
    font-size: 4rem;
    z-index: 10;
    width: 75%;
    left: 10%;
    font-weight: 400;
    padding-top: 25px;
    height: 13%;
    text-align: center;
}
.a {
  
}
</style>
