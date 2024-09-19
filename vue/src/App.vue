<!-- 
import { createApp } from 'vue';
import App from './App.vue';
import MyGlobalComponent from './components/MyGlobalComponent.vue';

const app = createApp(App);
app.component('MyGlobalComponent', MyGlobalComponent); 
const mountedApp = app.mount('#app'); -->
<template>


      <HelloWorld @delete_event='delete_single' @show_data_emit="emit_show_data" @custom_event_2="emit_event_method"/>
      <MyComponent />
      <MyHeader />
      <input :class="ObjClass" name="empty_input" v-model="get_input_value" @click="getValue()" />
      <span>{{get_input_value}}</span>

      <textarea v-model='textarea' style="width:100%"></textarea>

      <input type="checkbox" name="checkbox" value='mehdi' v-model="checked" @click='checked_box' style="width:100%" />
      <input type="checkbox" name="checkbox" value='mehdi2' v-model="checked" @click='checked_box' style="width:100%" />
      <input type="checkbox" name="checkbox" value='mehdi3' v-model="checked" @click='checked_box' style="width:100%" />
      <p>{{checked}}</p>

      <input type="radio" name="first" value='first' v-model='radio_number'>
      <input type="radio" name="twin" value='twin' v-model='radio_number'>
      <p>{{ radio_number }}</p>
        <select v-model="selected" :multiple="multiple" >
          <option v-for="item in options"  :value="item.value" ref='select_ref'>{{item.text}}</option>
          
        </select>
        <p>{{ selected }}</p>
      <form>
            <div>
              <label for='email'>Email</label>
              <input type="email" v-model="email[0]" name="email" @click="showSome">
            </div>
            <div>
              <label for='password'>Password</label>
              <input type="password" name="password" v-model='password'>
            </div>
            <ul>
              <li @click='addToEmailBox(index)' v-for="(item , index) in list" :key='index'>
                <a >count : ... {{index}} email : {{item.name}} & </a>
                <a>__hashedCode:{{item.hashed_code}} && <hr/></a>
                <div v-for =" (product , index2) in item.products">
                  <a href="" style='color :lightcoral;'>{{ product.phone1 }}</a> ___&&&&___
                  <a href="" style="color:lightgreen;">{{ product.phone2 }}</a>

                    <div v-for='(img , index4) in product.gallery'>
                      <a href="">{{ img.image1 }}</a>___&&&&___
                      <a href="">{{ img.image2 }}</a>___&&&&______&&&&___
                      <a href="">{{ img.image3 }}</a>___&&&&___
                    </div>
                </div>
                <div v-for="(cat , index3) in item.category">
                  <a href=""  style="color:lightgreen;"> {{ cat.category_1 }} </a> ___&&&&___
                  <a href="" style="color:lightgreen;"> {{ cat.category_2 }} </a> ___&&&&___
                  <a href="" style="color:lightgreen;"> {{ cat.category_3 }} </a> ___&&&&___

                </div>

              </li>
            </ul>
            
      </form>

      <input ref="ref_name" style="display: block;">
      <span @click='loop_list'>click here</span>
      <MyLocalComponent title="this is title" :products="products" :items="items">
          slot test/ slot test slot test slot test slot test slot test slot test
          <template #slot_name><div style="color:blue">this is consist of name</div></template>
      </MyLocalComponent>

</template>

