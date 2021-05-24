<template>

<v-app>

  <v-dialog v-model="dialog3" max-width="500px">
        <v-card class="pa-8">
          <v-card-title>
            <span class="grey--text font-weight-bold headline text-center mb-5">Cargando información</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <div class="text-center">
            <v-progress-circular
              :size="50"
              color="#8DDAFC"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-card>
      </v-dialog>
  <div class="wrapper meeting">
    <div class="ag-header">
    <div class="ag-header-lead">
      <img class="header-logo"  src="../assets/bitmec.png"  alt="" />
    </div>
    </div>
    <div class="ag-main">
      <div class="ag-container">
        <AgoraVideoCall 
          :videoProfile="videoProfile"
          :channel="channel"
          :transcode="transcode"
          :attendeeMode="attendeeMode"
          :baseMode="baseMode"
          :appId="appId"
          :uid="uid"></AgoraVideoCall>
      </div>  
    </div>

    <!-- Información personal del patient -->

    <div v-if="piCard" class="animated animatedFadeInUp fadeInUp">
      <PersonalInformationCard
        :firstName="firstName"
        :lastName="lastName"
        :dpi="dpi"
        :phoneNumber="phoneNumber"
        :bornDate="bornDate"></PersonalInformationCard>
    </div>

    <!-- Padecimientos -->
    <div v-if="suffCard" class="animated animatedFadeInUp fadeInUp">
      <SufferingInformationCard
        :suff1="suff1"
        :suff2="suff2"></SufferingInformationCard>
    </div>

    <!-- Cirugías -->

    <div v-if="surgCard" class="animated animatedFadeInUp fadeInUp">
      <SurgeriesCard
        :surgeryName='surgeryName'
        :surgeryDescription='surgeryDescription'
        :date='date'></SurgeriesCard>
    </div>

    <!-- Medicamentos -->

    <div v-if="mediCard" class="animated animatedFadeInUp fadeInUp">
      <MedicineCard
        :medicineName='medicineName'
        :medicineName2='medicineName2'
        :dateM='dateM'
        :dateM2='dateM2'
        :doseM='doseM'
        :doseM2='doseM2'></MedicineCard>
    </div>   

    <!-- Salud reproductiva -->

    <div v-if="repHealthCard" class="animated animatedFadeInUp fadeInUp">
      <ReproductiveHealthCard
        :answer='answer'
        :startDate='startDate'
        :finalDate='finalDate'
        ></ReproductiveHealthCard>
    </div> 

    <!-- Salud reproductiva embarazada -->

    <div v-if="repHealthPregnancyCard" class="animated animatedFadeInUp fadeInUp">
      <ReproductiveHealthPregnancyCard
        :answerPregnancy='answerPregnancy'
        :cant='cant'
        :children='children'
        ></ReproductiveHealthPregnancyCard>
    </div>  

    <!-- Anticonceptivos -->

    <div v-if="contraceptiveCard" class="animated animatedFadeInUp fadeInUp">
      <ContraceptivesCard
        :contraceptive='contraceptive'
        :startDateC='startDateC'
        ></ContraceptivesCard>
    </div>  

    <!-- Salud Historial familiar -->

    <div v-if="familyHistoryCard" class="animated animatedFadeInUp fadeInUp">
      <FamilyHistoryCard
        :diseaseName='diseaseName'
        :diseaseName2='diseaseName2'
        :relative='relative'
        :relative2='relative2'
        :dateD='dateD'
        :dateD2='dateD2'
        ></FamilyHistoryCard>
    </div> 

    <!-- Hábitos -->

    <div v-if="habitCard" class="animated animatedFadeInUp fadeInUp">
      <HabitsCard
        :habitName='habitName'
        :dateH='dateH'
        :description='description'
        ></HabitsCard>
    </div>  

    <!-- Signos vitales -->

    <div v-if="vitalSignsCard" class="animated animatedFadeInUp fadeInUp">
      <VitalSignsCard
        :weight='weight'
        :height='height'
        :oxygen='oxygen'
        :temperature='temperature'
        :bpmF='bpmF'
        :dPressure='dPressure'
        :sPressure='sPressure'
        ></VitalSignsCard>
    </div> 

    <!-- Información para consulta -->

    <div v-if="informationForConsultationCard" class="animated animatedFadeInUp fadeInUp">
      <InformationForConsultationCard
        :bodyPart='bodyPart'
        :evolutionDate='evolutionDate'
        :intensity='intensity'
        :descriptionIC='descriptionIC'
        ></InformationForConsultationCard>
    </div> 


  </div>
