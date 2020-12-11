<template>
  <div id="modal" v-if="showModal">
    <transition name="fade" appear>
      <div class="modal-overlay" @click="closeModal"></div>
    </transition>
    <transition name="fade" appear>
      <div class="product-detail">
        <div class="icon-close" @click="closeModal">&#x2715;</div>
        <div class="image">
          <img :src="data.image" :alt="data.name" />
        </div>
        <div class="product-info">
          <h1 class="title">{{ data.name }}</h1>
          <dl>
            <dt>Product code :</dt>
            <dd>{{ data.code }}</dd>
          </dl>
          <dl>
            <dt>Price :</dt>
            <dd class="price">&#165;{{ data.price | formatPrice }}</dd>
          </dl>
          <div class="description">
            {{ data.description }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ["data", "showModal"],
    methods: {
      closeModal() {
        this.$emit("status", false);
      }
    },
    filters: {
      formatPrice(price) {
        return new Intl.NumberFormat().format(price);
      }
    }
  };
</script>

<style lang="scss">
  #modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    .product-detail {
      display: flex;
      background: #fff;
      width: 45%;
      height: auto;
      margin: 0 auto;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 30px;
      z-index: 2;
      .icon-close {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        background: #000;
        position: absolute;
        right: -10px;
        top: -10px;
        cursor: pointer;
      }
      .image {
        width: 30%;
      }
      .product-info {
        width: 70%;
        text-align: left;
        padding-left: 40px;
        dl {
          display: flex;
          font-size: 16px;
          dt {
            width: 30%;
          }
          dd {
            width: 70%;
            margin: 0;
            font-weight: bold;
            &.price {
              color: red;
            }
          }
        }
        .description {
          text-align: justify;
          font-size: 16px;
        }
      }
    }
  }
  .modal-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @media only screen and (max-width: 767px) {
    #modal .product-detail {
      width: 80%;
      display: block;
      overflow-y: scroll;
      height: auto;
      padding: 20px;
      .image {
        width: 50%;
        margin: 0 auto;
      }
      .icon-close {
        right: 0;
        top: 0;
      }
      .product-info {
        width: 100%;
        margin: 0 auto;
        padding-left: 0;
        h1.title {
          font-size: 20px;
          margin: 10px 0 5px;
        }
        dl {
          margin: 10px 0;
          font-size: 16px;
          dt {
            width: 35%;
          }
          dd {
            width: 65%;
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
