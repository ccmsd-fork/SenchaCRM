# Sencha CRM

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kawanoshinobu/senchacrm/tree/master
)

[![Build Status](https://travis-ci.org/kawanoshinobu/Triplam.svg?branch=master)](https://travis-ci.org/kawanoshinobu/SenchaCRM)

# OVERVIEW

CRM application powered by latest [Sencha](https://www.sencha.com/) web technologies.

![SenchaCRM](http://www.triplam.com/resources/images/mini.png)

DEMO SITE is here: [SenchaCRM on Heroku](https://senchacrm.herokuapp.com/)

# REQUIREMENTS

### RUN

1. [Sencha Ext JS 6.0.1](https://www.sencha.com/products/extjs/evaluate/)
2. [Sencha Cmd 6+](https://www.sencha.com/products/extjs/cmd-download/)
3. [Java SE Development Kit 8+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
4. [Maven 3+](https://maven.apache.org/download.cgi)

### DEVELOPMENT

1. [Eclipse 4.2+](http://www.eclipse.org/downloads/)
2. [Lombok](https://projectlombok.org/download.html)

### OPTIONAL

1. [PostgreSQL 9+](http://www.postgresql.org/download/)
2. [Heroku Toolbelt](https://toolbelt.heroku.com/)
3. [WebStorm 11](https://www.jetbrains.com/webstorm/download/)

# GETTING STARTED

Clone the repository.

    $ git clone https://github.com/kawanoshinobu/SenchaCRM

Install Sencha Ext JS SDK.

    $ cd SenchaCRM/src/main/resources/public
    $ sencha app upgrade {path/to/Ext-JS-SDK}

Build the Sencha application.

    $ sencha app build development

Run the Spring Boot application.

    $ cd SenchaCRM
    $ mvn spring-boot:run

Then, you can access SenchaCRM application via localhost:8080. 

# AUTHOR

* [Shinobu Kawano](https://github.com/kawanoshinobu) - [http://kawanoshinobu.com](http://kawanoshinobu.com)

# LICENSE

Licensed under the GPL v3 License.
