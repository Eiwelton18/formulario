<template>
  <Toast />

  <div>
    <Panel header="Formulário Desafio CTIS" :toggleable="true">
      <br />
      <!--Exemplo de como exibir o TOAST de Erro-->
      <!--<Button label="Erro" class="p-button-danger" @click="showError" /> <br />-->

      <div class="p-fluid grid formgrid">
        <div class="field col-12 md:col-2">
          <div>
            <label for="basic">Nome</label>
            <InputMask mask="" v-model="val1" placeholder="Nome" />
          </div>
          <br />

          <div>
            <InputText id="username" type="text" v-model="value" />
            <label for="username">Sexo</label>
            <TreeSelect
              v-model="selectedNodes1"
              :options="nodes"
              selectionMode="multiple"
              :metaKeySelection="false"
              placeholder="Selecione"
            ></TreeSelect>
          </div>
          <br />

          <div>
            <label for="ssn">CPF</label>
            <InputMask mask="999-999-999-99" v-model="val2" placeholder="CPF" />
          </div>
          <br />

          <div>
            <label for="basic">Telefone</label>
            <InputMask
              mask="99-999999"
              v-model="val1"
              placeholder="DDD (91)
          "
              :showIcon="true"
            />
          </div>

          <br />
          <div>
            <label for="date">Data de Nascimento</label>
            <Calendar id="date" v-model="value" :showIcon="true" />
          </div>
        </div>
      </div>

      <Button label="Cadastrar" class="p-button-success" @click="show" />
    </Panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //value = data de nascimento
      value: null,

      //val1 = recebe o numero de telefone
      val1: null,

      selectedNodeKey: null,
      nodes: null,
    };
  },
  methods: {
    show() {
      //alert("exibir");
      this.$toast.add({
        severity: "success",
        summary: "Alerta de Sucesso",
        detail: "Cadastrado com Sucesso",
      });
    },
    showError() {
      //alert("exibir");
      this.$toast.add({
        severity: "error",
        summary: "Alerta de Erro",
        detail: "Erro ao Cadastrar",
      });
    },

    //Função para que não prossiga sem digitar o Nome, o E-mail, a Senha e Aceitar os termos!
    /*validations() {
      return {
        name: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          required,
        },
        accept: {
          required,
        },
      };
    },
  },
  */
  },
};
</script>

<style>
</style>