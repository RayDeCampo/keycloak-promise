/*
The MIT License (MIT)
Copyright (c) 2017 Raymond DeCampo <ray@decampo.org>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function(window, undefined) {

    var KeycloakPromise = function (config) {
        if (!(this instanceof KeycloakPromise)) {
            return new KeycloakPromise(config);
        }
        Keycloak.call(this, config);

        // A little housecleaning to facilitate using prototype to override
        // Keycloak methods
        this._keycloak = {};

        // Copy functions from the Keycloak instance into _keycloak
        this._keycloak.accountManagement = this.accountManagement;
        this._keycloak.clearToken = this.clearToken;
        this._keycloak.createAccountUrl = this.createAccountUrl;
        this._keycloak.createLoginUrl = this.createLoginUrl;
        this._keycloak.createLogoutUrl = this.createLogoutUrl;
        this._keycloak.createRegisterUrl = this.createRegisterUrl;
        this._keycloak.hasRealmRole = this.hasRealmRole;
        this._keycloak.hasResourceRole = this.hasResourceRole;
        this._keycloak.init = this.init;
        this._keycloak.isTokenExpired = this.isTokenExpired;
        this._keycloak.loadUserProfile = this.loadUserProfile;
        this._keycloak.login = this.login;
        this._keycloak.logout = this.logout;
        this._keycloak.register = this.register;
        this._keycloak.updateToken = this.updateToken;

        // Delete the function-valued properties defined by Keycloak from this
        // so that we can override them using prototype
        delete this.accountManagement;
        delete this.clearToken;
        delete this.createAccountUrl;
        delete this.createLoginUrl;
        delete this.createLogoutUrl;
        delete this.createRegisterUrl;
        delete this.hasRealmRole;
        delete this.hasResourceRole;
        delete this.init;
        delete this.isTokenExpired;
        delete this.loadUserProfile;
        delete this.login;
        delete this.logout;
        delete this.register;
        delete this.updateToken;
    }

    KeycloakPromise.prototype = Object.create(Keycloak.prototype);
    KeycloakPromise.prototype.constructor = KeycloakPromise;

    KeycloakPromise.prototype.accountManagement = function(options) {
        return new Promise(function(resolve, reject) {
            this._keycloak.accountManagement(options)
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    KeycloakPromise.prototype.clearToken = function(options) {
        return this._keycloak.clearToken(options);
    };

    KeycloakPromise.prototype.createAccountUrl = function(options) {
        return this._keycloak.createAccountUrl(options);
    };

    KeycloakPromise.prototype.createLoginUrl = function(options) {
        return this._keycloak.createLoginUrl(options);
    };

    KeycloakPromise.prototype.createLogoutUrl = function(options) {
        return this._keycloak.createLogoutUrl(options);
    };

    KeycloakPromise.prototype.createRegisterUrl = function(options) {
        return this._keycloak.createRegisterUrl(options);
    };

    KeycloakPromise.prototype.hasRealmRole = function(role) {
        return this._keycloak.hasRealmRole(role);
    };

    KeycloakPromise.prototype.hasResourceRole = function(role, resource) {
        return this._keycloak.hasResourceRole(role, resource);
    };

    KeycloakPromise.prototype.init = function(options) {
        return new Promise(function(resolve, reject) {
            this._keycloak.init(options)
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    KeycloakPromise.prototype.isTokenExpired = function(role, resource) {
        return this._keycloak.isTokenExpired(role, resource);
    };

    KeycloakPromise.prototype.loadUserProfile = function() {
        return new Promise(function(resolve, reject) {
            this._keycloak.loadUserProfile()
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    KeycloakPromise.prototype.login = function(options) {
        return new Promise(function(resolve, reject) {
            this._keycloak.login(options)
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    KeycloakPromise.prototype.logout = function(options) {
        return new Promise(function(resolve, reject) {
            this._keycloak.logout(options)
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    KeycloakPromise.prototype.register = function(options) {
        return new Promise(function(resolve, reject) {
            this._keycloak.register(options)
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    KeycloakPromise.prototype.updateToken = function(options) {
        return new Promise(function(resolve, reject) {
            this._keycloak.updateToken(options)
                .success(function(result) { resolve(result); })
                .error(function(error) { reject(error) });
        }.bind(this));
    };

    if ( typeof module === "object" && module && typeof module.exports === "object" ) {
        module.exports = KeycloakPromise;
    } else {
        window.KeycloakPromise = KeycloakPromise;

        if ( typeof define === "function" && define.amd ) {
            define( "keycloak-promise", [], function () { return KeycloakPromise; } );
        }
    }

})(window);
