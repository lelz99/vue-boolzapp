const { createApp } = Vue
const app = createApp({
    data() {
        return {
            user,
            contacts,
            currentId: null,
            newMessageText: '',
            searchChat: '',
        }
    },
    computed: {

        currentContact() {
            return this.contacts.find(contact => contact.id === this.currentId)
        },

        currentChat() {
            return this.currentContact.messages
        },

        lastMessDate() {
            return this.contacts.map(contact => {
                const lastMessage = contact.messages[contact.messages.length - 1];
                return {
                    contactId: contact.id,
                    lastMessageText: lastMessage.text,
                    lastMessageDate: lastMessage.date
                };
            });
        },

        lastAccess() {
            console.log(this.currentChat[this.currentChat.length - 1].date)
            return this.currentChat[this.currentChat.length - 1].date;
        },

        // SEARCH CHAT
        filterChat() {

            searchText = this.searchChat.toLowerCase()

            const filterContact = this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchText)
            )

            return filterContact
        },

    },
    methods: {

        getAvatarUrl({ avatar }) {
            return `img/avatar${avatar}.jpg`
        },

        setCurrentId(id) {
            this.currentId = id
        },

        addMessage(status, text) {
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleString(),
                status,
                text
            }

            this.currentChat.push(newMessage)
        },

        //SEND MESSAGE AND REPLY
        sendMessage() {
            if (!this.newMessageText) return

            this.addMessage('sent', this.newMessageText)
            this.newMessageText = ''

            setTimeout(() => {
                this.addMessage('received', 'ok')
            }, 1000)
        },

        // Deleted messagee
        deleteTask(id) {
            const newTasks = this.tasks.filter(task => id !== task.id)
            this.tasks = newTasks
        },
    },

    created() {

        this.currentId = this.contacts[0].id
    },
})

app.mount('#root')