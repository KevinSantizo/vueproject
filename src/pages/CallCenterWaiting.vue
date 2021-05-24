<template>
  <v-app  style="
    background: #E5FAFF;
    background: -webkit-linear-gradient(to right, #E5FAFF, #D7ECFF, #E5FAFF);
    background: linear-gradient(to right, #E5FAFF, #D7ECFF, #E5FAFF);
  ">

  <div>
    <img src="../assets/bitmec.png" height="75px" style="margin: 30px 0px 10px 30px">
  </div>
  <v-card
    elevation="5"
    class="pt-5 pb-15 pr-15 pl-15 mt-5 card"
    
  >
  <v-card-title class="display-2 grey--text font-weight-bold">
    En un momento<br>te atenderá un<br>asistente
  </v-card-title>
   <v-container class="">
      <v-img
        height="60%"
        src="../assets/doctors.png"
      >
    </v-img>
    </v-container>
    <v-row justify="center"  align="center">
      <div class=" pa-3 shadow text-center">
        <span class=" white--text font-weight-bold" style="font-size: 25px;">Conectándote</span>
      </div>
    </v-row>
  </v-card>
  </v-app>
</template>

<script>

import * as Cookies from 'js-cookie'


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    channel: "",
    baseMode: "avc",
    transcode: "interop",
    attendeeMode: "video",
    videoProfile: "480p_4",
    message: "",
  }),

  created(){

    try {
      const ws = new WebSocket("ws://localhost:3000/");
      ws.onmessage = ({data}) => {
        this.message = data;
        let messageParsed = JSON.parse(this.message)
        switch (messageParsed['type']) {
          case 'navigation':
            console.log('joining');
            Cookies.set("channel", this.channel);
            Cookies.set("baseMode", this.baseMode);
            Cookies.set("transcode", this.transcode);
            Cookies.set("attendeeMode", this.attendeeMode);
            Cookies.set("videoProfile", this.videoProfile);
            this.handleJoin()
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }

  },

  methods: {

    handleJoin(){
      setTimeout(function()
      {
        this.$router.push("/callcenter-personal-information");
      }.bind(this), 3000);        
    },

    handleChannel(val, state) {
      this.channel = val;
      this.joinBtn = state;
    },

    handleBaseMode(val) {
      this.baseMode = val;
    },

    handleTranscode(val) {
      this.transcode = val;
    },

    handleVideoProfile(val) {
      this.videoProfile = val;
    },

    handleAttendeeMode(e) {
      this.attendeeMode = e.currentTarget.value;
    },

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("keypress", e => {
        e.keyCode === 13 && this.handleJoin();
      });
    });
  }
};
</script>

<style>
  .card {
    width: calc(100% - 60px);
    margin-top: 30px;
    margin-left: 30px;
  }

  .shadow{
    width: 300px;
    border-radius: 20px;
    background-color: #8DDAFC;
    box-shadow: 5px 5px 8px #8DDAFC;
}
  
</style>
