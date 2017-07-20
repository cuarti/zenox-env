
@zenox/rcfile
==

[![Build Status](https://travis-ci.org/cuarti/zenox-env.svg?branch=master)](https://travis-ci.org/cuarti/zenox-env)
[![npm (scoped)](https://img.shields.io/npm/v/@zenox/env.svg)](https://www.npmjs.com/package/@zenox/env)
[![license](https://img.shields.io/github/license/cuarti/zenox-env.svg)](https://github.com/cuarti/zenox-env/blob/master/LICENSE)


## Description

Manage environment variables and load it from file. Part of Zenox Framework

#### File example

```bash
# Comment
NAME=rcfile
VERSION=1
WORKS=true
```


## Installation
The usage of the module not depend of Zenox framework and can use it in your NodeJS program.

```bash
npm install --save @zenox/env
```


## Documentation

*All the examples are in ES6/ES2015 of Javascript and Typescript.
To use all the features of Typescript, you can use the generic param
on load function.*

### get

Get value from environment variables.

#### Typescript definition
```typescript
declare function get(name: string): any;
```

#### Example
```typescript
import {get} from '@zenox/env';

let data = env.get('EXAMPLE');
```

### getString

Get value as string from environment variables.

#### Typescript definition
```typescript
declare function getString(name: string): string;
```

#### Example
```typescript
import {getString} from '@zenox/env';

let data = env.getString('EXAMPLE');
```

### getInt

Get value as number (integer) from environment variables.

#### Typescript definition
```typescript
declare function getInt(name: string): number;
```

#### Example
```typescript
import {getInt} from '@zenox/env';

let data = env.getInt('EXAMPLE');
```

### getFloat

Get value as number (float) from environment variables.

#### Typescript definition
```typescript
declare function getFloat(name: string): number;
```

#### Example
```typescript
import {getFloat} from '@zenox/env';

let data = env.getFloat('EXAMPLE');
```

### getBoolean

Get value as boolean from environment variables.

#### Typescript definition
```typescript
declare function getBoolean(name: string): boolean;
```

#### Example
```typescript
import {getBoolean} from '@zenox/env';

let data = env.getBoolean('EXAMPLE');
```

### exists

Get if exists environment variable.

#### Typescript definition
```typescript
declare function exists(name: string): boolean;
```

#### Example
```typescript
import {exists} from '@zenox/env';

let exists = env.exists('EXAMPLE');
```

### existsString

Get if exists environment variable and is string.

#### Typescript definition
```typescript
declare function existsString(name: string): boolean;
```

#### Example
```typescript
import {existsString} from '@zenox/env';

let exists = env.existsString('EXAMPLE');
```

### existsInt

Get if exists environment variable and is number (integer).

#### Typescript definition
```typescript
declare function existsInt(name: string): boolean;
```

#### Example
```typescript
import {existsInt} from '@zenox/env';

let exists = env.existsInt('EXAMPLE');
```

### existsFloat

Get if exists environment variable and is number (float).

#### Typescript definition
```typescript
declare function existsFloat(name: string): boolean;
```

#### Example
```typescript
import {existsFloat} from '@zenox/env';

let exists = env.existsFloat('EXAMPLE');
```

### existsBoolean

Get if exists environment variable and is boolean.

#### Typescript definition
```typescript
declare function existsBoolean(name: string): boolean;
```

#### Example
```typescript
import {existsBoolean} from '@zenox/env';

let exists = env.existsBoolean('EXAMPLE');
```

### add

Add value to environment variables.

#### Typescript definition
```typescript
declare function add(name: string, value: any): void;
```

#### Example
```typescript
import {add} from '@zenox/env';

add('EXAMPLE', 'FOO');
```

### remove

Remove value from environment variables.

#### Typescript definition
```typescript
declare function remove(name: string): void;
```

#### Example
```typescript
import {remove} from '@zenox/env';

remove('EXAMPLE');
```

### load

Load file and set values to environment variables.
Importing package, it tries to load .envrc file.

#### Typescript definition
```typescript
declare function load(file: string = '.envrc', encoding: string = 'utf8'): Promise<void>;
```

#### Example
```typescript
import {load} from '@zenox/env';

load('.examplerc', 'utf8').then(() => {
    ...
});
```


## License

The source code of the current repository are launched with MIT License.
