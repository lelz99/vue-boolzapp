const { createApp } = Vue
const app = createApp({
    data() {
        return{
            user,
            contacts,
            currentId: 1,
            newMessageText: '',
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
        sendMessage(){
            if(!this.newMessageText) return

            const newMessage = {
                id: new Date().toISOString(),
                date: 'data da inserire...',
                status: 'sent',
                text: this.newMessageText,
            }

            this.currentChat.push(newMessage)
            this.newMessageText = ''

            setTimeout(() => {
                const newMessage = {
                    id: new Date().toISOString(),
                    date: 'data da inserire...',
                    status: 'received',
                    text: 'ok',
                }
                this.currentChat.push(newMessage)
            }, 1000)
        },
    }
})

app.mount('#root')