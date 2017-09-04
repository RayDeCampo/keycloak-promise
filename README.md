# keycloak-promise.js

Provides a wrapper around the [Keycloak](http://www.keycloak.org/) javascript adapter using ES6 native `Promise` objects instead of the homegrown Keycloak promise objects.

## Installation

Copy the `keycloak-promise.js` file into your web root.

Add the `keycloak-promise.js` script after the Keycloak javascript adapter script in your HTML:

```html
<script type="text/javascript" src="http://localhost:8080/auth/js/keycloak.js"></script>
<script type="text/javascript" src="keycloak-promise.js"></script>
```

## Usage

The `KeycloakPromise` class provides an interface identical to the Keycloak javascript adapter, except that it returns ES6 native `Promise` instances whenever the adapter would return a promise.  Refer to the [Keycloak documentation](http://www.keycloak.org/documentation.html) for details on using the javascript adapter.

### Example

The following example shows creating the `KeycloakPromise` instance, initializing, logging in (if necessary) and then loading the user's profile:

```javascript
var kcp = new KeycloakPromise();
kcp.init({"onLoad": "check-sso"}).then(function(authenticated) {
    if (!authenticated) {
        return kcp.login();
    }
}).then(function() {
    return kcp.loadUserProfile();
}).then(function(profile) {
    console.log(profile);
    // Do something with profile
}).catch(function(error) {
    console.log(error);
});
```

## Details

The current version of Keycloak as of this writing is 3.3.0.CR1.  The `KeycloakPromise` class was written against the [3.3 version of the Keycloak javascript adapter](http://www.keycloak.org/docs/3.3/securing_apps/topics/oidc/javascript-adapter.html).
