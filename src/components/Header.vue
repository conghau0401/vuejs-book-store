<template>
  <header>
    <div class="inner flex">
      <div class="logo-header">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Vue logo" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="product-detail">A popup component</router-link>
          </li>
          <li>
            <router-link to="list-product">2 parents components</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
