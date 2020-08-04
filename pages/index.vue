<template>
	<div>
		hola
		<v-row justify="center">
            <v-img width="100" height="100" contain src="/aftim.png"></v-img>
        </v-row>
	</div>
</template>

<script>
import Conceptos from '~/services/Conceptos';

	export default {	
		head: {
			//titleTemplate: "E-commerce",
			title: "Hoyprovoca",
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content:'' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/icono.ico' }
			]
		},
	}
</script>