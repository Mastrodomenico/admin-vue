<template>
  <div>
    <div class="row mb-3">
      <div class="col">
        <nuxt-link to="/users/new" tag="a" class="btn btn-primary btn-icon-split">
          <span class="icon text-white-50">
            <i class="fas fa-users"></i>
          </span>
          <span class="text">Adicionar usuário</span>
        </nuxt-link>
      </div>
    </div>
    <b-card
      class="shadow mb-5"
      header="Usuários"
      header-tag="h5"
      header-class="m-0 font-weight-bold text-primary"
    >
      <b-card-body>
        <div class="row">
          <div class="col">
            <b-table striped hover :items="table.items" :fields="table.fields" bordered>
              <template slot="action" slot-scope="data">
                <nuxt-link
                  :to="'/users/'+data.item.id"
                  tag="a"
                  class="btn btn-success btn-icon-split btn-sm"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="text">Editar</span>
                </nuxt-link>
                <button class="btn btn-danger btn-icon-split btn-sm">
                  <span class="icon text-white-50">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span class="text">Excluir</span>
                </button>
              </template>
            </b-table>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
const items = [
  {
    id: 1,
    name: 'Daniel Mastrodomenico',
    email: 'daniel@clienteagente.com.br',
    phone: '11 950755377'
  },
  {
    id: 2,
    name: 'Daniel Mastrodomenico',
    email: 'daniel@clienteagente.com.br',
    phone: '11 950755377'
  },
  {
    id: 3,
    name: 'Daniel Mastrodomenico',
    email: 'daniel@clienteagente.com.br',
    phone: '11 950755377'
  }
]

export default {
  data: () => ({
    table: {
      items: items,
      fields: [
        // A virtual column that doesn't exist in items
        { key: 'name', label: 'Nome' },
        // A column that needs custom formatting
        { key: 'email', label: 'Email' },
        // A regular column
        { key: 'phone', label: 'Telefone' },
        // A regular column
        { key: 'action', label: 'Ação' }
      ]
    }
  }),
  methods: {}
}
</script>

<style>
</style>
