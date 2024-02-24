<template>
    <PageHeader :title="pageTitle" :subtitle="category" />
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Главная</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/shop/sidebar/list">Путешествия</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/shop/sidebar/list">Авиабилеты</router-link>
                </li>
                <li class="breadcrumb-item active">
                    <router-link to="/shop/sidebar/list">Результаты поиска авиабилетов</router-link>
                </li>
                <!-- <li class="breadcrumb-item ">{{ pageTitle }}</li> -->
                <li class="breadcrumb-item" v-if="$route.query.searchTerm">
                    <span>Search - {{ $route.query.searchTerm }}</span>
                </li>
            </ol>
        </div>
    </nav>
    <div class="container">
        <div class="search-city">
            <div class="search">
                <img src="../assets/newImg/icons/search2.svg" alt="">
            </div>
            <div class="result">
                <span style="display: flex; gap: 7px;">
                    Волгоград
                    <img src="../assets/newImg/icons/arrows.svg" alt="">
                    Москва ,
                </span>
                <span>
                    7 фев – 10 фев,
                </span>
                <span>
                    1 пасс, любой
                </span>
            </div>
        </div>
        <div class="serach-result-field">
            <ticket />
            <ticket />
            <ticket />
        </div>
    </div>
    <div class="filter">
        <button class="filter-btn">
            <img src="../assets/newImg/icons/filter.svg" alt="">
            Фильтры и сортировка
        </button>
    </div>
</template>
<script>
import PageHeader from '@/components/elements/PageHeader.vue';
import ticket from '@/components/elements/flights/ticket-items.vue'
export default {
    components: {
        PageHeader,
        ticket
    },
    data() {
        return {
            category: ""
        }
    },
    created() {
        this.category = this.$route.query.category;
        this.$watch(
            () => this.$route.query.category,
            (newCategory) => {
                this.category = newCategory;

            }
        );
    },
}

</script>
  
<style scoped>
.filter {
    width: 100%;
    height: 54px;
    background-color: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.search-city {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EBEBEB;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: .5rem;
}

.search-city:hover {
    background-color: #EBEBEB;
}

.search {
    width: 20%;
    height: 100%;
}

.result {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    gap: 5px;
}

.serach-result-field {
    width: 100%;
    height: auto;
    margin: 50px 0;
}

.filter-btn {
    width: 220px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Gilroy-SemiBold !important;
    font-size: 16px;
}
</style>