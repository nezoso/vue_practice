<template>
	
	<div @click="checkProps"> this is local component </div>
	<div @click="$emit('someEvent')"> custom event </div>
	<slot name='slot_name' />
</template>

<script>
	export default {
		//props:['items','products','title'],
		props:
			{
				items : {
							type:Array,
							required:true,
						},
						products : {
							type:Array,
							required:false,
						},
						title: {
							type:String,
							required:false,
						},
			},
		
		data(){
			return {

			}
		},

		created(){
			console.log(this.title);
		},
		computed:{
			checkProps(){
				console.log(this.products);	
			},
			
		},

		
	}
</script>