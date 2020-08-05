<template>
  <div>
    <header id="header">
      <div id="content-title">
        <h1>Cadastro</h1>
      </div>
    </header>

    <div  id="root-content">
      <form id="cadastro">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" v-model="nome" v-on:blur="touchForm('nome')">
          <div class="error" v-if="!$v.nome.required && form.nome.touched"><small>O nome é obrigatório</small></div>
          <div class="error" v-if="!$v.nome.maxLength && form.nome.touched">
            <small>O nome deve ter no máximo 100 caracteres</small>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" v-model="email" v-on:blur="touchForm('email')">
          <div class="error" v-if="!$v.email.required && form.email.touched"><small>O email é obrigatório</small></div>
          <div class="error" v-if="!$v.email.email && form.email.touched">O email não é valido</div>
        </div>

        <div class="form-group">
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="111.111.111-11" v-model="cpf"
                 v-on:blur="touchForm('cpf')" v-mask="['###.###.###-##']">
          <div class="error" v-if="!$v.cpf.required && form.cpf.touched"><small>O cpf é obrigatório</small></div>
        </div>

        <div class="container">
          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" placeholder="Rua, Número, Bairro"
                   v-model="endereco" v-on:blur="touchForm('endereco')">
            <div class="error" v-if="!$v.endereco.required && form.endereco.touched">
              <small>O endereço é obrigatório</small>
            </div>
          </div>

          <div class="form-group">
            <label for="estado">Estado</label>
            <select id="estado" name="estado" v-model="estado"
                    v-on:blur="touchForm('estado')" v-on:change="getMunicios(estado)">
              <option value="">Selecione o Estado</option>
              <option v-for="uf in ufs" :key="uf.id" :value="uf.sigla">{{ uf.nome }}</option>
            </select>
            <div class="error" v-if="!$v.estado.required && form.estado.touched"><small>O estado é obrigatório</small></div>
          </div>
        </div>

        <div class="container">
          <div class="form-group">
            <label for="cep">CEP</label>
            <input type="text" id="cep" name="cep" placeholder="22.222-000" v-model="cep"
                   v-on:blur="touchForm('cep')" v-mask="['##.###-###']">
            <div class="error" v-if="!$v.cep.required && form.cep.touched"><small>O cep é obrigatório</small></div>
          </div>

          <div class="form-group">
            <label for="estado">Cidade</label>
            <select type="text" id="cidade" name="cidade" v-model="cidade" v-on:blur="touchForm('cidade')">
              <option value="">Selecione a Cidade</option>
              <option v-for="cidade in municipios" :key="cidade.id" :value="cidade.nome">{{ cidade.nome }}</option>
            </select>
            <div class="error" v-if="!$v.cidade.required && form.cidade.touched">
              <small>A cidade é obrigatória</small>
            </div>
          </div>
        </div>

        <h3 class="hightlight">Forma de Pagamento</h3>

        <hr>

        <div class="form-group mt-1 mb-3 form-group-radio-checkbox">
          <input type="radio" id="cartao" name="forma-pagamento" value="cartao"
                 v-model="pagamento" v-on:blur="touchForm('pagamento')">&nbsp;
          <label for="cartao">Cartão de Crédito</label>&nbsp;&nbsp;

          <input type="radio" id="boleto" name="forma-pagamento" value="boleto" v-model="pagamento"
                 v-on:blur="touchForm('pagamento')">&nbsp;

          <label for="boleto">Boleto Bancário</label>
          <div class="error" v-if="!$v.pagamento.required && form.pagamento.touched">
            <small>Escolha a forma de pagamento</small>
          </div>
        </div>

        <div class="container">
          <div class="form-group">
            <label for="nome-cartao">Nome no Cartão</label>
            <input type="text" id="nome-cartao" name="nome-cartao" placeholder="Nome impresso no cartão"
                   v-model="nomeCartao" :disabled="pagamento == 'boleto'" v-on:blur="touchForm('nomeCartao')">
            <div class="error" v-if="!$v.nomeCartao.required && pagamento == 'cartao' && form.nomeCartao.touched">
              <small>O nome é obrigatório</small>
            </div>
            <div class="error" v-if="!$v.nomeCartao.maxLength && pagamento == 'cartao'
                                      && form.nomeCartao.touched">
              <small>O nome deve ter no máximo 100 caracteres</small>
            </div>
          </div>

          <div class="form-group">
            <label for="mes">Data de Expiração</label>
            <div class="container data-expiracao-inputs">
              <select name="mes" id="mes" v-model="mesDataExpiracao" :disabled="pagamento == 'boleto'"
                      v-on:blur="touchForm('mesDataExpiracao')">
                <option value="" selected>Mês</option>
                <option value="01" selected>01</option>
                <option value="02" selected>02</option>
                <option value="03" selected>03</option>
                <option value="04" selected>04</option>
                <option value="05" selected>05</option>
                <option value="06" selected>06</option>
                <option value="07" selected>07</option>
                <option value="08" selected>08</option>
                <option value="09" selected>09</option>
                <option value="10" selected>10</option>
                <option value="11" selected>11</option>
                <option value="12" selected>12</option>
              </select>
              <select name="ano" id="ano" v-model="anoDataExpiracao"
                      :disabled="pagamento == 'boleto'" v-on:blur="touchForm('anoDataExpiracao')">
                <option value="" selected>Ano</option>
                <option value="2020" selected>2019</option>
                <option value="2021" selected>2021</option>
                <option value="2022" selected>2022</option>
                <option value="2023" selected>2023</option>
                <option value="2024" selected>2024</option>
                <option value="2025" selected>2025</option>
                <option value="2026" selected>2026</option>
                <option value="2027" selected>2027</option>
                <option value="2028" selected>2028</option>
              </select>
            </div>
            <div class="error" v-if="!$v.mesDataExpiracao.required && pagamento == 'cartao'
                                      && form.mesDataExpiracao.touched">
              <small>O mês é obrigatório</small>
            </div>
            <div class="error" v-if="!$v.anoDataExpiracao.required && pagamento == 'cartao'
                                      && form.anoDataExpiracao.touched">
              <small>O ano é obrigatório</small>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="form-group">
            <label for="endereco">Número no Cartão</label>
            <input type="text" id="numero-cartao" name="numero-cartao" placeholder="5555 5555 5555 5555"
                   v-model="numeroCartao" :disabled="pagamento == 'boleto'" v-on:blur="touchForm('numeroCartao')"
                   v-mask="['#### #### #### ####']">
            <div class="error" v-if="!$v.numeroCartao.required && pagamento == 'cartao' && form.numeroCartao.touched">
              <small>O número do cartão é obrigatório</small>
            </div>
          </div>

          <div class="form-group">
            <label for="endereco">Código Segurança</label>
            <input type="text" id="codigo-seguranca" name="codigo-seguranca" placeholder="XXX"
                   v-model="codigoSegurancaCartao" :disabled="pagamento == 'boleto'"
                   v-on:blur="touchForm('codigoSegurancaCartao')" v-mask="['###']">
            <div class="error" v-if="!$v.codigoSegurancaCartao.required && pagamento == 'cartao'
                                      && form.codigoSegurancaCartao.touched">
              <small>O código de segurança é obrigatório</small>
            </div>
          </div>
        </div>

        <hr>

        <p class="normal-font">Seu cartão será debitado em R$ 49,00</p>
        <button type="button" v-on:click="submit()" :disabled="$v.invalid">Realizar Matrícula</button>
        <p class="normal-font"><small>Informações seguras e criptografadas</small></p>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'
