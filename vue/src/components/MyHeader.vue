<template>
	<div style='width:100%;color:red' >
		this is another component
		<div v-for="(list , index) in home_list">
			<a href=""> {{list.product}}___</a>
			<a href="">{{ list.category }}___</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		inject : ['home_list'],
		data(){
			return {

			}
		},
		
	}
</script>