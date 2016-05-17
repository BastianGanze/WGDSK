/// <reference path="../../libssrc/jsnlog.d.ts"/>

import JSNLogConsoleAppender = JSNLog.JSNLogConsoleAppender;
import JSNLogLogger = JSNLog.JSNLogLogger;
import JSNLogAppender = JSNLog.JSNLogAppender;
import {Config} from "../Config";

export function Logger(loggerName : string) : JSNLogLogger
{
    var consoleAppender : JSNLogConsoleAppender = JL.createConsoleAppender("ConsoleAppender");
    var serverAppender : JSNLogConsoleAppender = JL.createAjaxAppender("ConsoleAppender");
    var appenders : JSNLogAppender[] = [];
    if(Config.LOG_TO_CONSOLE) appenders.push(consoleAppender);
    if(Config.LOG_TO_SERVER) appenders.push(serverAppender);
    var logger : JSNLogLogger = JL(loggerName).setOptions({"appenders": appenders, level: Config.LOG_LEVEL});

    return logger;
}

export var Log : JSNLogLogger = Logger(Config.APPLICATION_NAME);