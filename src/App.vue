<template>
  <div id="app">
    <div>
     <img class="img-responsive" src="@/hinhanh/logo.png">
    </div>
    <router-view/>
    <div>      
              <v-footer padless>
              <v-col 
              class="text-center"
              cols="12">           
              <strong>{{ new Date().getFullYear() }}-CÔNG NGHỆ THÔNG TIN</strong>
              </v-col>
            </v-footer>
    </div>
  </div>
</template>

<style>
</style>
