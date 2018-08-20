new Vue({
    el: '#app',
    data: {
        inputMessage: '',
        messages: [{
            id: 1,
            message: 'Первое сообщение'
        }, {
            id: 2,
            message: 'Второе сообщение'
        }, {
            id: 3,
            message: 'Третье сообщение'
        }]
    },


    /**
     * Инициализация компонента
     */
    created: function () {
        const self = this;
        this.ws = new WebSocket('ws://localhost:3000');

        /**
         * При успешном соединении с вебсокетом
         */
        this.ws.onopen = function () {
            console.log('Подключено к вебсокету');
        };

        /**
         * При закрытии коннекта с вебсокетом
         */
        this.ws.onclose = function () {
            console.log('Соединение с вебсокетом закрыто');
        };

        /**
         * Если от вебсокета прилетело сообщение
         *
         * @param {object} message
         */
        this.ws.onmessage = function (message) {
            self.add(message.data);
        }
    },


    /**
     * Список методов компонента
     */
    methods: {
        /**
         * Обработка сабмита формы
         */
        submit: function () {
            if (!!this.inputMessage) {
                this.send(this.inputMessage);
                this.inputMessage = '';
            }
        },


        /**
         * Отобразить сообщение в чате
         * @param message
         */
        add (message) {
            this.messages.unshift({
                id: this.messages.length + 1,
                message: message
            });
        },


        /**
         * Отправка сообщения в чат
         * @param message
         */
        send (message) {
            this.ws.send(message);
        }
    }
});
