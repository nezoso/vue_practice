<template>
  <div v-for="(list , index) in helloWord_data">
    <a href="" style='color:pink;'>{{ list.user }}</a>*****
    <a href="" style='color:red'>{{ list.permission }}</a>****
    <a href="" style='color:darkgray;'>{{ list.authrized }}</a>*****
  
    <button  @click="$emit('custom_event_2','data1','data2')">click to create emit</button>
    <span @click="$emit('show_data_emit',100,list.user)">click me to show</span>
    <button @click="$emit('delete_event',index)">delete record</button>


  </div>
  
</template>

<script>


export default {
  
  inject:['helloWord_data'],

  data()
  {
    return {

    }
  },
  emits:['show_data_emit','custom_event_2','delete_event'],
  methods:{
    // change_color(){
    //   this.$emit('new_event_custom',23,'mehdi');
    // },
    // show_data()
    // {
    //   ;
    // },
  },
  created(){
    console.log(this.helloWord_data);
  }
}

</script>
