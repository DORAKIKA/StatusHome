<script setup>
const props = defineProps({
    footer: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <footer id="footer">
        <div class="footer-links card">
            <a :href="item.link" class="footer-link" v-for="item in props.footer">
                {{item.name}}
            </a>
        </div>
    </footer>
</template>

<style scoped>
#footer{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 1rem;
}
.footer-links{
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}
.footer-link{
    color: inherit
}
</style>