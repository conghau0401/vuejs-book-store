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
          name: "English learning book 01",
          image: "https://oup.com.pk/pub/media/catalog/product/cache/59fe44b3394075aec184fe835a9882ed/9/7/9780199061068.jpg",
          code: "3JJF",
          price: 12000,
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam"
        },
        {
          name: "English learning book 02",
          image: "https://oup.com.pk/pub/media/catalog/product/cache/59fe44b3394075aec184fe835a9882ed/9/7/9780199061082.jpg",
          code: "5CF1",
          price: 17000,
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam"
        },
        {
          name: "English learning book 03",
          image: "https://m.media-amazon.com/images/I/41-b1prXYYL.jpg",
          code: "DXYZ",
          price: 23000,
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
