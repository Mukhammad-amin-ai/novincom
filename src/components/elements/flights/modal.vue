<template>
    <div class="modal-popup">
        <div class="modal-flight">
            <div class="top-modal-flight">
                <h3>Фильтры и сортировка</h3>
                <button class="close-modal">
                    <img src="../../../assets/newImg/icons/modal-close.svg" alt="modal">
                </button>
            </div>
            <div class="cities">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.modal-popup{
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.10);
    position:fixed;
    z-index: 9999;
}

.modal-flight{
    width: 580px;
    height: 700px;
    background-color: #fff;
    border-radius: 12px;
}

.top-modal-flight{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
}

.top-modal-flight h3{
    font-family: Gilroy-SemiBold !important;
    font-size: 20px;
}
.close-modal{
    background-color: transparent;
    border: none;
}
</style>