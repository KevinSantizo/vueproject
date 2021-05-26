<template>
    
    <v-app>
        <v-form>
            <v-stepper v-model="e1">
                <v-stepper-items>
                    <v-stepper-content step="1">
                       
                            <div class=" pa-3  text-center">
                                <div class="font-weight-bold grey--text">¿Es la primera vez que nos visitas?</div>
                            </div><br>
                            <v-row
                                align="center"
                                justify="center"
                            >
                                <v-btn
                                depressed
                                color="primary"
                                class="ma-2"
                                @click="e1 = 2"

                                >
                                Si 
                                </v-btn>
                                <v-btn
                                depressed
                                color="primary"
                                class="ma-2"
                                @click="e1 = 2"
                                >
                                No
                                </v-btn>
                            
                            </v-row>                    
                    </v-stepper-content>
                    <v-stepper-content step="2">
                       
                        <div class="wrapper meeting">
                        <v-row no-gutters class="mt-5">
                            <v-col cols="12" sm="12" md="12" lg="12"  >
                            <div class=" pa-3  text-center">
                                <span class=" grey--text font-weight-bold" style="font-size: 25px;">Información personal</span>
                            </div><br>
                            <v-form ref="form" >
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Nombres:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Apellidos:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Fecha de nacimiento:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Género:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    CUI/DPI:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Teléfono:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Departamento:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Municipio:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <span class="font-weight-bold  pt-15 grey--text title">
                                    Dirección:
                                    </span>
                                    <v-text-field
                                        label=""
                                        outlined
                                    ></v-text-field>
                                    <div class="text-center">
                                        <v-file-input
                                            hide-input
                                            accept="image/png, image/jpeg, image/bmp"
                                            placeholder="Selecciona una imagen"
                                            prepend-icon="mdi-camera"
                                            label="Avatar"
                                        ></v-file-input>
                                    </div>
                            </v-form>
                            <v-btn depressed color="primary" block @click="e1 = 3">
                                Continuar
                            </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                   
                        <div class="wrapper meeting">
                            <v-row no-gutters class="mt-5">
                                <v-col cols="12" sm="12" md="12" lg="12"  >
                                <div class=" pa-3  text-center">
                                    <span class=" grey--text font-weight-bold" style="font-size: 25px;">Historial medico</span>
                                </div><br>
                                <v-expansion-panels focusable v-model="panel" multiple>
                                    <v-expansion-panel key="1">
                                        <v-expansion-panel-header>Padecimientos
                                            <template v-slot:actions>
                                                <v-icon color="blue darken-2">
                                                mdi-plus-circle
                                                large
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Padecimiento:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese padecimiento"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Fecha de diagnostico:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese fecha"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Diagnosticado por:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese nombre del doctor que lo diagnostico"
                                            ></v-text-field>                                        
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>

                                    <v-expansion-panel key="2">
                                        <v-expansion-panel-header>Cirugías
                                            <template v-slot:actions>
                                                <v-icon color="blue darken-2">
                                                mdi-plus-circle
                                                large
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Cirugía:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese cirugía"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Fecha de cirugía:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese fecha"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Realizada por:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese nombre del doctor que la realizó"
                                            ></v-text-field>
                                             <span class="font-weight-bold  pt-15 grey--text title">
                                                Padecimiento:
                                            </span>
                                            <v-select
                                                :items="items"
                                                label=""
                                                dense
                                                outlined
                                                placeholder="Elija el padecimiento correspondiente"
                                            ></v-select>
                                            </v-expansion-panel-content>
                                    </v-expansion-panel>

                                    <v-expansion-panel key="3">
                                        <v-expansion-panel-header>Medicamentos
                                            <template v-slot:actions>
                                                <v-icon color="blue darken-2">
                                                mdi-plus-circle
                                                large
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Medicamento:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese nombre de medicamento"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Fecha de inicio:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese fecha"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Dosis:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese la dosis"
                                            ></v-text-field>
                                             <span class="font-weight-bold  pt-15 grey--text title">
                                                Frecuencia:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese la frecuencia"
                                            ></v-text-field>   
                                             <span class="font-weight-bold  pt-15 grey--text title">
                                                Recetado por:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese el doctor que o recetó"
                                            ></v-text-field>
                                             <span class="font-weight-bold  pt-15 grey--text title">
                                                Padecimiento:
                                            </span>
                                            <v-select
                                                :items="items"
                                                label=""
                                                dense
                                                outlined
                                                placeholder="Elija el padecimiento correspondiente"
                                            ></v-select>
                                             <span class="font-weight-bold  pt-15 grey--text title">
                                                Cirugía:
                                            </span>
                                            <v-select
                                                :items="items"
                                                label=""
                                                dense
                                                outlined
                                                placeholder="Elija la cirugía correspondiente"
                                            ></v-select>                                        
                                            </v-expansion-panel-content>
                                    </v-expansion-panel>

                                    <v-expansion-panel key="4">
                                        <v-expansion-panel-header>Salud reproductiva
                                            <template v-slot:actions>
                                                <v-icon color="blue darken-2">
                                                mdi-plus-circle
                                                large
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <div class=" pa-3  text-center">
                                                <div class="font-weight-bold grey--text">¿Ha tenido uno o más ciclos menstruales?</div>
                                            </div><br>
                                            <v-row
                                                align="center"
                                                justify="center"
                                            >
                                                <v-btn
                                                depressed
                                                color="primary"
                                                class="ma-2"
                                                @click="e1 = 2"

                                                >
                                                Si 
                                                </v-btn>
                                                <v-btn
                                                depressed
                                                color="primary"
                                                class="ma-2"
                                                @click="e1 = 2"
                                                >
                                                No
                                                </v-btn>
                                            
                                            </v-row>
                                            <div class=" pa-3  text-center">
                                                <div class="font-weight-bold grey--text">¿Ha estado embarazada?</div>
                                            </div><br>
                                            <v-row
                                                align="center"
                                                justify="center"
                                            >
                                                <v-btn
                                                depressed
                                                color="primary"
                                                class="ma-2"
                                                @click="e1 = 2"

                                                >
                                                Si 
                                                </v-btn>
                                                <v-btn
                                                depressed
                                                color="primary"
                                                class="ma-2"
                                                @click="e1 = 2"
                                                >
                                                No
                                                </v-btn>
                                            
                                            </v-row> 
                                            <div class=" pa-3  text-center">
                                                <div class="font-weight-bold grey--text">¿Ha perdido algún bebé aún no nacido?</div>
                                            </div><br>
                                            <v-row
                                                align="center"
                                                justify="center"
                                            >
                                                <v-btn
                                                depressed
                                                color="primary"
                                                class="ma-2"
                                                @click="e1 = 2"

                                                >
                                                Si 
                                                </v-btn>
                                                <v-btn
                                                depressed
                                                color="primary"
                                                class="ma-2"
                                                @click="e1 = 2"
                                                >
                                                No
                                                </v-btn>
                                            
                                            </v-row>    
                                    </v-expansion-panel-content>
                                    </v-expansion-panel>

                                    <v-expansion-panel key="5">
                                        <v-expansion-panel-header>Anticonceptivos
                                            <template v-slot:actions>
                                                <v-icon color="blue darken-2">
                                                mdi-plus-circle
                                                large
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Anticonceptivos:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese nombre de anticonceptivo"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Fecha de inicio:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese fecha"
                                            ></v-text-field>
                                            <span class="font-weight-bold  pt-15 grey--text title">
                                                Recetado por:
                                            </span>
                                            <v-text-field
                                                label=""
                                                outlined
                                                placeholder="Ingrese el nombre de quién lo recetó"
                                            ></v-text-field>   
                                                                                       
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>

                               <v-btn depressed color="primary" block @click="e1 = 1">
                                Continuar con consulta
                            </v-btn>
                                
                                </v-col>
                            </v-row>
                    </div>
                                
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
            
        </v-form> 
        
        
    </v-app>

</template>

<script>
export default {
    data() {
        return {
            e1: 1,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

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

</style>