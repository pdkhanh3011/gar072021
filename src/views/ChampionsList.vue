<template>
    <div v-if="displayChampions" class="wrapper">
        <div class="wallpaper">
            <div class="child-wallpaper"></div>
            <div class="wallpaper-nav">
                <ul>
                    <li>
                        <router-link to="./">Trang chủ</router-link>
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </li>
                    <li>
                        <a href="">Giới thiệu</a>
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </li>
                    <li>
                        <a href="">Tướng</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list-champions">
            <div class="list-champions-container">
                <div class="title">
                    Với hơn 150 vị tướng, chắc chắn bạn sẽ tìm được lựa chọn phù
                    hợp với lối chơi của mình. Hãy luyện một, hoặc tất cả cũng
                    được nhé!
                </div>
                <div class="list-champions-nav">
                    <svg data-v-5575b810="" viewBox="0 0 1320 50">
                        <path
                            data-v-5575b810=""
                            d="M1319,1v28.59L1299.55,49L99,49H1V20.41L20.45,1L85,1H1319 M1320,0H85v0H20.03L0,20v30h99v0h1200.97L1320,30V0L1320,0z"
                        ></path>
                    </svg>
                    <i class="fas fa-search"></i>
                    <input
                        type="text"
                        placeholder="Tìm Tướng"
                        v-model="searchInput"
                    />
                    <span class="active" @click="filterChampion('all', $event)"
                        >Tất Cả</span
                    >
                    <span @click="filterChampion('Marksman', $event)"
                        >Xạ Thủ</span
                    >
                    <span @click="filterChampion('Fighter', $event)"
                        >Đấu Sĩ</span
                    >
                    <span @click="filterChampion('Tank', $event)">Đỡ Đòn</span>
                    <span @click="filterChampion('Assassin', $event)"
                        >Sát Thủ</span
                    >
                    <span @click="filterChampion('Support', $event)"
                        >Hỗ Trợ</span
                    >
                    <span @click="filterChampion('Mage', $event)">Pháp Sư</span>
                </div>
                <div class="all-champion">
                    <div v-if="!displayChampions.length" class="alert">
                        Không tìm thấy tướng phù hợp
                    </div>
                    <div
                        class="item"
                        v-for="(champion, index) in displayChampions"
                        :key="index"
                    >
                        <router-link :to="linkToDetail(champion.name)">
                            <div class="img-box">
                                <img :src="champion.img" alt="" />
                            </div>
                            <div class="img-name">
                                <span>{{ champion.name }}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    data() {
        return {
            searchInput: "",
            displayChampions: null,
        };
    },
    components: {
        "the-footer": Footer,
    },
    computed: {
        noTrimNoUpper() {
            return this.searchInput.toLowerCase().trim();
        },
        champions() {
            return this.$store.getters.sortAbc;
        },
    },
    methods: {
        filterChampion(position, event) {
            const spans = document.querySelectorAll(".list-champions-nav span");
            spans.forEach(function (span) {
                span.classList.remove("active");
            });
            event.target.classList.add("active");
            if (position == "all") {
                this.displayChampions = this.champions;
            } else {
                const filtedChampion = this.champions.filter(function (
                    champion
                ) {
                    if (champion.position.includes(position)) {
                        return true;
                    }
                });
                this.displayChampions = filtedChampion;
            }
        },
        linkToDetail(name) {
            return `/champion/${name}`;
        },
    },
    watch: {
        noTrimNoUpper(name) {
            this.displayChampions = this.champions.filter(function (champion) {
                const lower = champion.name.toLowerCase();
                if (lower.includes(name)) {
                    return true;
                }
            });
        },
    },
    async created() {
        const championsApi1 =
            "https://ddragon.leagueoflegends.com/cdn/11.16.1/data/vn_VN/champion.json";
        const response = await fetch(championsApi1);
        const json = await response.json();
        const championList1 = json.data;
        const champions = [];
        for (let name in championList1) {
            champions.push({
                name: `${name}`,
                img: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`,
                position: championList1[name].tags,
            });
        }
        this.$store.commit("getChampionsListFromApi", champions);
        this.displayChampions = this.$store.getters.sortAbc;
    },
};
</script>

<style scoped>
.alert {
    text-align: center;
    padding: 10px 0 170px;
    font-size: 3.5rem;
    color: #626262;
}
.wrapper {
    padding-top: 70px;
}
.wallpaper {
    position: relative;
    background-image: url(https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/clear2.jpg);
    width: 100%;
    height: 247.5px;
    background-repeat: no-repeat;
    background-size: cover;
}
.child-wallpaper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 18%;
    background-image: url("https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/defaultbanner.jpg");
    width: 1220px;
    height: 130px;
    background-repeat: no-repeat;
}
.child-wallpaper::after {
    content: "";
    position: absolute;
    border: 1px solid #fce5b9;
    width: 98%;
    height: 112%;
    left: 11px;
    top: -9px;
}
.wallpaper-nav {
    display: none;
    position: absolute;
    left: 10.5%;
    top: 84%;
}
.wallpaper-nav ul {
    display: flex;
    list-style: none;
}
.wallpaper-nav ul li {
    margin-right: 10px;
}
.wallpaper-nav ul li a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    padding-right: 10px;
    vertical-align: middle;
}
.wallpaper-nav ul li span {
    vertical-align: middle;
}
.wallpaper-nav ul li span i {
    color: white;
    font-size: 1.1rem;
}
.list-champions-container {
    margin: auto;
    width: 1334px;
}
.title {
    margin: 30px 400px 50px;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
}
.list-champions-nav {
    height: 50px;
    position: relative;
}
.list-champions-nav > svg {
    position: absolute;
    z-index: -1;
}
.list-champions-nav > svg > path {
    stroke: #c2c1c1;
}
.list-champions-nav i {
    color: #c19e68;
    font-size: 3rem;
    vertical-align: middle;
    margin-left: 30px;
    margin-right: 18px;
}
.list-champions-nav input {
    width: 150px;
    height: 71%;
    border-top: none;
    border-left: none;
    border-bottom: none;
    border-right: 1px solid #626262;
    outline: none;
    font-size: 1.7rem;
    font-weight: 600;
    vertical-align: middle;
    background-color: transparent;
}
.list-champions-nav span {
    display: inline-block;
    height: 48px;
    line-height: 48px;
    position: relative;
    cursor: pointer;
    font-size: 1.7rem;
    color: #626262;
    font-weight: 600;
    margin: 0 20px;
    vertical-align: middle;
}
.list-champions-nav span:hover::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #c19e68;
}
.list-champions-nav span.active::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #c19e68;
}
span:nth-child(4) {
    margin-left: 145px;
    position: relative;
}
.list-champions-container {
    padding: 0 15px;
}
.all-champion {
    padding-top: 60px;
}
.item {
    float: left;
    position: relative;
    width: 244px;
    height: 324.8px;
    margin: 0 20px 20px 0;
    overflow: hidden;
}
.item:nth-child(5n) {
    margin-right: 0;
}
.item::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid white;
    border-left: 20px solid transparent;
    top: 0;
    right: 0;
}
.item a {
    text-decoration: none;
}
.item a:hover > .img-name {
    padding-left: 30px;
    background-color: #006680;
}
.item a:hover > .img-box > img {
    transform: scale(1);
}
.img-box img {
    transform: scale(1.05);
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
}
.img-name {
    transition: all 0.2s ease-in-out;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: black;
    padding: 10px 10px 10px 20px;
}
.img-name span {
    color: white;
    font-size: 2.5rem;
    font-weight: 500;
}
@media (max-width: 426px) {
    .wallpaper {
        display: none;
    }
}
</style>
