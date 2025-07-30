import './style.scss';

interface AppConfiguration{
    API_KEY: string;
    VERSION: string;
}

export class ConfigurationManager {
    private config: AppConfiguration;

    constructor() {
        this.config = {
            API_KEY: process.env.API_KEY || "default-api-key",
            VERSION: process.env.VERSION || '1.0.0'
        };
    }

    public get<T extends keyof AppConfiguration>(key: T): AppConfiguration[T] {
        return this.config[key];
    }
}

let configurationManager = new ConfigurationManager();

// show in the console to verify the configuration
console.log("Configuration Manager initialized with API_KEY:", configurationManager.get('API_KEY'));