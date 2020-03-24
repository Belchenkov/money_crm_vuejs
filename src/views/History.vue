<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      Записи отсутствуют
      <router-link to="/record">Добавить запись</router-link>
    </p>

    <section v-else>
      <history-table :records="records" />

      <Paginate
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
        prev-text="Назад"
        next-text="Вперед"
        v-model="page"
      />

    </section>
  </div>
</template>

<script>
  import HistoryTable from "../components/HistoryTable";
  import paginationMixin from '../mixins/pagination.mixin';

  export default {
    name: 'history',
    data: () => ({
      loading: true,
      records: []
    }),
    mixins: [
      paginationMixin
    ],
    components: {
      HistoryTable
    },
    methods: {},
    async mounted() {
      this.records = await this.$store.dispatch('fetchRecords');
      const categories = await this.$store.dispatch('fetchCategories');

      this.setupPagination(this.records = this.records.map(record => {
        return {
          ...record,
          categoryName: categories.find(c => c.id === record.categoryId).title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход'
        }
      }));

      this.loading = false;
    }
  }
</script>
