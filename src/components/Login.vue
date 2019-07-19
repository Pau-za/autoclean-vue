<template>
  <div>
    <div class="form-group">
      <!-- <label for="exampleInputEmail1">Email</label> -->
      <input
        type="email"
        class="form-control"
        id="inputEmail1"
        aria-describedby="emailHelp"
        placeholder="Correo"
        v-model="email"
      />
      <small
        id="emailHelp"
        class="form-text text-light"
      >Nunca compartiremos tus datos con nadie más</small>
    </div>
    <div class="form-group">
      <!-- <label for="exampleInputPassword1">Password</label> -->
      <input
        type="password"
        class="form-control"
        id="inputPassword1"
        placeholder="Contraseña"
        v-model="password"
      />
    </div>
    <router-link to="/form"><button type="submit" class="btn btn-primary m-5" @click="loginFn()">
     Ingresar</button></router-link> 
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    loginFn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res.user.uid);
          email = res.user.email;
          uid = res.user.uid;
          router.replace("/form");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

