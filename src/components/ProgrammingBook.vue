<template>
  <div>
    <h2 class="list-title">{{ title }}</h2>
    <div class="box-product">
      <div class="ar-product" v-for="(item, key) in products" :key="key">
        <div class="img-product">
          <img :src="item.image" :alt="item.name" />
        </div>
        <h3 class="name-product">{{ item.name }}</h3>
        <div class="button-product" @click="openModal(item)">View details</div>
      </div>
    </div>
    <modal :data="data" :show-modal="showModal" v-on:status="resultStatus">
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  props: ["title"],
  data() {
    return {
      showModal: false,
      data: [],
      products: [
        {
          name: "Programming books 01",
          image: "https://images-na.ssl-images-amazon.com/images/I/61HEMOo48hL.jpg",
          code: "DXYZ",
          price: 35000,
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam"
        },
        {
          name: "Programming books 02",
          image: "https://m.media-amazon.com/images/I/51IhMFUnfBL.jpg",
          code: "3JJF",
          price: 15000,
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam"
        },
        {
          name: "Programming books 03",
          image: "https://images-na.ssl-images-amazon.com/images/I/512otgDIiKL.jpg",
          code: "5CF1",
          price: 25000,
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam"
        }
      ]
    };
  },
  methods: {
    openModal(item) {
      this.data = []
      this.data.push(item)
      this.data = this.data[0]
      this.showModal = true
    },
    resultStatus(status) {
      this.showModal = status
    }
  }
};
</script>

<style lang="scss">
h2.list-title {
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}
.inner {
  width: 1000px;
  margin: 0 auto;
}
.box-product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.ar-product {
  width: 30%;
  border: 1px solid #e0e0e0;
  padding-bottom: 20px;
  box-shadow: 0 12px 10px -8px rgba(0, 0, 0, 0.2);
  .img-product {
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .button-product {
    background: #41b883;
    color: #fff;
    display: inline-block;
    padding: 7px 13px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
}
</style>
