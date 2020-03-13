<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <home-bill></home-bill>
      <home-currency></home-currency>
    </div>
  </div>
</template>

<script>
  import HomeBill from "../components/HomeBill";
  import HomeCurrency from "../components/HomeCurrency";

  export default {
    name: 'home',
    data: () => ({
      loading: true,
      currency: null
    }),
    components: {
      HomeBill,
      HomeCurrency
    }
  }
</script>
