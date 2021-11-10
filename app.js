const vm = new Vue({
    el: '#app',
    data: {
        carros: [],
        marcas: [],
        versoes: [],
        selected: '',
        nomeCarro: '',
        anos: [],
        ano: '',
        fotoDestaque: ''
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
              })
          },
          fetchVersoes(id) {            
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
            return this.versoes[this.ano]
        }
    },
      created() {
       // this.fetchCarros();
        this.fetchMarcas();
        this.fetchVersoes()
       
      }
})