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
In separate terminal
$ docker-compose up
```

- Generate migration

```
Update migrations: ['src/database/migrations/*.ts'] inside config.ts inside database folder,
$ yarn run typeorm:run
```

- Run application

```
Update migrations: ['dist/database/migrations/*.js'] inside config.ts inside database folder,
$ yarn start
```

- Stop application

```
$ yarn stop
```

