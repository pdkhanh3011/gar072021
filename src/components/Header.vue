<template>
    <div class="header-container">
        <div class="header">
            <div class="header-logo">
                <a href="">
                    <img src="https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/logo.png" alt="">
                </a>
            </div>
            <div class="header-nav">
                <ul>
                    <li>
                        <router-link to="/">TIN TỨC</router-link>
                    </li>
                    <li>
                        <a href="">GIỚI THIỆU</a>
                    </li>
                    <li>
                        <a href="">ESPORTS</a>
                    </li>
                    <li>
                        <a href="">HỖ TRỢ</a>
                    </li>
                    <li>
                        <router-link to="/champion">TƯỚNG</router-link>
                    </li>
                    <li>
                        <a href="">NẠP THẺ</a>
                    </li>
                </ul>
            </div>
            <div @click="setActive" class="nav-btn">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <div class="mobile-nav">
                <div class="mobile-nav-header">
                    <div class="mobile-nav-header-logo">
                        <a href=""></a>
                    </div>
                </div>
                <div class="mobile-nav-content">
                    <div class="item">
                        <div @click="dropDown" class="title">TIN TỨC</div>
                        <ul>
                            <li><a href="">TIN TỨC</a></li>
                            <li><a href="">SỰ KIỆN</a></li>
                            <li><a href="">TIN GAME</a></li>
                            <li><a href="">ESPORTS</a></li>
                            <li><a href="">CỘNG ĐỒNG</a></li>
                            <li><a href="">CẨM NANG</a></li>
                            <li><a href="">VŨ TRỤ</a></li>
                        </ul>
                    </div>
                    <div class="item">
                        <div @click="dropDown" class="title">GIỚI THIỆU</div>
                        <ul>
                            <li><a href="">GIỚI THIỆU</a></li>
                            <li><a href="">TƯỚNG</a></li>
                            <li><a href="">TRANG BỊ</a></li>
                        </ul>
                    </div>
                    <div class="item">
                        <div class="title">ESPORTS</div>
                    </div>
                    <div class="item">
                        <div class="title">HỖ TRỢ</div>
                    </div>
                    <div class="item">
                        <div class="title">NẠP THẺ</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        setActive(e) {
            e.target.closest('.header').classList.toggle('active')
        },
        dropDown(e) {
            e.target.classList.toggle('active')
        }
    }
}
</script>

<style scoped>
.mobile-nav {
    display: none;
}
.nav-btn {
    display: none;
}
.header-container {
    width: 100%;
    height: 70px;
    background-color: #101215;
    position: fixed;
    z-index: 100;
}
.header {
    display: flex;
    margin: auto;
    max-width: 1220px;
    width: 100%;
    height: 100%;
}
.header-logo {
    width: 14%;
    margin-top: 5px;
}
.header-nav {
    width: 86%;
}
.header-nav ul {
    display: flex;
    list-style: none;
    height: 100%;
}
.header-nav ul li {
    position: relative;
    width: 16.6666666666666667%;
    height: 100%;
}
.header-nav ul li:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #0bc6e3;
}
.header-nav ul li a {
    display: flex;
    align-items: center;
    color: #c19e68;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: none;
    height: 100%;
    justify-content: center;
}
.header-nav ul li a:hover {
    transform: translateY(-2px);
}
@media (max-width: 1025px) {
    .header {
        padding: 0 35px;
    }
    .header-nav ul li a {
        font-size: 1.4rem;
    }
    .header-container {
        height: 55px;
    }
    .header-logo img {
        width: 130px;
    }
}
@media (max-width: 769px) {
    .header-logo img {
        width: 110px;
        margin-top: 1px;
    }
}
@media (max-width: 426px) {
    .nav-btn {
        margin-top: 10px;
        padding-top: 5px;
        align-items: center;
        display: block;
        position: absolute;
        background-color: #ccbe91;
        right: 20px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        z-index: 100;
    }
    .nav-btn .line {
        transition: all 0.8s;
        height: 4px;
        width: 16px;
        background: black;
        display: block;
        margin: 3.1px auto 0;
    }
    .header.active .nav-btn .line:first-child {
        transform: translateY(7px) rotate(45deg);
    }
    .header.active .nav-btn .line:nth-child(2) {
        opacity: 0;
    }
    .header.active .nav-btn .line:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }
    .header-nav {
        display: none;
    }
    .header-logo {
        width: 100%;
        text-align: center;
    }
    .mobile-nav {
        transition: all 0.5s;
        box-shadow: -3px 0 10px rgba(0, 0, 0, 0.7);
        position: fixed;
        display: block;
        height: 100%;
        right: 0;
        z-index: 11;
        width: 79%;
        transform: translateX(103%);
    }
    .header.active .mobile-nav {
        transform: translateX(0);
    }
    .mobile-nav-header {
        background-color: #101215;
        height: 55px;
    }
    .mobile-nav-header-logo {
        padding-top: 6px;
        padding-left: 10px;
    }
    .mobile-nav-header-logo  a{
        display: block;
        background-image: url(https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/logo.png);
        height: 45px;
        width: 120px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .mobile-nav-content {
        padding: 0 15px;
        height: 100%;
        background-color: #061d25;
    }
    .item ul {
        transition: all 0.5s;
        overflow: hidden;
        max-height: 0;
    }
    .title.active + ul {
        max-height: 250px;
    }
    .title {
        padding: 8px 0;
        font-size: 18px;
        background: linear-gradient(#fce5b9,#d1ad6f);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: tan;
        font-weight: 600;
    }
    .mobile-nav-content li {
        padding: 5.6px 0 5.6px 17px;
    }
    .mobile-nav-content li::before {
        vertical-align: middle;
        display: inline-block;
        content: "";
        width: 0;
        height: 0;
        border-top: 4.5px solid transparent;
        border-right: 4.5px solid transparent;
        border-bottom: 4.5px solid transparent;
        border-left: 4.5px solid white;
        margin-right: 4px;
    }
    .mobile-nav-content a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        vertical-align: middle;
    }
}
</style>