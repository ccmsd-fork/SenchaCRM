# Sencha CRM

Open-source CRM application powered by latest [Sencha](https://www.sencha.com/) web technologies.

<img src="http://senchacrm.com/images/logo.png" alt="SenchaCRM" width="150"/>

The demo site is here: [SenchaCRM on Heroku](https://senchacrm.herokuapp.com/)

<img src="http://senchacrm.com/images/hero.png" alt="SenchaCRM" width="500"/>

# REQUIREMENTS

### RUN

1. [Sencha Ext JS 6.5.2](https://www.sencha.com/products/extjs/evaluate/)
2. [Sencha Cmd 6.5.2](https://www.sencha.com/products/extjs/cmd-download/)
3. [Java SE Development Kit 1.8+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
4. [Maven](https://maven.apache.org/download.cgi)
5. [PostgreSQL](http://www.postgresql.org/download/)

# GETTING STARTED

Clone the repository.

    $ git clone https://github.com/shinobukawano/SenchaCRM

## Server

Create database named "senchacrm" on your PostgreSQL DB, and update `src/main/resources/application.yml` to fit your environment.

    datasource:
      ...
      url: jdbc:postgresql://localhost:5432/senchacrm
      username: shinobukawano
      password:
      ...

Run the Spring Boot application.

    $ cd SenchaCRM/server
    $ mvn spring-boot:run

## Client

Setup `Sencha Ext JS` SDK (v6.5.2 is required).

    $ cd SenchaCRM/client
    $ sencha app upgrade {path/to/Ext-JS-SDK}

Run the Sencha application.

    $ sencha app watch

Then, you can access a `Sencha CRM` application via localhost:1841.

# AUTHOR

* [Shinobu Kawano](https://github.com/shinobukawano) - [http://shinobukawano.com](http://shinobukawano.com)

# LICENSE

Licensed under the GPL v3 License.

