"use strict";

var _ = require( "lodash" );
var pluginParser = require( "d-pac.plugins-parser" );
var keystone = require( "keystone" );

function register( app,
                   opts ){
  var dpacConfig = app.get( "d-pac" );
  if( dpacConfig && dpacConfig.pluginsScrobbled ){
    return dpacConfig.plugins;
  } else {
    var plugins = _.chain( pluginParser( opts ) )
        .map( function( pluginConfig ){
          return _.merge( {
            value : pluginConfig.name,
            label : pluginConfig.label || pluginConfig.name
          }, pluginConfig );
        } )
        .groupBy( "type" )
        .value() || [];

    app.set( "d-pac", _.defaults( {
      pluginsScrobbled : true,
      plugins          : plugins
    }, dpacConfig ) );

    return plugins;
  }
}

function getByType( collection,
                    type ){
  return collection[ type ] || [];
}

function list( type ){
  var config = keystone.get( "d-pac" );
  if( config && config.pluginsScrobbled ){
    return getByType( config.plugins, type );
  } else {
    return getByType( register( keystone ), type );
  }
}

module.exports = {
  register : register,
  list     : list
};
