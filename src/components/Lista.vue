<template>
  <div>
    <header id="header">
      <div id="content-title">
        <h1>Lista</h1>
      </div>
    </header>

    <div id="root-content">
      <p class="highlight">Lista de Clientes</p>

      <hr />

      <div id="search-input">
        <label for="nome">Nome do Cliente</label>
        <input type="text" id="nome" name="nome" v-model="filtro">
      </div>

      <table id="lista-clientes">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="matricula in $store.state.matriculas" v-bind:key="matricula.cpf"
            v-show="!filter || matricula.nome.includes(filtro)
            || matricula.email.includes(filtro) || matricula.cpf.includes(filtro)">
        <td>{{ matricula.nome }}</td>
        <td>{{ matricula.email }}</td>
        <td>{{ matricula.cpf }}</td>
        <td>{{ matricula.data }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  data () {
    return {
      filtro: ''
    }
  },
  methods: {
    filter (value) {
      if (!this.filter) return true
      if (value.contains(this.filter)) return true
      return false
    }
  }
}
</script>

<style scoped>
  #lista-clientes {
    margin: 3rem 0;
  }
</style>
