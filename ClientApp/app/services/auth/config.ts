interface AuthConfig {
	clientID: string;
	domain: string;
	audience: string;
	callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
	clientID: 'HyEDntcxA3P50RkEEG28PSs0WDol2NAT',
	domain: 'indasys.auth0.com',
	audience: 'https://indasys.auth0.com/userinfo',
	callbackURL: '/callback'
};
