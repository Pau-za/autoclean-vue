<template>
  <div class="container" id="historial">
    <h1>historial</h1>
    <button type="button" class="btn btn-info" @click="readData">Info</button>
    <div v-for="venta in historial" :key="venta.auto" id="sales" class="card">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">{{venta.data().auto}}</h5>
        <p class="card-text">{{venta.data().placas}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>
</template>

<script>
import { db } from "../js/firebase.js";
import firebase from "firebase";

export default {
    data() {
        return {
            historial: []
        };
    },
    methods: {
      readData() {
        db.collection("historial")
        .orderBy("fecha")
        .get()
        .then(onSnapshot => {
          onSnapshot.forEach(doc => {
            this.historial.push(doc)
            console.log(doc.data());
          })
        })
      },
      created(){
        this.readData()
      }
    },
}
</script>

<style>
</style>
