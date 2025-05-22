// Webfinger redirect to support Tailscale OIDC when using email at root domain but auth service is on subdomain of root.

export default {
  async fetch(request, env, ctx) {
    const email = "pedro@solitonradar.com"
    const jsonData = '{"subject":"acct:' + email + '","aliases":["https://' + 'auth.solitonradar.com' + '/@' + pedro + '","https://' + 'auth.solitonradar.com' + '/users/' + 'pedro' + '"],"links":[{"rel":"http://webfinger.net/rel/profile-page","type":"text/html","href":"https://' + 'auth.soltionradar.com' + '/@' + 'pedro' + '"},{"rel":"self","type":"application/activity+json","href":"https://' + 'auth.solitonradar.com' + '/users/' + 'pedro' + '"},{"rel":"http://ostatus.org/schema/1.0/subscribe","template":"https://' + 'pedro' + '/authorize_interaction?uri={uri}"}]}';
    return new Response(jsonData, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
  });
  },
};
