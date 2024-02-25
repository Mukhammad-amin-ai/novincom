<template>
    <PageHeader :title="pageTitle" :subtitle="category" />
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Главная</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/shop/sidebar/list">Личный кабинет</router-link>
                </li>
                <li class="breadcrumb-item active">
                    <router-link to="/shop/sidebar/list">Операции</router-link>
                </li>
                <!-- <li class="breadcrumb-item ">{{ pageTitle }}</li> -->
                <li class="breadcrumb-item" v-if="$route.query.searchTerm">
                    <span>Search - {{ $route.query.searchTerm }}</span>
                </li>
            </ol>
        </div>
    </nav>
    <div class="container">
        <div class="search-city" @click="showSearch">
            <div class="search">
                <img src="../assets/newImg/icons/search2.svg" alt="">
            </div>
            <div class="result">
                <span>
                    01.12.2023 –20.12.2023
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import PageHeader from '@/components/elements/PageHeader.vue';

</script>

<style scoped>
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

</style>