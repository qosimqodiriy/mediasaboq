<template>
  <div class="body">
    <div class="container">
      <div class="container__inner">
        <h1>Tez kunda onlayn darslar!</h1>
        <p class="text">
          Agarda biz bilan pochta manzilingizni bo‘lishsangiz onlayn darslar
          imkoniyatimiz ishga tushganda sizga o‘zimiz xabar beramiz!
        </p>
        <p v-if="Error !== ''" class="text-red-500 mb-3">{{ Error }}</p>
        <form class="contact-box">
          <input class="input" type="email" v-model="EmailValue" placeholder="Pochta manzilingiz" autocomplete="false" required />
          <button class="btn" type="submit" @click="PostEmail">Ma’lumotni qoldirish</button>
        </form>
        <p v-if="Send !== ''" class="text-green-500 mt-3">{{ Send }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OnlineDarslar',

  head: {
    title: 'Online darslar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Online darslar - buu ...'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'online darslar',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: 'Online darslar - buu ...',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: '/online-darslar',
      },
    ],
  },

  data() {
    return {
      EmailValue: "",
      Error: '',
      Send: '',
    }
  },

  methods: {
    PostEmail(event) {
      event.preventDefault()
      if (!/@/.test(this.EmailValue) || /[ `!#$%^&*()_+\-={};':"|,<>?~]/.test(this.EmailValue)) {
        this.Error = "To'g'ri email kiritilmadi"
        setTimeout(() => { this.Error = '' }, 2000)
      }
      if (/@/.test(this.EmailValue) && !/[ `!#$%^&*()_+\-={};':"|,<>?~]/.test(this.EmailValue)) {
        axios.post(`https://mediasaboq.uz/api/v1/email`, {
          url: this.EmailValue,
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        setTimeout(() => { this.Send = "Pochta manzilingiz yuborildi" }, 500);
        setTimeout(() => { this.Send = '' }, 2000)
        setTimeout(() => { this.EmailValue = '' }, 150)
      }
    }
  }
}
</script>


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
  height: calc(100vh - 140px);
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
  display: flex;
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
  color: white;
  font-size: 15px;
  line-height: 22px;
  max-width: 200px;
  padding: 16px 20px;
  border-radius: 0px !important;
  background: #ff6300;
  box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
}
/* .native {
  position: fixed;
  font-size: 18px;
  bottom: 12%;
  right: 5%;
  display: none;
  color: white;
  padding: 12px 30px;
  border-radius: 7px;
  background-color: #ff6300;
} */

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
  .btn {
    color: white;
    font-size: 15px;
    line-height: 22px;
    padding: 16px 20px;
    border-radius: 0px !important;
    background: #ff6300;
    margin: 0 auto;
    box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
  }
}
</style>