{
    "name": "<%= botname %>",
    "version": "1.0.0",
    "description": "<%= botDescription %>",
    "author": "Generated using Microsoft Bot Builder Yeoman generator v<%= version %>",
    "license": "MIT",
    "main": "<%= npmMain %>",
    "scripts": {
        "build": "tsc",
        "start": "tsc && node ./lib/index.js",
        "watch": "concurrently --kill-others \"tsc -w\" \"nodemon ./lib/index.js\"",
        "lint": "tslint -c tslint.json 'src/**/*.ts'",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com"
    },
    "dependencies": {
        "botbuilder": "^4.1.5",
        "botbuilder-ai": "^4.1.5",
        "botbuilder-core": "^4.1.5",
        "botbuilder-dialogs": "^4.1.5",
        "botframework-config": "^4.1.5",
        "botframework-connector": "^4.1.5",
        "botframework-schema": "^4.1.5",
        "dotenv": "^6.1.0",
        "restify": "^7.2.3"
    },
    "devDependencies": {
        "@types/dotenv": "6.1.0",
        "@types/restify": "7.2.6",
        "concurrently": "^4.0.1",
        "nodemon": "^1.18.6"
    }
}
