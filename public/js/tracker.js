CloudFlare.define(
  'gosquared',
  ['gosquared/config'],
  function(config){
    CloudFlare.require(['//cloudflare.gosquared.com/' + config.domain_id + '/tracker.js']);
  }
);