</v-app>
  
</template>

<script>

import * as Cookies from "js-cookie";
import AgoraVideoCall from "@/components/AgoraVideoCall";
import {AGORA_APP_ID} from "@/agora.config"

//import cards
import PersonalInformationCard from "@/components/cards/PersonalInformationCard"
import SufferingInformationCard from "@/components/cards/SufferingInformationCard"
import SurgeriesCard from "@/components/cards/SurgeriesCard"
import MedicineCard from "@/components/cards/MedicineCard"
import ReproductiveHealthCard from "@/components/cards/ReproductiveHealthCard"
import ReproductiveHealthPregnancyCard from "@/components/cards/ReproductiveHealthPregnancyCard"
import ContraceptivesCard from "@/components/cards/ContraceptivesCard"
import FamilyHistoryCard from "@/components/cards/FamilyHistoryCard"
import HabitsCard from "@/components/cards/HabitsCard"
import VitalSignsCard from "@/components/cards/VitalSignsCard"
import InformationForConsultationCard from "@/components/cards/InformationForConsultationCard"

export default {
  components: {
    AgoraVideoCall,
    PersonalInformationCard,
    SufferingInformationCard,
    SurgeriesCard,
    MedicineCard,
    ReproductiveHealthCard,
    ReproductiveHealthPregnancyCard,
    ContraceptivesCard,
    FamilyHistoryCard,
    HabitsCard,
    VitalSignsCard,
    InformationForConsultationCard
  },

  data() {
    return {  

      dialog3: false,
      videoProfile: Cookies.get("videoProfile").split(",")[0] || "480p_4",
      channel: Cookies.get("channel") || "test",
      transcode: Cookies.get("transcode") || "interop",
      attendeeMode: Cookies.get("attendeeMode") || "video",
      baseMode: Cookies.get("baseMode") || "avc",
      uid: undefined,
      
      //personal information vars
      firstName: null,
      dpi: null,
      phoneNumber: null,
      lastName: null,
      bornDate: null,
      message: null,

      //suffering vars
      suff1: 'hello suff 1',
      suff2: 'helllo suff2',

      //boolean vars to show cards
      piCard: true,
      suffCard: false,
      surgCard: false,
      mediCard: false,
      repHealthCard: false,
      repHealthPregnancyCard: false,
      contraceptiveCard: false,
      familyHistoryCard: false,
      habitCard: false,
      vitalSignsCard: false,
      informationForConsultationCard: false,
    
      //surgeries vars
      surgeryName:'Cirugía por',
      surgeryDescription: 'Visión borrosa',
      date: '2020-29-09',
      
      //meicine vars
      medicineName: 'Ivermectina',
      medicineName2: 'Paracetamol',
      dateM: '2020/09/09',
      dateM2: '2020/09/09',
      doseM: '5mg cada 15 días\npor dolor de cabeza ',
      doseM2: 'por Visión borrosa',
      
      //reproductive health vars
      answer: 'Sí',
      startDate:'2020/08/09',
      finalDate: '2020/08/09',
      
      //reproductive health pregnancy vars
      answerPregnancy: 'Sí',
      cant: '4',
      children: '3',

      //contraceptives' vars
      contraceptive: 'T de cobre',
      startDateC: '1990/01/01',

      //family history vars
      diseaseName: 'Hipertensión',
      diseaseName2: 'Diabetes',
      relative: 'Padre',
      relative2: 'Madre',
      dateD: '1956/12/03',
      dateD2: '1943/04/27',

      //Habits vars
      habitName: 'Fumar',
      dateH: '1956/12/03',
      description: '3 cigarrilos por senama',

      //vitalsigns vars
      weight: '',
      height: '',
      oxygen: '',
      temperature: '',
      bpmF: '',
      dPressure: '',
      sPressure: '',

      // information for consultation vars
      bodyPart: null,
      evolutionDate: null,
      intensity: '',
      descriptionIC: null

    };
  },

  created() {
    this.appId = AGORA_APP_ID
    if (!this.appId) {
      return alert('Get App ID first!')
    }

    this.loadInformation()
  },

  methods: {

    loadInformation(){
      try {
        const ws = new WebSocket("ws://localhost:3000/");
        ws.onmessage = ({data}) => {
            this.message = data;
            let dataParsed = JSON.parse(this.message)

            switch (dataParsed['type']) {

              case 'personal-info':
                this.showLoading()
                setTimeout(function() {
                  this.firstName = dataParsed['first-name']
                  this.lastName = dataParsed['last-name']
                  this.phoneNumber = dataParsed['phone']
                  this.dpi = dataParsed['dpi']
                  this.bornDate = dataParsed['birth-date']
                }.bind(this), 2000);
                this.switchCards();
                break;

                case 'vitalsigns-info':
                this.showLoading()
                setTimeout(function() { 
                  this.weight = dataParsed['weight']
                  this.height = dataParsed['height']
                  this.oxygen = dataParsed['oxygen']
                  this.temperature = dataParsed['temperature']
                  this.bpmF = dataParsed['bpm-f'] 
                  this.dPressure = dataParsed['d-pressure'] 
                  this.sPressure = dataParsed['s-pressure']  
                }.bind(this), 2000);
                break;

                case 'appointment-info':
                  this.showLoading()
                  setTimeout(function() { 
                    this.bodyPart = dataParsed['body-part']
                    this.evolutionDate = dataParsed['evolution-day']
                    this.intensity = dataParsed['intensity']
                    this.descriptionIC = dataParsed['description']
                  }.bind(this), 2000);
                  break;
              default:
                break;
            } 
          }
        }
      catch (error) {
        console.log(error);
      }    
    },

    showLoading(){
      setTimeout(function()
      { this.dialog3 = !this.dialog3 }.bind(this), 4000);
      this.dialog3 = !this.dialog3
    },

    switchCards() {
      setTimeout(function()
      {
        this.piCard = false, 
        this.informationForConsultationCard = true
      }.bind(this), 8000);
    },
  }
};

