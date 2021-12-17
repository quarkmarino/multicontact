/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('contact-create-form-component', require('./components/ContactCreateFormComponent.vue').default);
// Vue.component('contact-edit-form-component', require('./components/ContactEditFormComponent.vue').default);
// Vue.component('contacts-list-component', require('./components/ContactsListComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: function() {
        return {
            contactId: null,
            contact: {
                name: '',
                email: '',
                phone: '',
            },

            formErrors: {
                errors: {},
                message: ''
            },
            formSuccess: {
                message: ''
            },

            contactsList: []
        }
    },

    methods: {
        newContact: function(){
            this.contactId = null
            this.contact = {name: '', email: '', phone: ''}
            this.formErrors = {
                errors: {},
                message: ''
            }
        },
        submit: function() {
            if (this.contactId != null) {
                axios
                    .put('/contacts/' + this.contactId, this.contact)
                    .then(function(response) {
                        this.formSuccess.message = "Contact info has been updated correctly"
                        this.newContact()
                        this.fetchContacts()
                    }.bind(this))
                    .catch(function(error) {
                        this.formErrors.errors = error.response.data.errors
                        this.formErrors.message = error.response.data.message
                    }.bind(this))
            }
            else {
                axios
                    .post('/contacts', this.contact)
                    .then(function(response) {
                        this.formSuccess.message = "Contact info has been stored correctly"
                        this.newContact()
                        this.fetchContacts()
                    }.bind(this))
                    .catch(function(error) {
                        this.formErrors.errors = error.response.data.errors
                        this.formErrors.message = error.response.data.message
                    }.bind(this))
            }
        },
        edit: function(contact) {
            this.contactId = contact.id
            this.contact.name = contact.name
            this.contact.email = contact.email
            this.contact.phone = contact.phone
        },
        remove: function(contact) {
            if (confirm(`Alert, you are about to delete the contact info for the following contact email: ${contact.email}. Are you sure?`)) {
                axios
                    .delete('/contacts/' + contact.id)
                    .then(function(response) {
                        this.formSuccess.message = "Contact info has been removed correctly"
                        this.fetchContacts()
                    }.bind(this))
            }
        },
        fetchContacts: function() {
            axios
              .get('/contacts')
              .then(response => (this.contactsList = response.data.data))
        }
    },

    mounted: function(){
        this.fetchContacts()
    }
});
