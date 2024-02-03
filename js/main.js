let { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Digita l\'obiettivo che desideri acquistare',
            items: [
                {
                    name: 'Fuji WR 56 f1.2',
                    done: true,
                },
                {
                    name: 'Fuji WR 18 f1.4',
                    done: false,
                },
                {
                    name: 'Fuji WR 33 f1.4',
                    done: true,
                },
                {
                    name: 'Fuji WR 90 f2',
                    done: false,
                },
            ],

            newItem: {
                name: '',
                done: false,
            }
        };
    },

    // Controllo di inserimento testo
    methods: {
        printNewItem() {
            const newItemCopy = { ...this.newItem };
            if (!newItemCopy.name) {
                alert('Devi scrivere del testo');
                return;
            }
            this.items.push(newItemCopy);
        },
    },

    mounted() {
        console.log();
    }
});

app.mount('#app');