<template>
    
    <v-app> 
        
        <div class="wrapper meeting">
            <v-card elevation="3" class="cards" outlined >
                <div>
                    <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                    <v-row no-gutters class="mt-5">
                        <v-col >
                        <div class=" pa-3 shadow text-center">
                            <span class=" white--text font-weight-bold" style="font-size: 25px;">Información personal</span>
                        </div><br>
                        <span class="font-weight-bold  pt-15 grey--text title">
                            Nombres:
                        </span>
                        <p class="" >{{firstName || '----'}}</p>
                        <span class="font-weight-bold  pt-5 grey--text title">
                            DPI/CUI:
                        </span>
                        <p class="">{{dpi || '----'}}</p>
                        </v-col>
                        <v-col class="ml-15">
                        <span class="font-weight-bold  pt-5 grey--text title">
                            Número telefónico:
                        </span>
                        <p class="">{{phoneNumber || '----'}}</p>
                        <span class="font-weight-bold  pt-5 grey--text title">
                            Apellidos:
                        </span>
                        <p class="">{{lastName || '----'}}</p>
                        <span class="font-weight-bold  pt-5 grey--text title">
                            Fecha de Nacimiento:
                        </span>
                        <p class="">{{bornDate || '----/--/--'}}</p>
                        </v-col>
                    </v-row>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                </div>

            </v-card>
        </div>
    </v-app>

</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: [
        'firstName',
        'lastName',
        'dpi',
        'phoneNumber',
        'bornDate',

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