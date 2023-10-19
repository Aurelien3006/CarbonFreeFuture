const app = new Vue({
    el: '#app',
    data: {
        developers: 'Aurélien BRONCARD, Elodie COULLOC\'H, Riccardo DAFFARA',
        company_name: 'Carbon Free Future'
    },
    computed: {
        copyright() {
            const currentYear = new Date().getFullYear()
            return `${currentYear} ${this.company_name} | ${this.developers}. All rights reserved.`
        },
        date() {
            const currentDate = new Date().getDate()
            const currentMonth = new Date().getMonth()
            const currentYear = new Date().getFullYear()
            return `${currentMonth}/${currentDate}/${currentYear}`
        }
    }
})