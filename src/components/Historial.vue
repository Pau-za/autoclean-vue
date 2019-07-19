<template>
  <div class="container" id="historial">
    <h1>historial</h1>
    <div v-for="venta in historial" :key="venta.auto" id="servicios" class="card">
      <div class="card-body">
        <h5 class="card-title">{{venta.data().auto}}</h5>
        <p class="card-text">{{venta.data().placas}}</p>
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
            this.historial.push(doc);
          });
        });
    }
  },
  created() {
    this.readData();
  }
};
</script>

<style>
</style>
