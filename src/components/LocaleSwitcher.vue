<template>
  <li class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  </li>
</template>

<style lang="scss">
.locale-switcher {
  list-style: none;
}
select {
  background: transparent;
  border: none;
  text-transform: uppercase;
}
.scrolled-nav select {
  color: #2c3e50 !important;
  top: 27px;
}
</style>
