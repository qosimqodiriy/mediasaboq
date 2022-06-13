<template>
  <div class="body">
    <div class="container">
      <div class="container__inner">
        <h1>Tez kunda onlayn darslar!</h1>
        <p class="text">
          Agarda biz bilan pochta manzilingizni bo‘lishsangiz onlayn darslar
          imkoniyatimiz ishga tushganda sizga o‘zimiz xabar beramiz!
        </p>
        <div class="contact-box">
          <input class="input" type="email" placeholder="Pochta manzilingiz" autocomplete="false" />
          <button class="btn" type="submit">Ma’lumotni qoldirish</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/onlineBg.png') no-repeat top center;
  background-size: cover;
}
.container {
  padding: 0;
  display: flex;
  width: 100%;
  height: calc(100vh - 231px);
  align-items: center;
  justify-content: center;
}
.container__inner {
  width: 804px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
}
.text {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 40px;
}
.contact-box {
  display: inline-flex;
}
.input {
  width: 360px;
  font-size: 15px;
  line-height: 22px;
  color: #010e38;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
}
.input:focus {
    outline: none;
}
.btn {
  display: inline-block;
  color: white;
  font-size: 15px;
  line-height: 22px;
  padding: 16px 20px;
  border-radius: 0px !important;
  background: #ff6300;
  box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
}

@media screen and (max-width: 700px) {
  h1 {
    font-weight: 500;
    font-size: 34px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 10px;
  }
  .contact-box {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }
}
</style>