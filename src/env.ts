
// import * as rcfile from '@zenox/rcfile';
//
// import * as path from 'path';
// import * as fs from 'fs';
// import * as os from 'os';


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
    return parseInt(get(name));
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

// /**
//  * Load ENV file and load values to environment variables
//  *
//  * @param   {string}    [file = '.envrc']
//  * @param   {string}    [encoding = 'utf8']
//  */
// export function load(file: string = '.envrc', encoding: string = 'utf8'): void {
//
//     let data = rcfile.load(file, encoding).then(data => {
//         console.log(data);
//     });
//
//     // file = resolve(file);
//     //
//     // //TODO: It is necessary?
//     // if(!file) {
//     //     return;
//     // }
//     //
//     // let props = parse(file, encoding);
//     // let keys = Object.keys(props);
//     //
//     // for(let k of keys) {
//     //     process.env[k] = props[k];
//     // }
//
// }
//
// // env.loadFile();
//
//
// /**
//  * Resolve config path
//  *
//  * @param   {string}    filename
//  * @return  {string}
//  * @TODO    If filename is absolutePath ('/*'), it have to check only filename
//  * @TODO    No usar funciones sincronas
//  */
// function resolve(filename: string): string {
//
//     let file;
//     let parent = path.dirname(process.argv[1]);
//
//     if(fs.existsSync(file = path.join(process.cwd(), filename))) {
//         return file;
//     }
//
//     while(!fs.existsSync(file = path.join(parent, filename)) && parent !== '/') {
//         parent = path.join(parent, '..');
//     }
//
//     if(fs.existsSync(file)) {
//         return file;
//     }
//
// }
//
// /**
//  *
//  * @param   {string}    file
//  * @param   {string}    encoding
//  * @return  {Object}
//  * @TODO    Use regular expression to control lines format
//  * @TODO    No usar funciones sincronas
//  */
// function parse(file: string, encoding: string): Object {
//
//     let props = {};
//     let lines = fs.readFileSync(file, encoding).split(os.EOL);
//
//     for(let line of lines) {
//
//         line = line.trim();
//
//         if(line === '' || line.indexOf('#') === 0) {
//             continue;
//         }
//
//         let tokens = line.split('=').map(l => l.trim());
//
//         if(tokens.length !== 2) {
//             // todo: It have to throw an error
//         }
//
//         props[tokens[0]] = tokens[1];
//     }
//
//     return props;
// }
