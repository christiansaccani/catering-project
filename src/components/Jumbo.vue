<template>
    <div class="jumbo">
        <div class="jumbo-container">
            <img src="@/assets/jumbo.jpg" alt="Jumbo Image" class="jumbo-image" />
        </div>
    </div>
</template>

<script setup>
</script>
  
<style lang="scss" scoped>

    .jumbo {
    width: 100%;
    margin: 64px auto 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eae8d8;
    width: 100%;

        .jumbo-container {
            max-width: 1400px;
            width: 100%;
            padding: 1.5rem 1rem;

            @media (min-width: 1200px) {
                padding: 4rem 2rem;
            }
        }

    .jumbo-image {
        width: 100%;
        height: auto;
        max-height: 500px;
        object-fit: cover;
        border-radius: 24px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

        @media (min-width: 1400px) {
        border-radius: 36px;
        }
    }
}
</style>
