<template>
  <div>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>{{ info.bill | currency('RUB') }}</h4>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">Категорий нет.
      <router-link to="/categories">Добавить новую категорию</router-link>
    </p>

    <section v-else>
      <div v-for="category of categories" :key="category.id">
        <p>
          <strong>{{ category.title }}:</strong>
          {{ category.spend | currency }} из {{ category.limit | currency }}
        </p>
        <div class="progress">
          <div
              class="determinate green"
              :class="[category.progressColor]"
              :style="{ width: category.progressPercent }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'planning',
    data: () => ({
      loading: true,
      categories: []
    }),
    computed: {
      ...mapGetters([
              'info'
      ])
    },
    async mounted() {
      const records = await this.$store.dispatch('fetchRecords');
      const categories = await this.$store.dispatch('fetchCategories');

      this.categories = categories.map(category => {
        const spend = records
          .filter(r => r.categoryId === category.id)
          .filter(r => r.type === 'outcome')
          .reduce((total, record) => {
            return total += +record.amount;
          }, 0);

        const percent = 100 * spend / category.limit;
        const progressPercent = percent > 100 ? 100 : percent;
        const progressColor = percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red';

        return {
          ...category,
          spend,
          progressPercent,
          progressColor
        }
      });

      this.loading = false;
    }
  }
</script>
