import moment from 'moment';

export class Logger {
    /**
     * Log an information message
     * @param message 
     * @since 1.0.0
     * @example```ts
client.logger.info(`Client gave a info message!`)
```
     */
    info(message: string) {
        console.log(`\x1b[2m${moment().format("DD:mm:yy HH:MM:ss")}\x1b[0m \x1b[33m[INFO]\x1b[0m: ${message}`)
    }
    /**
     * Log an Error message
     * @param message 
     * @since 1.0.0
     * @example```ts
client.logger.error(`Client gave a error message!`)
```
     */
    error(message: string) {
        console.log(`\x1b[2m${moment().format("DD:mm:yy HH:MM:ss")}\x1b[0m \x1b[31m[ERROR]\x1b[0m: ${message}`)
    }   
    /**
     * Log a debug message
     * @param message 
     * @since 1.0.0
     * @example```ts
client.logger.debug(`Client gave a debug message!`)
```
     */
    debug(message: string) {
        console.log(`\x1b[2m${moment().format("DD:mm:yy HH:MM:ss")}\x1b[0m \x1b[34m[DEBUG]\x1b[0m: ${message}`)
    }
}