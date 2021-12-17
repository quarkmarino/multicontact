<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/quarkmarino/contactsapp">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Edit contacts list sample app</h3>

  <p align="center">
    A website that allows the user to list, create, edit and delete contacts info.
    <br />
    <!-- <a href="https://github.com/quarkmarino/contactsapp">View Demo</a> -->
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][screenshot]](screenshot.png) -->

#### Front-End

Your task is to create a web page that allows users to create, edit and delete the following basic information for a contact:

- name
- email
- phone

#### Back-End

The back end should be an API that handles the CRUD actions of such contact information:

### Requirements and Specifications

#### Front-End

A form and the ccontacts list must then be displayed on the web page.

* Differentiate the form create from the update actions.
* Implement validation for the form fields.
* List the existing contacts with action buttons for edit and delete such contacts.

#### Back-End

The API should

* Use model binding for the Contact routes.

### Built With

* [Laravel](https://laravel.com/)
* [VueJS](https://vuejs.org/)
* [Boostrap 4](https://getbootstrap.com/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Install composer dependencies via [Composer](https://getcomposer.com)

* Composer

  ```sh
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"
  ```
* Install docker and docker-compose
  * [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
  * [Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)


### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:quarkmarino/multicontact.git
   ```
2. Install Composer dependencies
   ```sh
   cd multicontact.test
   composer install
   ```
3. Start the Sail docker containers
   ```sh
   ./vendor/bin/sail up -d
   ```
4. Visit the running server
    * open [localhost](http://localhost)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Jose Mariano Escalera Sierra - [@quarkmarino](https://twitter.com/quarkmarino) - mariano.pualiu@gmail.com

Project Link: [https://github.com/quarkmarino/multicontact.test](https://github.com/quarkmarino/multicontact.test)
