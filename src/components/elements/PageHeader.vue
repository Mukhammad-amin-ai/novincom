<template>
    <div class="page-header text-center" style="background-image:url(/assets/images/bg-header.png) !important">
        <div class="container">
            <h1 class="page-title">
                {{ subtitle }}
                <!-- <span v-if="subtitle">{{ subtitle }}</span> -->
                <span>Товары</span>
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: String
    }
};
</script>