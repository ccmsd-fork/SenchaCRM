# Sencha CRM

An open source CRM application powered by latest [Sencha](https://www.sencha.com/) web technologies.

<img src="http://senchacrm.com/images/logo.png" alt="SenchaCRM" width="150"/>

The DEMO SITE is here: [SenchaCRM on Heroku](https://senchacrm.herokuapp.com/)

<img src="http://senchacrm.com/images/hero.png" alt="SenchaCRM" width="500"/>

# REQUIREMENTS

### RUN

1. [Sencha Ext JS 6.0.2](https://www.sencha.com/products/extjs/evaluate/)
2. [Sencha Cmd 6+](https://www.sencha.com/products/extjs/cmd-download/)
3. [Java SE Development Kit 1.8+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
4. [Maven](https://maven.apache.org/download.cgi)
5. [PostgreSQL](http://www.postgresql.org/download/)

### DEVELOPMENT

1. [WebStorm](https://www.jetbrains.com/webstorm/download/)
2. [Sencha IDE Plugins](https://www.sencha.com/products/ide-plugins/)
3. [Eclipse](http://www.eclipse.org/downloads/)
4. [Lombok](https://projectlombok.org/download.html)
5. [Heroku Toolbelt](https://toolbelt.heroku.com/)

# GETTING STARTED

Clone the repository.

    $ git clone https://github.com/shinobukawano/SenchaCRM

Setup `Sencha Ext JS` SDK (v6.0.2 is required).

    $ cd SenchaCRM/client
    $ sencha app upgrade {path/to/Ext-JS-SDK}

Build the Sencha application.

    $ sencha app build

Create database named "senchacrm" on your PostgreSQL DB, and update `src/main/resources/application.yml` to fit your environment.

    datasource:
      ...
      url: jdbc:postgresql://localhost:5432/senchacrm
      username: shinobukawano
      password:
      ...

Run the Spring Boot application.

    $ cd SenchaCRM
    $ mvn spring-boot:run

Then, you can access a `Sencha CRM` application via localhost:8080.

### DEVELOPMENT

Import project to your Eclipse workspace.   

[File] -> [Import] -> [Existing Maven Project], and select the `server` directory of the cloned repository.

**Don't forget to add `lombok.jar` to Java build path on your Eclipse project.**

# AUTHOR

* [Shinobu Kawano](https://github.com/shinobukawano) - [http://shinobukawano.com](http://shinobukawano.com)

# LICENSE

Licensed under the GPL v3 License.
