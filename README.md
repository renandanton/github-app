# Github App

This is a simple github app to display users data.

## Description

This is a simple github app project build to show users data. it was build in nodejs and typescript.

## Requeriments

You need install this softwares in your computer.

    $ node 8.11 or higher
    
    $ npm 5.6 or higher

    $ git client


## Docker Installation

I suggest you use [docker](https://docs.docker.com/engine/installation/) and [docker-composer](https://docs.docker.com/compose/install/)  and then execute this instructions:

    $ git clone https://github.com/renandanton/github-app.git

    $ cd github-app

    $ docker-compose up -d

that's all, your api payment is ready for use.


## Manual Installation

Follow the steps below to intall manually this project.

    $ git clone https://github.com/renandanton/github-app.git
    
    $ cd github-app
    
    $ npm install 

    $ npm run build
    
    $ npm start

## How to use 

Please read the information below.

|   Verb   |             Route             |
|:--------:| :----------------------------:|
|   GET    | /api/users/since/:since       |
|   GET    | /api/users/:username/details  |
|   GET    | /api/users/:username/repos    |


## Testing

If you want run tests in this project, please type this command:

``` bash
  $ npm test
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/renandanton/github-app.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

