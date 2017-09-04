# keycloak-promise.js Test Bed

This is a simple test bed for the keycloak-promise.js wrapper around the Keycloak javascript adapter.

## Setup

Set up a Keycloak server, easiest way is via docker:

```
docker run -d -p 8080:8080 \
    -e KEYCLOAK_USER=admin \
    -e KEYCLOAK_PASSWORD=admin \
    --name keycloak jboss/keycloak
```

Then log into the Keycloak admin console and import the `example-client.json` file.

## Use

Select the Keycloak method you wish to invoke and press the _Invoke_ button.

If the Keycloak method you want to invoke takes an `options` object, e.g. `login()`, then enter the object using JSON format in the _Input_ textarea.

If the method takes arguments, e.g. `hasRealmRole()`, then enter the arguments in a JSON array in the _Input_ textarea, e.g. `["user"]`.
