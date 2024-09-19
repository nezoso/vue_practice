<template>
	
	<div @click="checkProps"> this is local component </div>
	<div @click="$emit('someEvent')"> custom event </div>
	<slot name='slot_name' />
	<div style='width:100%;color:red' v-for="(list , index) in array_list">
		
		<span>{{ list.name }}</span>____
		<span>{{ list.age }}</span>____
	</div>
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
		inject:['array_list'],
		data(){
			return {

			}
		},

		created(){
			console.log(this.title);
			console.log(this.array_list);
		},
		computed:{
			checkProps(){
				console.log(this.products);	
			},
			
		},

		
	}
</script>