<template>
  <div class="inner">
    <h1>List Product</h1>
    <programming-book title="Programming books"></programming-book>
    <english-book title="English learning book"></english-book>
  </div>
</template>

<script>
  import ProgrammingBook from "@/components/ProgrammingBook.vue";
  import EnglishBook from "@/components/EnglishBook.vue";
  export default {
    components: {
      ProgrammingBook,
      EnglishBook
    }
  };
</script>

<style lang="scss">
  @media only screen and (max-width: 767px) {
    .inner {
      width: 94%;
    }
    .box-product {
      .ar-product {
        width: 100%;
        .img-product {
          height: auto;
        }
      }
    }
  }
</style>
