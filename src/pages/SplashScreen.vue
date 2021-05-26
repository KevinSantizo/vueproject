<template>
  <v-app>

    <v-container fill-height fluid>
        <v-row align="center"
            justify="center">
              <div>
                <v-img
                    height="100%"
                    src="../assets/bitmec.png"
                  >
                </v-img>
              </div>
        </v-row>
    </v-container>
     
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
.parent {
background: #CCCCCC;
height: 200px;
width: 200px;
position: relative;
}
.child {
background: #FFFF00;
width: 70px;
height: 70px;
position: absolute;
top: 50%;
left: 50%;
margin: -35px 0 0 -35px;
}
  
</style>
