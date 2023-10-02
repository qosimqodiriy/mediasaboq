<template>
  <div v-if="item.id" class="card">
    <div class="img">
      <img :src="`https://mediasaboq.uz/${item.image}`" :alt="item.title" class="pic" />
    </div>

    <div class="content">
      <div class="mid">
        <p class="time">{{ item.bookAuthor }}</p>
      </div>
      <h3 class="txt">{{ item.title }}</h3>

      <!-- Download -->
      <div class="download">
        <button v-if="isOpen === false" @click="(event) => onClick(item.url)" class="btn">Yuklab olish <img src="@/assets/icons/download.png" width="24" height="24" alt="download">
          <a v-if="isDownload === true" :href="`https://mediasaboq.uz/${item.url}`" download class="href"></a>
        </button>

        <div v-if="isOpen === true" class="mt-5">
          <p class="my-4 text-lg">Iltimos, Yuklash uchun emailingizni kiriting!</p>
          <p v-if="Error !== ''" class="text-red-500 mb-3">{{ Error }}</p>

          <form class="contact-box">
            <input v-model="EmailValue" v-on:keypress.enter.prevent="SendEmail" class="input flex-auto" type="email" placeholder="Pochta manzilingiz" autocomplete="false" required />
            <button @click="SendEmail" class="btnSend" type="submit">Yuborish</button>
          </form>

          <p v-if="Send !== ''" class="text-green-500 mt-3">{{ Send }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'BookBanner',

  props: {
    item: {
      // required: true,
      type: Object,
    },
  },

  data() {
    return {
      Send: '',
      Error: '',
      isOpen: false,
      EmailValue: '',
      isDownload: false,
    }
  },

  methods: {
    onClick(url) {
      if (!localStorage.getItem("email")) {
        this.isOpen = true
      }
    },

    SendEmail(event) {
      event.preventDefault()
      if (!/@/.test(this.EmailValue) || /[ `!#$%^&*()_+\-={};':"|,<>?~]/.test(this.EmailValue)) {
        this.Error = "To'g'ri email kiritilmadi"
        setTimeout(() => { this.Error = '' }, 2000)
      }

      if (/@/.test(this.EmailValue) && !/[ `!#$%^&*()_+\-={};':"|,<>?~]/.test(this.EmailValue)) {
        axios.post(`https://mediasaboq.uz/api/v1/email`, {
          url: this.EmailValue,
        })
          .then(response => {
            // console.log(response);
            localStorage.setItem('email', this.EmailValue);
            this.isDownload = true
            this.Send = "Pochta manzilingiz yuborildi"
            setTimeout(() => { this.Send = '' }, 2000)
            setTimeout(() => { this.isOpen = false }, 2000)
            this.EmailValue = ''
          })
          .catch(function (error) {
            console.log(error);
            this.Error = "Emailingiz yuborilmadi"
            setTimeout(() => { this.Error = '' }, 2000)
          });
      }
    }

  },

  mounted() {
    if (localStorage.getItem("email")) {
      this.isDownload = true
    }
  }

}
</script>

<style scoped>
.card {
  position: relative;
  border: 2px solid var(--black);
  filter: var(--shadow);
}

.category {
  position: absolute;
  right: 0px;
  top: 0px;
  background: white;
  border-bottom: 2px solid var(--orange);
  padding: 10px 20px;
}

.img,
.seen,
.time {
  gap: 5px;
  display: flex;
  align-items: center;
}

.pic {
  width: 100%;
  height: 540px;
  object-fit: cover;
  object-position: top center;
  border-bottom: 2px solid black;
}

.seen,
.time {
  opacity: 0.6;
}

.content {
  background: transparent;
  padding: 20px;
  width: 100%;
  color: black;
}

.txt {
  font-size: var(--30px);
  font-weight: 600;
  line-height: 44px;
}

.link {
  color: black;
}

.link:hover {
  color: black;
}

.mid {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 0 10px 0;
}

.btn {
  background: var(--orange);
  color: white;
  font-size: var(--12px);
  /* width: 240px; */
  padding: 1rem 60px;
  border-radius: 0;
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  position: relative;
  box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
}

.btn:hover img {
  transform: rotate(0deg);
}

.btn:focus {
  box-shadow: none;
}

.contact-box {
  display: flex;
}

.input {
  font-size: 15px;
  line-height: 22px;
  color: #010e38;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
}

.input:focus {
  outline: none;
}

.btnSend {
  color: white;
  font-size: 15px;
  line-height: 22px;
  max-width: 200px;
  padding: 16px 20px;
  border-radius: 0px !important;
  background: #ff6300;
  box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
}

.href {
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
}

@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 30px;
  }
}

@media screen and (max-width: 700px) {
  .contact-box {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  .btnSend {
    color: white;
    font-size: 15px;
    line-height: 22px;
    padding: 16px 24px;
    border-radius: 0px !important;
    background: #ff6300;
    margin: 0;
    box-shadow: 0px 10px 20px rgba(255, 99, 0, 0.1);
  }
}</style>
