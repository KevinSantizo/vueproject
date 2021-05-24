<template>
    
    <v-app>
    <v-chip
      class="font-weight-bold pl-10 pr-10 pt-5 pb-5 title"
      color="#8DDAFC"
      text-color="white"
    >
    {{label}}
    </v-chip>
    </v-app>
</template>


<script>
export default {
    data() {
        return {

        }
    },

    props: ['label']
}
</script>