<template>
    <div v-if="loading">
        <v-card elevation="0" width="100%" height="100%"> 
            <v-card-text>
                <v-row justify="center">
                    <v-img width="100" height="100" contain src="/aftim.png"></v-img>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start() {
                this.loading = true
            },
            finish() {
                this.loading = false
            }
        }
    }
</script>
