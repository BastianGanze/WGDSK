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
    public static APPLICATION_NAME: string = "";
    public static DEBUG : boolean = true;
    public static LOG_LEVEL : LogLevel = LogLevel.DEBUG;
    public static LOG_TO_SERVER: boolean = false;
    public static LOG_TO_CONSOLE: boolean = true;
    public static STAGE_WIDTH: number = 1280;
    public static STAGE_HEIGHT: number = 720;
    public static BG_COLOR: number = 0x6495ED;
}