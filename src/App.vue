<template>
  <div id="app">
    <Header />
    <div id="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    color: #333;
    font-size: 14px;
    min-width: 1000px;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0 auto;
    padding-bottom: 100px;
  }
  img {
    width: 100%;
    height: auto;
  }
  #main {
    margin: 30px 0;
  }
  .inner {
    width: 1000px;
    margin: 0 auto;
  }
  header {
    background: #000;
    padding: 10px 0;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-header {
      width: 35px;
    }
    nav {
      width: calc(100% - 65px);
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          margin: 0 20px;
          font-size: 20px;
          position: relative;
          &:last-child {
            &:after {
              display: none;
            }
          }
          &:after {
            position: absolute;
            content: "";
            height: 20px;
            width: 1px;
            background: rgba(255, 255, 255, 0.2);
            top: 50%;
            right: -20px;
            transform: translateY(-50%);
          }
          a {
            text-decoration: none;
            color: #b8b8b8;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  footer {
    background: #000;
    color: #fff;
    padding: 10px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  @media only screen and (max-width: 992px) {
    body {
      min-width: 100%;
    }
    .inner {
      width: 100%;
    }
    header {
      padding: 2vw 2vw;
      .logo-header {
        width: 12%;
      }
      nav {
        width: 80%;
        ul {
          justify-content: flex-end;
          li {
            font-size: 3.75vw;
            margin: 0 4vw;
            &:after {
              right: -4vw;
            }
          }
        }
      }
    }
  }
</style>
