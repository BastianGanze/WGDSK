/// <reference path="../../libssrc/jsnlog.d.ts"/>

import JSNLogConsoleAppender = JSNLog.JSNLogConsoleAppender;
import JSNLogLogger = JSNLog.JSNLogLogger;
import JSNLogAppender = JSNLog.JSNLogAppender;
import {Config} from "../Config";

export function Logger(loggerName : string) : JSNLogLogger
{
    const consoleAppender : JSNLogConsoleAppender = JL.createConsoleAppender("ConsoleAppender");
    const serverAppender : JSNLogConsoleAppender = JL.createAjaxAppender("ConsoleAppender");
    const appenders : JSNLogAppender[] = [];
    if(Config.LOG_TO_CONSOLE) appenders.push(consoleAppender);
    if(Config.LOG_TO_SERVER) appenders.push(serverAppender);
    const logger : JSNLogLogger = JL(loggerName).setOptions({"appenders": appenders, level: Config.LOG_LEVEL});

    return logger;
}

export const Log : JSNLogLogger = Logger(Config.APPLICATION_NAME);