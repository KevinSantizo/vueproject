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
                                <span class=" white--text font-weight-bold" style="font-size: 25px;">Signos vitales</span>
                            </div><br>
                            </v-col> 
                            <v-col cols="6"  md="6" >
                            </v-col> 
                        </v-row>
                    <v-row no-gutters>
                        <v-col>
                            <div class="font-weight-bold grey--text">Peso:</div>
                            <div class="mt-3 font-weight-bold">{{weight + ' -- lb'}}</div>
                        </v-col>
                        <v-col>
                            <div class="font-weight-bold grey--text">Altura:</div>
                            <div class="mt-3 font-weight-bold">{{height +  ' -- m'}}</div>
                        </v-col>
                        <v-col>
                            <div class="font-weight-bold grey--text">Oxigenación:</div>
                            <div class="mt-3 font-weight-bold">{{oxygen + ' -- %'}}</div>
                        </v-col>
                        <v-col >
                            <div class="font-weight-bold grey--text">Temperatura:</div>
                            <div class="mt-3 font-weight-bold">{{temperature + ' -- °C'}}</div>
                        </v-col>
                    </v-row><br>
                    <v-row no-gutters>
                        <v-col cols="12" sm="4">
                            <div class="font-weight-bold grey--text">Frecuencia cardiaca:</div>
                            <div class="mt-3 font-weight-bold">{{bpmF + ' -- bpm'}}</div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="font-weight-bold grey--text">Presión diastólica:</div>
                            <div class="mt-3 font-weight-bold">{{dPressure + ' --'}}</div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <div class="font-weight-bold grey--text">Presión sistólica:</div>
                            <div class="mt-3 font-weight-bold">{{sPressure + ' --'}}</div>
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
        'weight',
        'height',
        'oxygen',
        'bpmF',
        'dPressure',
        'sPressure',
        'temperature',

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