import axios from 'axios'

export default {
  name: 'Cadastro',
  mixins: [validationMixin],
  directives: { mask },
  data  () {
    return {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      estado: '',
      cep: '',
      cidade: '',
      pagamento: '',
      nomeCartao: '',
      mesDataExpiracao: '',
      anoDataExpiracao: 0,
      numeroCartao: '',
      codigoSegurancaCartao: '',
      form: {
        nome: { touched: false },
        email: { touched: false },
        cpf: { touched: false },
        endereco: { touched: false },
        estado: { touched: false },
        cep: { touched: false },
        cidade: { touched: false },
        pagamento: { touched: false },
        nomeCartao: { touched: false },
        mesDataExpiracao: { touched: false },
        anoDataExpiracao: { touched: false },
        numeroCartao: { touched: false },
        codigoSegurancaCartao: { touched: false }
      },
      ufs: [],
      municipios: []
    }
  },
  validations () {
    if (this.pagamento === 'cartao') {
      return {
        nome: { required, maxLength: maxLength(100) },
        email: { required, email },
        cpf: { required: true },
        endereco: { required: true, maxLength: maxLength(200) },
        estado: { required },
        cep: { required },
        cidade: { required },
        pagamento: { required },
        nomeCartao: { required, maxLength: maxLength(100) },
        mesDataExpiracao: { required },
        anoDataExpiracao: { required },
        numeroCartao: { required },
        codigoSegurancaCartao: { required }
      }
    } else {
      return {
        nome: { required, maxLength: maxLength(100) },
        email: { required, email },
        cpf: { required: true },
        endereco: { required: true, maxLength: maxLength(200) },
        estado: { required },
        cep: { required },
        cidade: { required },
        pagamento: { required },
        nomeCartao: { maxLength: maxLength(100) },
        mesDataExpiracao: {},
        anoDataExpiracao: {},
        numeroCartao: {},
        codigoSegurancaCartao: {}
      }
    }
  },
  methods: {
    submit () {
      if (!this.$v.invalid) {
        this.$store.commit('addMatricula', {
          nome: this.nome,
          email: this.email,
          cpf: this.cpf,
          endereco: this.endereco,
          estado: this.estado,
          cep: this.cep,
          cidade: this.cidade,
          pagamento: this.pagamento,
          nomeCartao: this.nome,
          mesDataExpiracao: this.mesDataExpiracao,
          anoDataExpiracao: this.anoDataExpiracao,
          numeroCartao: this.numeroCartao,
          codigoSegurancaCartao: this.codigoSegurancaCartao,
          data: new Date()
        })
        this.$v.$reset()
        this.resetForm()
      }
    },
    touchForm (field) {
      this.form[field].touched = true
    },
    resetForm () {
      this.nome = ''
      this.email = ''
      this.cpf = ''
      this.endereco = ''
      this.estado = ''
      this.cep = ''
      this.cidade = ''
      this.pagamento = ''
      this.nomeCartao = ''
      this.mesDataExpiracao = ''
      this.anoDataExpiracao = 0
      this.numeroCartao = ''
      this.codigoSegurancaCartao = ''
      this.form = {
        nome: { touched: false },
        email: { touched: false },
        cpf: { touched: false },
        endereco: { touched: false },
        estado: { touched: false },
        cep: { touched: false },
        cidade: { touched: false },
        pagamento: { touched: false },
        nomeCartao: { touched: false },
        mesDataExpiracao: { touched: false },
        anoDataExpiracao: { touched: false },
        numeroCartao: { touched: false },
        codigoSegurancaCartao: { touched: false }
      }
    },
    loadUFs () {
      const _this = this
      axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(function (response) {
          _this.ufs = response.data
        })
    },
    getMunicios (uf) {
      const _this = this
      axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf + '/municipios')
        .then(function (response) {
          _this.municipios = response.data
        })
    }
  },
  created () {
    this.loadUFs()
  }
}
</script>

<style scoped lang="scss">
  #cadastro {
    margin-top: 3rem;
  }

  .container {
    display: flex;
    .form-group {
      width: 48%;
    }

    .form-group:nth-child(even) {
      margin-left: 2%;
    }

    .form-group:nth-child(odd) {
      margin-right: 2%;
    }

    .data-expiracao-inputs {

      select {
        width: 46%;
      }

      select:nth-child(even) {
        margin-left: 4%;
      }

      select:nth-child(odd) {
        margin-right: 4%;
      }
    }
  }

  .form-group-radio-checkbox {
    label {
      display: inline;
    }
  }

  @media all and (max-width: 992px) {
    .container {
      display: block;
      .form-group {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }

      .form-group:nth-child(even) {
        margin-left: 0;
      }

      .form-group:nth-child(odd) {
        margin-right: 0;
      }

      .data-expiracao-inputs {
        select {
          width: 48%;
        }

        select:nth-child(even) {
          margin-left: 2%;
        }

        select:nth-child(odd) {
          margin-right: 2%;
        }
      }
    }
  }

</style>
