new Vue({
    el: '#app',
    data: {
        name: 'Maria Joaquina',
        age: 28,
        image: 'https://picsum.photos/200/300'
    },
    methods: {
        ageMultiply3() {
            return this.age * 3
        },
        random() {
            return Math.random()
        }
    }
})