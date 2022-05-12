<template>
  <div class="footer">
    <div class="footer-content">
      <div class="column1">
        <p>&copy; <strong>Samidex</strong></p>
      </div>
      <div class="column2">
        <p>| Desafio para <strong>2WO Labs</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #cc0000;
}
.footer-content {
  padding: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.column2 {
  margin-left: -26rem;
}

p {
  text-align: center;
}

@media only screen and (max-width: 568px) {
  .column2 {
    margin-left: 0;
  }
}
</style>