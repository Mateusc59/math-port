<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  </div>
</template>

<style lang="scss">
select {
  background: transparent;
  position: absolute;
  top: 30px;
  right: -120px;
  border: none;
  color: y;
}
.scrolled-nav select {
  color: #2c3e50 !important;
  top: 27px;
}
</style>
