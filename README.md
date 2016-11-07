# propeller-sharepoint
A SharePoint deployer plugin for [Propeller](https://github.com/oldrivercreative/propeller). This deployer uses [gulp-spsave](https://www.npmjs.com/package/gulp-spsave) to handle authentication and file transfers during deployment. This package is compatible with SharePoint 2013, SharePoint 2016, and Office 365/SharePoint Online environments.

## Getting Started
Install Propeller and propeller-sharepoint using [npm](https://www.npmjs.com/get-npm):
```sh
npm install gulp-propeller --save-dev
npm install propeller-sharepoint --save-dev
```

Create a `propeller.json` file in your project directory that contains your SharePoint connection information. Specify the connection type as `sharepoint`:
```json
{
  "environments": {
    "o365": {
      "type": "sharepoint",
      "src": "build/**",
      "dest": "_catalogs/masterpage/test",
      "connection": {
        "site": "https://mytenant.sharepoint.com/",
        "user": "hello@contoso.com",
        "pass": "mypassword"
      }
    }
  }
}
```

Create a [Gulp](http://gulpjs.com/) task to deploy your files:
```js
const gulp = require('gulp');
const propeller = require('gulp-propeller');
const propellersp = require('propeller-sharepoint');

gulp.task('default', function(){

  // add sharepoint deployer to propeller
  propeller.extend(propellersp);

  // deploy to 'o365' environment
  propeller.deploy('o365');

});
```

---

See the [Propeller documentation](https://github.com/oldrivercreative/propeller#readme) for more information.
