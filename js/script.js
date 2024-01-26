const { createApp } = Vue
const app = createApp({
    data() {
        return{
            user,
            contacts,
            currentId: 1,
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find(contact => contact.id === this.currentId)
        },
        currentChat(){
            return this.currentContact.messages
        },
    },
    methods: {
        getAvatarUrl({avatar}) {
            return `img/avatar${avatar}.jpg`
        },
        setCurrentId(id){
            this.currentId = id
            console.log(id)
        },
    }
})

app.mount('#root')