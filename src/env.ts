
import * as rcfile from '@zenox/rcfile';


/**
 * Get environment variable
 *
 * @param   {string}    name
 * @return  {string}
 */
export function get(name: string): any {
    return process.env[name];
}

/**
 * Get environment variable as string
 *
 * @param   {string}    name
 * @return  {string}
 */
export function getString(name: string): string {
    return get(name).toString();
}

/**
 * Get environment variable as integer
 *
 * @param   {string}    name
 * @return  {number}
 */
export function getInt(name: string): number {
    return parseInt(get(name), 10);
}

/**
 * Get environment variable as float
 *
 * @param   {string}    name
 * @return  {number}
 */
export function getFloat(name: string): number {
    return parseFloat(get(name));
}

/**
 * Get environment variable as boolean
 *
 * @param   {string}    name
 * @return  {boolean}
 */
export function getBoolean(name: string): boolean {
    return get(name) === 'true';
}

/**
 * Get if environment variable exists
 *
 * @param   {string}    name
 * @return  {boolean}
 */
export function exists(name: string): boolean {
    return process.env.hasOwnProperty(name);
}

/**
 * Get if environment variable is string
 *
 * @param   {string}    name
 * @return  {boolean}
 */
export function existsString(name: string): boolean {
    return typeof get(name) === 'string';
}

/**
 * Get if environment variable is integer
 *
 * @param   {string}    name
 * @return  {boolean}
 */
export function existsInt(name: string): boolean {
    return /^[0-9]+$/.test(get(name));
}

/**
 * Get if environment variable is float
 *
 * @param   {string}    name
 * @return  {boolean}
 */
export function existsFloat(name: string): boolean {
    return /^[0-9]+\.[0-9]+$/.test(get(name));
}

/**
 * Get if environment variable is boolean
 *
 * @param   {string}    name
 * @return  {boolean}
 */
export function existsBoolean(name: string): boolean {
    return /^(true|false)$/.test(get(name));
}

/**
 * Add value to environment variables
 *
 * @param   {string}    name
 * @param   {*}         value
 */
export function add(name: string, value: any): void {
    process.env[name] = value;
}

/**
 * Remove value from environment variables
 *
 * @param   {string}    name
 */
export function remove(name: string): void {
    delete process.env[name];
}

/**
 * Load file and set values to environment variables
 *
 * @param   {string}    [file = '.envrc']
 * @param   {string}    [encoding = 'utf8']
 * @return  {Promise<void>}
 */
export function load(file: string = '.envrc', encoding: string = 'utf8'): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        rcfile.load(file, encoding).then(data => {

            let keys = Object.keys(data);
            for(let k of keys) {
                if(!process.env.hasOwnProperty(k)) {
                    add(k, data[k]);
                }
            }

            resolve();

        }).catch(reject);
    });

}

load();
