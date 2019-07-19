<template>
  <div class="container text-dark text-center" id="Servicio">
    <h2 class="text-light">¡Tu próximo servicio está listo!</h2>
    <div class="row">
      <div class="col-3"></div>
      <div class="card mb-3 width-img col-6">
        <img src="../assets/talento.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Tu washie es: Jorge M.</h5>
          <p class="card-text">Estará listo en aprox: 00:14:50</p>
          <p class="card-text">
            Calificación:
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
          </p>
          <p>
            <small>Calificado por 20 usuarios.</small>
          </p>
        </div>
      </div>
      <div class="col-3"></div>
    </div>

    <!-- <div class="card bg-light mt-3" style="max-width: 18rem;">
      <div class="card-header">Servicio</div>
      <div class="card-body">
        <h5 class="card-title">Juan es tu washie</h5>
        <img src alt />
        <p class="card-text">Estará listo en aprox: 00:14:50</p>
      </div>
    </div>-->
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../js/firebase";

export default {
  // name: "historial"
  data() {
    return {
      historial: []
    };
  }
};
</script>

<style scoped>
.width-img {
  width: 50%;
}
</style>

