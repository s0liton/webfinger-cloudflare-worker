// Webfinger redirect to support Tailscale OIDC when using email at root domain but auth service is on subdomain of root.

export default {
  async fetch(request, env, ctx) {
    const email = "pedro@solitonradar.com"
    const jsonData = '{"subject":"acct:' + email + '","links":[{"rel":"http://openid.net/specs/connect/1.0/issuer", "href":"https://auth.solitonradar.com"}]}';
    return new Response(jsonData, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
  });
  },
};
