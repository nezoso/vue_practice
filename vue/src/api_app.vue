<template>
	<div id='app'>
		<button @click='count++'>{{ count }}</button>
		<p>{{ title }}</p>
		<input type="checkbox" name="checkbox" v-model='checked'>
		<button @click="checked =! checked">toggle</button>
	</div>
</template>

<script setup>
	import {ref} from 'vue';


	const count = ref(0);
	const title = ref('this is title');
	const checked = ref(true);
	console.log(title.value);



</script>