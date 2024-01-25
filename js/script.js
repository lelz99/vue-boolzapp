const { createApp } = Vue
const app = createApp({
    data() {
        return{
            user,
            contacts,
        }
    },
    computed: {

    },
    methods: {
        getAvatarUrl({avatar}) {
            return `img/avatar${avatar}.jpg`
        },
    }
})

app.mount('#root')
