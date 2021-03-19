//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Vue.config.devtools = true;
var app = new Vue({
    el: '#root',
    data: {
        message: 'Hello, Welcome in MSI',
        image: 'img/msi_1.jfif', //Bonus 1: img aggiunta
        products: 'Prodotti'
    },


//ho provato ad aggiungere altre foto usando una funzione Vue
    methods: {
        changeImg: function() {
            if (this.image === 'img/msi_1.jfif'){
                this.image = 'img/msi_2.jfif'
            } else if (this.image === 'img/msi_2.jfif'){
                this.image = 'img/msi_3.jfif';
                this.products = 'Prodotti'
            } else if (this.image === 'img/img/msi_3.jfif'){
                this.image = 'img/msi_1.jfif';
                this.products = 'Prodotti'
            }
        }
    }
});