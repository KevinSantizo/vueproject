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
                                <span class=" white--text font-weight-bold" style="font-size: 25px;">Salud reproductiva</span>
                            </div><br>
                            </v-col> 
                            <v-col cols="6"  md="6" >
                            </v-col> 
                        </v-row>
                    <v-row no-gutters>
                        <v-col  cols="12" sm="4" >
                            <div class="font-weight-bold grey--text">¿Ha estado<br/>embarazada?</div>
                            <div class="mt-3 font-weight-bold">{{answerPregnancy}}</div>
                        </v-col>
                        <v-col  cols="12" sm="4" >
                            <div class="font-weight-bold grey--text">Cantidad de<br/>embarazos:</div>
                            <div class="mt-3 font-weight-bold">{{cant}}</div>
                        </v-col>
                        <v-col  cols="12" sm="4" >
                            <div class="font-weight-bold grey--text">Hijos:</div><br/>
                            <div class="mt-3 font-weight-bold">{{children}}</div>
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
        'answerPregnancy',
        'cant',
        'children',
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