</script>

<style scoped>

.meeting.wrapper {
  background: #E5FAFF;
  background: -webkit-linear-gradient(to right, #E5FAFF, #D7ECFF, #E5FAFF);
  background: linear-gradient(to right, #E5FAFF, #D7ECFF, #E5FAFF);
  height: 100%;
}

.meeting .ag-header {
  padding: 20px 30px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ag-header-lead {
  font-size: 16px;
  line-height: 35px;
}

.meeting .ag-footer {
  padding: 0 30px;
  display: flex;
  align-items: center;
}

.meeting .ag-main {
  position: relative;
}

.meeting .ag-footer :first-child {
  margin-right: 80px;
}

.header-logo {
  width: 30%;
  margin-right: 12px;
  margin-top: 30px;
}

.ag-container {
  width: calc(100% - 60px);
  height: 100%;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.cards{
  position: relative;
  margin-top: 30px;
  margin-left: 30px;
  padding: 20px 30px 20px 30px;
  width: calc(100% - 60px);
}

.shadow{
  box-shadow: 5px 5px 10px #8DDAFC;
}

@keyframes fadeInUp {
    from {
      transform: translate3d(0,40px,0)
    }

    to {
      transform: translate3d(0,0,0);
      opacity: 1
    }
}

@-webkit-keyframes fadeInUp {
    from {
      transform: translate3d(0,40px,0)
    }

    to {
      transform: translate3d(0,0,0);
      opacity: 1
    }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both
}

.animatedFadeInUp {
  opacity: 0
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
</style>

