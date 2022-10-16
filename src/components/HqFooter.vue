<template>
  <footer>
    <div>
      <span>&copy; Simon Barth, 2022</span>
      <a href="https://github.com/Data5tream/hq-invoice" target="_blank" rel="nofollow">Github</a>
      <span>Licensed under GNU AGPLv3</span>
    </div>
    <span>v0.1.0</span>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--mdc-theme-on-primary);
  background: var(--mdc-theme-primary);
  height: 64px;
  padding: 16px 32px;
}
footer > div > * {
  padding: 0 8px;
  border-right: 1px solid var(--mdc-theme-on-primary);
}
footer > div > *:first-child {
  padding-left: 0;
}
footer > div > *:last-child {
  border-right: 0;
}

a,a:visited {
  color: var(--mdc-theme-on-primary);
}
</style>
