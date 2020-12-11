<template>
  <div id="product-detail">
    <h1 class="title-page">Product</h1>
    <div class="col-product">
      <div class="img-product">
        <img :src="product.image" :alt="product.name" />
      </div>
      <h3 class="name-product">{{ product.name }}</h3>
      <div class="button-detail" @click="openModal">View details</div>
    </div>
    <modal
      :data="product"
      :show-modal="showModal"
      v-on:status="resultStatus">
    </modal>
  </div>
</template>

<script>
  import Modal from "@/components/Modal.vue";
  export default {
    components: {
      Modal
    },
    data() {
      return {
        showModal: false,
        product: {
          name: "Name product",
          image: "https://images-na.ssl-images-amazon.com/images/I/61HEMOo48hL.jpg",
          code: "3JJF",
          price: 10000,
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam"
        }
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      resultStatus(status) {
        this.showModal = status;
      }
    }
  };
</script>

<style lang="scss">
  #product-detail {
    .col-product {
      width: 400px;
      margin: 0 auto;
      .img-product {
        border: 1px solid #ebebeb;
      }
      h3.name-product {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .button-detail {
      background: red;
      color: #fff;
      display: inline-block;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 16px;
      &:hover {
        opacity: 0.7;
        transition: all 0.3s;
      }
    }
  }
</style>
