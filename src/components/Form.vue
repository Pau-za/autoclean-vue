<template>
<div class="form container mt-5 text-light">
    <form v-on:submit.prevent="saveService">
        <label class="mb-5">Ingresa los datos de tu auto aquí</label>
        <div class="form-group">
            <input v-model="newService.placas" type="text" class="form-control" id="formGroupExampleInput" placeholder="No. de Placa" />
        </div>
        <div class="form-group">
            <input v-model="newService.auto" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Marca" />
        </div>
        <div class="form-group">
            <input v-model="newService.color" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Color" />
        </div>
        <!-- <div class="form-group">
        <input
          @change="saveFoto"
          v-if="uploadReady"
          ref="myFiles"
          type="file"
          accept="image/*"
          class="form-control"
          id="formGroupExampleInput2"
        />
      </div> -->
        <label>Ingresa tu ubicación</label>
        <GmapMap class="container mt-5" v-bind:center="{lat : 19.4292730   , lng :  -99.1806473 } " v-bind:zoom=" 18 " style=" width: 80%; height: 300px ">
            <GmapMarker v-bind:position=" {lat : 19.4292730  , lng : -99.1806473 } " v-bind:clickable="true" v-bind:draggable="true" />
        </GmapMap>

        <button class="btn btn-primary btn-lg m-4" type="submit">Enviar</button>

    </form>
</div>
</template>

<script>
import {
    db
} from '../js/firebase.js'
import { log } from 'util';

export default {
    name: "form",
    mounted() {
        this.localizacion()
    },
    data() {
        return {
            uploadReady: true,
            newService: {
                placas: "",
                auto: "",
                color: "",
                // imagen: ""
            }

        };
    },
    methods: {
      saveService(){
        db.collection("historial").add(this.newService)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
                    console.error("Error adding document: ", error);
          });
      },
        // serviceSave() {
        //     db.collection("services").add(this.newService)
        //         .then((docRef) => {
        //             console.log("Document written with ID: ", docRef.id);
        //         })
        //         .catch(function (error) {
        //             console.error("Error adding document: ", error);
        //         }),

        //         this.uploadReady = false
        //     this.$nextTick(() => {
        //         this.uploadReady = true;
        //     })
        //     this.newService = {
        //         numPlaca: "",
        //         marca: "",
        //         color: "",
        //         imagen: ""
        //     }
        // },
        saveFoto() {
            this.newService.imagen = this.$refs.myFiles.files
            console.log(this.newService.imagen);

        },
        // serviceSave() {
        //   this.uploadReady=false
        //   this.$nextTick( ()=>{
        //     this.uploadReady=true;
        //   })
        //   console.log(this.newService);
        //   this.newService={
        //     numPlaca: "",
        //     marca: "",
        //     color: "",
        //     imagen: ""
        //   }
        // },
        // saveFoto(){
        //  this.newService.imagen= this.$refs.myFiles.files
        //  console.log(this.newService.imagen);
        // },
        localizacion() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position.coords.latitude, position.coords.longitude);
                })
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #35495e;
}
</style>
