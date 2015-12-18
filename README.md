# Sencha CRM

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kawanoshinobu/senchacrm/tree/master
)

[![Build Status](https://travis-ci.org/kawanoshinobu/Triplam.svg?branch=master)](https://travis-ci.org/kawanoshinobu/SenchaCRM)

# OVERVIEW

CRM application powered by latest [Sencha](https://www.sencha.com/) web technologies.

<img src="http://senchacrm.com/images/logo.png" alt="SenchaCRM" width="150"/>

DEMO SITE is here: [SenchaCRM on Heroku](https://senchacrm.herokuapp.com/)

<img src="http://senchacrm.com/images/hero.png" alt="SenchaCRM" width="500"/>

# REQUIREMENTS

### RUN

1. [Sencha Ext JS 6.0.1](https://www.sencha.com/products/extjs/evaluate/)
2. [Sencha Cmd 6+](https://www.sencha.com/products/extjs/cmd-download/)
3. [Java SE Development Kit 8+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
4. [Maven 3+](https://maven.apache.org/download.cgi)
5. [PostgreSQL 9+](http://www.postgresql.org/download/)

### DEVELOPMENT

1. [Eclipse 4.2+](http://www.eclipse.org/downloads/)
2. [Lombok](https://projectlombok.org/download.html)

### OPTIONAL

1. [WebStorm 11+](https://www.jetbrains.com/webstorm/download/)
2. [Heroku Toolbelt](https://toolbelt.heroku.com/)

# GETTING STARTED

Clone the repository.

    $ git clone https://github.com/shinobukawano/SenchaCRM

Install Sencha Ext JS SDK.

    $ cd SenchaCRM/src/main/resources/public
    $ sencha app upgrade {path/to/Ext-JS-SDK}

Build the Sencha application.

    $ sencha app build development

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

Then, you can access SenchaCRM application via localhost:8080.

### DEVELOPMENT

Import project to your Eclipse workspace.   

[File] -> [Import] -> [Existing Maven Project], and select the cloned repository.

**Don't forget to add `lombok.jar` to Java build path on your Eclipse project.**

# AUTHOR

* [Shinobu Kawano](https://github.com/shinobukawano) - [http://shinobukawano.com](http://kawanoshinobu.com)

# LICENSE

Licensed under the GPL v3 License.
