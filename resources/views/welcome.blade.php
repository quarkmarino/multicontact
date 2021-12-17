@extends('layouts.main')

@section('content')
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Add Contact</h2>
                <div v-if="formErrors.message.length != 0" class="alert alert-danger">
                    @{{ formErrors.message }}
                </div>
                <div v-if="formSuccess.message.length != 0" class="alert alert-success" role="alert">
                    @{{ formSuccess.message }}
                </div>
                <form class="form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" name="name" v-model="contact.name">
                        <ul v-if="formErrors.errors['name']">
                            <li v-for="error in formErrors.errors['name']" class="text-danger">
                                @{{ error }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" type="text" name="email" v-model="contact.email">
                        <ul v-if="formErrors.errors['email']">
                            <li v-for="error in formErrors.errors['email']" class="text-danger">
                                @{{ error }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input class="form-control" type="text" name="phone" v-model="contact.phone">
                        <ul v-if="formErrors.errors['phone']">
                            <li v-for="error in formErrors.errors['phone']" class="text-danger">
                                @{{ error }}
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <button v-if="contactId != null" class="btn btn-primary" @click="newContact()">New Contact</button>
                    <input class="btn btn-info" type="submit" value="Save Contact" @click.prevent="submit">
                </form>
            </div>
            <div class="col-md-12 contacts-container">
                <h2>Contacts</h2>
                <ul class="list-group">
                    <li v-for="contact in contactsList" class="list-group-item">
                        <strong class="text-danger">Contact @{{ contact.name }}</strong>
                        <strong class="text-danger">@{{ contact.email }}</strong>
                        <strong class="text-danger">@{{ contact.phone }}</strong>
                        <button class="btn btn-secondary" @click="edit(contact)">Edit</button>
                        <button class="btn btn-danger" @click="remove(contact)">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
@endsection
