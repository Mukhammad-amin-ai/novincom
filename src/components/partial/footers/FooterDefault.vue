
<template>
  <footer class="footer">
    <div class="footer-middle">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="widget widget-about">
              <img src="../../../assets/newImg/logotypes/logo.svg" class="footer-logo bg-transparent" alt="Footer Logo"
                width="105" height="27" />
              <p style="font-family: Gilroy-Medium !important;">
                Подключите программу “Бонусы” к Вашей карте, оплачивайте ей покупки и получайте баллы
              </p>

              <div class="widget-call">
                <!-- <i class="icon-phone"></i> -->
                <img src="../../../assets/newImg/icons/icon-tell.svg" alt="icon">
                Обратитья в банк
                <a href="tel:#" style="font-family: Gilroy-Medium !important; font-size: 20px;">+7 800 250-70-07</a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title">О программе</h4>

              <ul class="widget-list">
                <li>
                  <router-link to="https://novikom.ru/individuals/bonus-program/">О программе</router-link>
                </li>
                <li>
                  <router-link to="https://novikom.ru/individuals/bonus-program/">Как программа работает</router-link>
                </li>
                <li>
                  <router-link to="https://novikom.ru/upload/docs/bonusi-pravila.pdf">Правила программы</router-link>
                </li>
                <li>
                  <router-link to="https://novikom.ru/individuals/bonus-program/faq/ ">Вопросы и ответы</router-link>
                </li>
                <li>
                  <router-link to="https://wikimybill.ru/page32603929.html ">Безопасность</router-link>
                </li>
                <li>
                  <router-link to="https://novikom.ru/">Официальный сайт АО АКБ “НОВИКОМБАНК”</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title">Скачать приложение</h4>

              <ul class="widget-list">
                <li>
                  <router-link to="">RuMarket</router-link>
                </li>
                <li>
                  <router-link to="">RuStore</router-link>
                </li>
                <li>
                  <router-link to="#">NashMarket</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title">Мой аккаунт</h4>
              <ul class="widget-list">
                <li>
                  <a href="#">Вход</a>
                </li>
                <li>
                  <router-link to="#">Корзина</router-link>
                </li>
                <li>
                  <router-link to="#">Заказы</router-link>
                </li>
                <li>
                  <router-link to="/shop/dashboard">Операции</router-link>
                </li>
                <li>
                  <router-link to="#">Избранное</router-link>
                </li>
                <li>
                  <router-link to="#">Регистрация</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div :class="isFullwidth ? 'container-fluid' : 'container'" class="pb-2 pt-2">
        <p class="footer-copyright">
          АО АКБ “Новикомбанк”
        </p>

        <figure class="footer-payments">
          <img src="../../../assets/newImg/logotypes/mir.jpg" alt="Payment methods" class="bg-transparent" />
        </figure>
      </div>
    </div>
    <div class="mb-10" v-if="bottomSticky"></div>
  </footer>
</template>
<script>
export default {
  data: function () {
    return {
      bottomSticky: false,
    };
  },
  computed: {
    isFullwidth: function () {
      return this.$route.path.includes("fullwidth");
    },
  },
  watch: {
    $route: function () {
      this.handleBottomSticky();
    },
  },
  mounted: function () {
    this.handleBottomSticky();
    window.addEventListener("resize", this.handleBottomSticky, {
      passive: true,
    });
  },
  destroyed: function () {
    window.removeEventListener("resize", this.handleBottomSticky);
  },
  methods: {
    handleBottomSticky: function () {
      this.bottomSticky =
        this.$route.path.includes("/product/default") &&
        window.innerWidth > 991;
    },
  },
};
</script>
  
