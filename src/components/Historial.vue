<template>
<div class="container" id="Servicio">
    <h1>Servicio</h1>
    <button type="button" class="btn btn-secondary btn-sm" @click="readData">Read</button>
    <div v-for="item in historial" class="card">
    <div class="card-body">
      <p>{{ item.auto }}</p>
      <p>{{ item.color }}</p>
      <p>{{ item.placas }}</p>
      <!-- <p>{{ item.fecha }}</p> -->
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
            this.historial.push(doc.data())
            console.log(doc.data());
          })
        })
      },
    },
}
</script>

<style>
</style>
