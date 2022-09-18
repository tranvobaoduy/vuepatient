<template>
    <v-card
    elevation="2"  >      
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="-1"  
        :dismissible="true"        
        class="elevation-1"      
         
    ></v-data-table>   
  </v-card>
</template>
<script>
import factory from '@/server/factory.js';
const api01 = factory.get('api01');
export default {
    data() {
        return {
            headers: [],
            desserts:[],
        }
    },
    created () {
        var seft=this;
        seft.lay_ds_luotkham();
    },
    
    methods: {
        lay_ds_luotkham() {
            var seft=this;
            api01.lay_ds_luotkham().then(response=>{
                console.log(response);
                seft.headers=[
         { text: 'TÊN KHOA PHÒNG', value: 'TENKP', class: "primary white--text" ,width:"40"},
                    { text: 'TỔNG SỐ', value: 'TS', class: "primary white--text" ,width:"10"},
                    { text: 'XÉT NGHIỆM', value: 'XN', class: "primary white--text" ,width:"40"},
                    { text: 'CDHA', value: 'CDHA', class: "primary white--text" ,width:"40"},
                    { text: 'CẤP TOA', value: 'CAPTOA', class: "primary white--text" ,width:"40"},              
                ];
                if(response.data.success){
                    seft.desserts=response.data.data;
                }
            }).catch();
        }
    },
}
</script>

<style>

</style>

