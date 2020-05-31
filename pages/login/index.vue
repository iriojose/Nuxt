<template>
    <v-card width="100%" elevation="0" color="#1f3b63" height="1200">
        <v-card-actions class="mx-5">
            <v-btn fab small color="#2950c3">
                <v-icon color="#fff">mdi-home</v-icon>
            </v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <!--v-img class="hidden-sm-and-down" contain width="100" height="50" :src="require('@/assets/logo 6.png')"></v-img-->
            <v-spacer></v-spacer>
            <v-btn rounded color="#2950c3" class="text-capitalize white--text caption">
                ¿Olvido su contraseña?
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <v-row justify="space-around" class="py-2">
                <v-col cols="12" md="9" sm="12" :class="$vuetify.breakpoint.smAndDown ? 'mx-4':null">
                    <v-row justify="center" class="pb-4 hidden-sm-and-up">
                        <!--v-img contain width="100" height="50" :src="require('@/assets/logo 6.png')"></v-img-->
                    </v-row>
                    <v-card width="100%" elevation="0">
                        <v-row justify="center">
                            <v-col cols="12" md="6" class="hidden-sm-and-down">
                                <!--v-img width="100%" height="400" contain :src="require('@/assets/undrawlogin.svg')"></v-img-->
                            </v-col>
                            <v-col cols="12" md="6" sm="12" class="pa-12">
                                <div class="headline text-center mb-5">Inicia sesión ahora!</div>
                                
                                <!--v-card elevation="0" height="50">
                                    <v-fade-transition>
                                        <v-alert dense :type="type" v-show="showMessage">
                                            {{mensaje}}
                                        </v-alert>
                                    </v-fade-transition> 
                                </v-card-->
                                
                                <v-form v-model="valid" @submit.prevent="">
                                    <v-text-field
                                        filled
                                        rounded
                                        :disabled="loading"
                                        v-model="data.user"
                                        single-line
                                        dense
                                        color="#0f2441"
                                        label="Ingrese correo electrónico"
                                    >
                                        <!--template v-slot:append>
                                            <v-fade-transition leave-absolute>
                                                <v-progress-circular
                                                    v-if="loading2"
                                                    size="24"
                                                    color="#0f2441"
                                                    indeterminate
                                                ></v-progress-circular>
                                                <img v-else width="24" height="24" :src="require('@/assets/logo 3.png')">
                                            </v-fade-transition>
                                        </template-->
                                    </v-text-field>

                                    <v-text-field
                                        filled
                                        rounded
                                        dense
                                        :disabled="loading"
                                        v-model="data.password"
                                        single-line
                                        type="password"
                                        color="#0f2441"
                                        label="Contraseña"
                                    ></v-text-field>

                                    <v-btn
                                        rounded color="#2950c3"
                                        block
                                        :loading="loading" height="40"
                                        :disabled="!valid"
                                        
                                        class="text-capitalize caption white--text"
                                    >
                                        Iniciar sesión
                                    </v-btn>
                                </v-form>

                                <v-divider class="my-10"></v-divider>

                                <div class="subtitle-2 text-center color">¿No tienes una cuenta? ¡Registrate!</div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>

        <v-footer fixed class="font-weight-medium" elevation="2">
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Hoyprovoca</strong> 
            </v-col>
        </v-footer>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                valid:false,
                loading:false,
                loading2:false,
                data:{
                    user:'',
                    password:''
                },
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>