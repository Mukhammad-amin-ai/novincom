<template>
  <div class="flight-wrapper">
    <div class="cover">
      <div class="flight-item">
        <div class="start-flight">
          <img src="../../../assets/newImg/logo-air.png" alt="">
          <h6>20:20 VOG</h6>
          <h6>07.02.2024</h6>
        </div>
        <div class="flight-line">
          <img src="../../../assets/newImg/icons/ellipse.svg" alt="">
          <div class="line"></div>
          <img src="../../../assets/newImg/icons/airplane.svg" alt="">
        </div>
        <div class="start-flight">
          <img src="../../../assets/newImg/logo-air.png" alt="">
          <h6>22:25 SVO</h6>
          <h6>07.02.2024</h6>
        </div>
        <div class="flight-info">
          <h6>DP-6968</h6>
          <h6>Победа</h6>
        </div>
        <div class="flight-passenger-info">
          <div class="top-icons">
            <img src="../../../assets/newImg/icons/Group-class.svg" alt="">
            <img src="../../../assets/newImg/icons/arrows.svg" alt="">
            <img src="../../../assets/newImg/icons/round-arrows.svg" alt="">
          </div>
          <div class="bottom-info">
            <div class="item-bot">E</div>
          </div>
        </div>
      </div>
      <div class="flight-item">
        <div class="start-flight">
          <img src="../../../assets/newImg/logo-air.png" alt="">
          <h6>20:20 VOG</h6>
          <h6>07.02.2024</h6>
        </div>
        <div class="flight-line">
          <img src="../../../assets/newImg/icons/ellipse.svg" alt="">
          <div class="line"></div>
          <img src="../../../assets/newImg/icons/airplane.svg" alt="">
        </div>
        <div class="start-flight">
          <img src="../../../assets/newImg/logo-air.png" alt="">
          <h6>22:25 SVO</h6>
          <h6>07.02.2024</h6>
        </div>
        <div class="flight-info">
          <h6>DP-6968</h6>
          <h6>Победа</h6>
        </div>
        <div class="flight-passenger-info">
          <div class="top-icons">
            <img src="../../../assets/newImg/icons/Group-class.svg" alt="">
            <img src="../../../assets/newImg/icons/arrows.svg" alt="">
            <img src="../../../assets/newImg/icons/round-arrows.svg" alt="">
          </div>
          <div class="bottom-info">
            <div class="item-bot">E</div>
          </div>
        </div>
      </div>
    </div>
    <button class="price-flight">
      1000.00
    </button>
  </div>
</template>

<script >
export default {

}
</script>

<style scoped>
.flight-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #EBEBEB;

}

.cover {
  width: 100%;
  height: auto;
  margin: 10px 0;
}

.flight-item {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.start-flight {
  width: 80px;
  height: auto;
  text-align: center;
}

.start-flight h6 {
  font-family: Gilroy-Medium !important;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 0 !important;
}

.flight-line {
  width: 465px;
  height: auto;
  display: flex;
  align-items: center;
  gap: 5px;
}

.line {
  width: 100%;
  height: 10px;
  border-bottom: 3px dotted #777777;
  margin-bottom: 7px;
}

.flight-info {
  padding: 10px;
  height: 70px;
  margin: 0 20px;
}

.flight-info h6 {
  font-family: Gilroy-Medium !important;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 0 !important;
}

.flight-passenger-info {
  padding: 10px;
  height: 70px;
  margin: 0 20px;
}

.top-icons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.bottom-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.item-bot {
  width: 20px;
  height: auto;
  font-family: Gilroy-Medium !important;
}

.price-flight {
  width: 140px;
  height: auto;
  padding: 16px 37.5px;
  font-family: Gilroy-Medium !important;
  font-size: 16px;
  border-radius: 100px;
  color: #005BAA;
  border: 1px solid #005BAA;
}
</style>