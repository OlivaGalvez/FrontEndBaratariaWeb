import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
 
export function initializer(keycloak: KeycloakService): () => Promise<any> {
    const options: KeycloakOptions = {
        config: environment.keycloackConfig,
        initOptions: {
           // onLoad: 'login-required',
            checkLoginIframe: false
        },
        enableBearerInterceptor: true,
        bearerPrefix: 'Bearer',
        bearerExcludedUrls: [' ', '/assets', '/error' ]
    };
    return (): Promise<any> => keycloak.init(options);
}