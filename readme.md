# MEAN Website

![in production status](https://dannbonderff.fr/assets/images/status-production.png)

Personnal portfolio and resume website, based on MEAN stack (MongoDB, Express, Angular, NodeJS).
Even if there are very few interactions between front and back end, APIs are set.

SSL certificates are managed with [letsencrypt](https://letsencrypt.org).

### Installation

##### Test environment

Open your favorite Terminal and run these commands.
_with npm_

```sh
$  npm install
$  npm run both-dev
```

Web interface will be reachable on : [localhost:4200](http://localhost:4200)

**A password will be needed** to reached website in DEV mode.
These credentials can be created with :
_with your favorite API client_

```sh
POST localhost/auth/register

{
	"name":YOUR_NAME,
	"email":YOUR_EMAIL,
	"password":YOUR_PASSWORD
}
```

You can desactivate this feature by modifying the `env` file at : `/client/src/environments`

##### Production environment

Open your favorite Terminal and run these commands.
_with npm_

```sh
$  npm install
$  npm run final-prod
```

Web interface will be reachable on : [localhost](https://localhost)
**Be sure to previously set SSL certificates.**

### Photographs

To be displayed in the gallery tab, pictures must be placed in `/client/src/assets/gallery`
