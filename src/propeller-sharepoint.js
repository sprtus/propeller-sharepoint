const gulp = require('gulp');
const gutil = require('gulp-util');
const propeller = require('gulp-propeller');
const spsave = require('gulp-spsave');
const PLUGIN_NAME = 'propeller-sharepoint';

class SharePoint extends propeller.Deployer {

  /**
   * Deploy source to SharePoint destination.
   *
   * @param {string} src
   * @param {string} dest
   * @param {Object} connection
   * @return {Object} stream
   */
  deploy(src, dest, connection){

    // validate connection
    this.validate(connection);

    // get source files
    let s = gulp.src(src);

    // get connection site
    let site = connection.site;
    delete connection.site;

    // set connection user/pass shorthands
    if(connection.user){
      connection.username = connection.user;
      delete connection.user;
    }
    if(connection.pass){
      connection.password = connection.pass;
      delete connection.pass;
    }

    // authenticate to sharepoint, send to destination
    return s.pipe(spsave({
      siteUrl: connection.site,
      folder: dest,
      flatten: false
    }, connection));

  }

  /**
   * Validate the given connection object.
   *
   * @param {Object} connection
   */
  validate(connection){

    // site
    if(!connection.site) throw new gutil.PluginError(PLUGIN_NAME, `Deployer: 'site' is required`);

    // user
    if(!connection.user) throw new gutil.PluginError(PLUGIN_NAME, `Deployer: 'user' is required`);

    // pass
    if(!connection.pass) throw new gutil.PluginError(PLUGIN_NAME, `Deployer: 'pass' is required`);

  }

}

module.exports = new SharePoint();
