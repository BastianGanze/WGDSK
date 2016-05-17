export enum LogLevel{
    ALL = -2147483648,
    TRACE = 1000,
    DEBUG = 2000,
    INFO = 3000,
    WARN = 4000,
    ERROR = 5000,
    FATAL = 6000,
    OFF = 2147483647
}

export class Config{
    static APPLICATION_NAME: string = "";
    static DEBUG : boolean = true;
    static LOG_LEVEL : LogLevel = LogLevel.DEBUG;
    static LOG_TO_SERVER: boolean = false;
    static LOG_TO_CONSOLE: boolean = true;
}