<script>

  import MyLocalComponent from './components/MyLocalComponent.vue';
  import HelloWorld from './components/HelloWorld.vue';

 export default{
   components : {
      MyLocalComponent,
      HelloWorld
    },
    // provide:{
    //   array_list : [{name:'mehdi',age:'24'},{name:'mehdi',age:'25'}],
    //   home_list : [{product:'apple',category:'phone'},{product:'laptop',category:'technology'}],
      // helloWord_data : [{user:'admin',permission:'admin',authrized:'true'}
      //                   ,{
      //                     user:'staff',permission:'staff',authrized:'false'
      //                   },{
      //                     user:'user',permission:'none',authrized:'none'
      //                   }],

    // },data in provide:{} is not chage_able for update
    provide(){
      return {
        array_list : [{name:'mehdi',age:'24'},{name:'mehdi',age:'25'}],
         home_list : [{product:'apple',category:'phone'},{product:'laptop',category:'technology'}],
          helloWord_data : [{user:'admin',permission:'admin',authrized:'true'}
                        ,{
                          user:'staff',permission:'staff',authrized:'false'
                        },{
                          user:'user',permission:'none',authrized:'none'
                        }],

      }
    },
  data()
  {

    return {

      items : ['title','two','three','four'],
      products : ['pro_one','pro_two','pro_three','pro_four'],

      //
      get_input_value : 'fill here',
      textarea : 'this is for indroduction',
      checked : [],
      radio_number:[],
      selected:[],
      options:[{text:'one',value:'a'},{text:'text_v',value:'v'},{text:'text_two',value:'b'}],

      //computed 
        new_input:'',

      //forEach Array
      array_list :[
        {name:'mehdi',last_name:'nezoso',city:'okimenso'},
        {name:'mehdi1',last_name:'nezoso1',city:'okimenso1'},
        {name:'mehdi2',last_name:'nezoso2',city:'okimenso2'},
        {name:'mehdi3',last_name:'nezoso3',city:'okimenso3'},
      ],


      //bind class
      ObjClass : {
        active:true,
        'text-danger':false,
      },

      


      email : [],
      password : null,
      array : [{'one':'two'}],
      list : [
        {hashed_code :'hashed_four' ,name:'email123@gmail.com',products:[{phone1:'sumsong',phone2:'apple',gallery:[{image1:'image1',image2:'image2',image3:'image3'}]}],category :[{category_1:'mobiles',category_2:'laptop',category_3:'cars'}]},

        {hashed_code:'hashed_one',name:'email5654@gmail.com',products:[{phone1:'somsung2',phone2:'apple2',gallery:[{image1:'image1',image2:'image2',image3:'image3'}]}],category :[{category_1:'mobiles',category_2:'laptop',category_3:'cars'}]},

        {hashed_code :'hashed_five',name:'email643@gmail.com',products:[{phone1:'hawayi',phone2:'asuss',gallery:[{image1:'image1',image2:'image2',image3:'image3'}]}],category :[{category_1:'mobiles',category_2:'laptop',category_3:'cars'}]},

        {hashed_code:'hashed_two',name:'email222@gmail.com',products:[{phone1:'accer',phone2:'shinobia',gallery:[{image1:'image1',image2:'image2',image3:'image3'}]}],category :[{category_1:'mobiles',category_2:'laptop',category_3:'cars'}]},

        {hashed_code :'hashed_six' ,name:'email4444@gmail.com',products:[{phone1:'illumi',phone2:'killomi',gallery:[{image1:'image1',image2:'image2',image3:'image3'}]}],category :[{category_1:'mobiles',category_2:'laptop',category_3:'cars'}]},

        {hashed_code : 'hashed_three',name:'email777@gmail.com',products:[{phone1:'hetome',phone2:'feemosi',gallery:[{image1:'image1',image2:'image2',image3:'image3'}]}],category :[{category_1:'mobiles',category_2:'laptop',category_3:'cars'}]},
      ]
    }
  },

  // mounted(){
  //   this.selected.push(this.$refs.select_ref);
  //   console.log(this.selected);
  // },
  methods : {

          emit_test(data)
          {
            alert(data);
          },

          get_ref_input()
            {
              this.$ref.ref_name.focus();
            },
          showSome(){

             console.log(this.list);
          },
          addToEmailBox(ind){
                console.log(this.list[ind].products);
            },
          loop_list(){
              const new_name = ['one','two','three'];
              this.array_list.forEach((item,index)=>{
                if(index==2) {
                 // new_name.push(item.name);
                  // new_name.reverse();
                 // new_name.shift();
                   // new_name.unshift();
                   // new_name.sort();
                   new_name.splice();
                  console.log(new_name);
                }
                else if(index==1){console.log('two');}

              });
          },

          getValue()
          {
             
              // console.log(event.target.name);
              // console.log(event.target.tagName);
              // console.log(`hello ${name}`);
              if(event)
              {
                // warn('Form cannot be submitted yet.', event);
                // let name = event.target.value;
                 console.log(this.get_input_value);
              }
          },
          checked_box()
            {
                console.log(this.checked);
            },
          emit_event_method(name,val){
              console.log(name,val);
          },
          emit_show_data(val,name)
          {
            console.log(val,name);
          },
          delete_single(id)
          {
            console.log(id);
          }
      },
}
   
</script>
