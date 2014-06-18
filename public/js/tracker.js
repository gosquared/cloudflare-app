CloudFlare.define(
  'gosquared',
  ['gosquared/config'],
  function(config){
    CloudFlare.require(['//cloudflare.gosquared.com/tracker/' + config.domain_id]);
  }
);
