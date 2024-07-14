# lumelAssignment
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Node.js version 16 and above
- Docker version 18.09.2 or higher ([Installation Guide](https://www.docker.com/products/docker-desktop))
- Git ([Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))

### Clone Project
- Add .env file with database credentials

- Run database docker

```
$ docker-compose up
```

- Run application

```
$ yarn start
```

- Generate migration

```
$ yarn run typeorm:run
```

- Stop application

```
$ yarn stop
```

- Default account to login in local

