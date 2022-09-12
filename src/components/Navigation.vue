<template>
    <ul class="nx-navigation">
      <router-link :to="{name:'home'}" custom v-slot="{ href, navigate, isActive, isExactActive }">
        <li id="dashboard-link" :class="{ 'uk-active active': isActive, 'uk-active active': isExactActive }">
          <a :href="href" @click="navigate">
            <font-awesome-icon icon="grip" class="menu-icon"/>
            <span class="uk-text-truncate">Dashboard</span></a>
        </li>
      </router-link>
      <router-link :to="{name:'players'}" custom v-slot="{ href, navigate, isActive, isExactActive }">
        <li id="dashboard-link" :class="{ 'uk-active active': isActive, 'uk-active active': isExactActive }">
          <a :href="href" @click="navigate">
            <font-awesome-icon icon="users" class="menu-icon"/>
            <span class="uk-text-truncate">Players</span></a>
        </li>
      </router-link>
      <router-link :to="{name: 'about'}" custom v-slot="{ href, navigate, isActive, isExactActive }">
        <li id="dashboard-link" :class="{ 'uk-active active': isActive, 'uk-active active': isExactActive }">
          <a :href="href" @click="navigate">
            <font-awesome-icon icon="question-circle" class="menu-icon"/>
            <span class="uk-text-truncate">About</span></a>
        </li>
      </router-link>
      <router-link :to="{name: 'grid'}" custom v-slot="{ href, navigate, isActive, isExactActive }">
        <li id="dashboard-link" :class="{ 'uk-active active': isActive, 'uk-active active': isExactActive }">
          <a :href="href" @click="navigate">
            <font-awesome-icon icon="users" class="menu-icon"/>
            <span class="uk-text-truncate">Grid</span></a>
        </li>
      </router-link>
    </ul>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="less" scoped>

.nx-navigation {
  position: relative;

  > li {

  }

  .nx-navigation .uk-active a span {
    color: #fff;
  }
}
</style>