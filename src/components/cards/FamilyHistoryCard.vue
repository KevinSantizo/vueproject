<template>
    
    <v-app> 
        
        <div class="wrapper meeting">
            <v-card elevation="3" class="cards" outlined >
                <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                        <v-row no-gutters>
                        <v-col cols="6"  md="6" >
                            <div class=" pa-3 shadow text-center">
                                <span class=" white--text font-weight-bold" style="font-size: 25px;">Historial familiar</span>
                            </div><br>
                            </v-col> 
                            <v-col cols="6"  md="6" >
                            </v-col> 
                        </v-row>
                        <span class="font-weight-bold grey--text" >
                            Detalle:
                        </span>
                    <v-row no-gutters class="mt-3">
                        <v-col  cols="6" md="6" >
                            <div class="font-weight-bold">{{diseaseName}}</div>
                            <div class="">{{relative}}</div>
                            <div class="">{{dateD}}</div>
                        </v-col>
                        <v-col  cols="6" md="6" >
                            <div class="font-weight-bold">{{diseaseName2}}</div>
                            <div class="">{{relative2}}</div>
                            <div class="">{{dateD2}}</div>
                        </v-col>
                    </v-row>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-card>
        </div>
    </v-app>

</template>

<script>
export default {
    data() { return { } },

    props: [
        'diseaseName',
        'relative',
        'dateD',
        'diseaseName2',
        'relative2',
        'dateD2',
    ]
}
</script>

<style scoped>

.cards{
    height: 300px;
    margin-top: 30px;
    margin-left: 30px;
    padding: 20px 30px 20px 30px;
    width: calc(100% - 60px);
}

.meeting.wrapper {
  background: #E5FAFF;
  background: -webkit-linear-gradient(to right, #E5FAFF, #D7ECFF, #E5FAFF);
  background: linear-gradient(to right, #E5FAFF, #D7ECFF, #E5FAFF);
  height: 100%;
}


.shadow{
    width: 300px;
    border-radius: 20px;
    background-color: #8DDAFC;
    box-shadow: 5px 5px 8px #8DDAFC;
}
</style>