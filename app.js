const vm = new Vue({
    el: '#app',
    data: {
        carros: [],
        marcas: [],
        versoes: [],
        selected: '',
        nomeCarro: '',
        anos: [],
        ano: ''

    },
    methods: {
        fetchCarros() {
            //console.log(this.selected)
            fetch(`/api/carros/${this.selected}/dados.json`)
              .then(r => r.json())
              .then(r => {
                this.carros = r;
               // console.log(r)
              })
          },
          fetchMarcas() {
            fetch(`/api/carros/marcas.json`)
              .then(r => r.json())
              .then(r => {
                this.marcas = r;
               // console.log(r)
              })
          },
          fetchVersoes(id) {            
              console.log(this.nome)
              fetch(`api/carros/${this.selected}/versoes/${this.nomeFormatado}.json`)
              .then(r => r.json())
              .then(r => {
                this.versoes = r;
                this.anos = Object.keys(r)
                console.log(this.anos)
               // console.log(r['2011'])
              })
          }
    },   
    computed: {
        nomeFormatado(){
            if(this.nomeCarro){
                return this.nomeCarro.toLowerCase()
            }
            return ''            
        },
        versaoAno(){
            //console.log('entrou')
            return this.versoes[this.ano]
        }
    },
      created() {
       // this.fetchCarros();
        this.fetchMarcas();
        this.fetchVersoes()
       
      }
})