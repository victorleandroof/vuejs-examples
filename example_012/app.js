new Vue({
    el: '#app',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert('HI!!!');
        },
        updatedValue(event) {
            this.value = event.target.value
        }
    }
})