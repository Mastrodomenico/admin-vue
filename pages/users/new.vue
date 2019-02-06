<template>
  <div>
    <div class="row mb-3">
      <div class="col">
        <nuxt-link to="/users" tag="a" class="btn btn-primary btn-icon-split">
          <span class="icon text-white-50">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span class="text">Voltar</span>
        </nuxt-link>
      </div>
    </div>
    <b-card
      class="shadow mb-5"
      header="Dados do usuário"
      header-tag="h5"
      header-class="m-0 font-weight-bold text-primary"
    >
      <b-card-body>
        <div class="row">
          <div class="col-md-4">
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                type="email"
                v-model="user.email"
                placeholder="Seu email válido"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-4">
            <b-form-group label="Seu nome:" label-for="name">
              <b-form-input
                id="name"
                type="text"
                v-model="user.name"
                placeholder="Seu nome"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-4">
            <b-form-group label="Seu telefone:" label-for="phone">
              <b-form-input
                id="phone"
                type="text"
                v-model="user.phone"
                placeholder="Seu telefone"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <b-form-group label="Digite sua nova senha:" label-for="pass">
              <b-form-input
                id="pass"
                type="password"
                v-model="user.pass.pass_one"
                placeholder="Digite sua nova senha"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-4">
            <b-form-group label="Seu telefone:" label-for="pass_repeat">
              <b-form-input
                id="pass_repeat"
                type="password"
                v-model="user.pass.pass_repeat"                
                placeholder="Repita sua senha"
              ></b-form-input>
            </b-form-group>
          </div>

        </div>
        <b-dropdown-divider></b-dropdown-divider>
        <div class="row">
          <div class="col">
            <div class="text-right">
              <b-button type="button" variant="success"><i class="fas fa-check"></i> Salvar</b-button>
            </div>
          </div>
        </div>
      </b-card-body>      
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        name: '',
        phone: '',
        pass: {
          pass_one: '',
          pass_repeat: ''
        }
      }
    }
  },
  methods: {
    
  }
}
</script>

<style>
</style>
