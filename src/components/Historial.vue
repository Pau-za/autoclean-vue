<template>
<div class="container" id="Servicio">
    <h1>Servicio</h1>
    <button type="button" class="btn btn-secondary btn-sm" @click="readData">Read</button>
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
        db.collection("users")
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
