
process.chdir(__dirname);

import {ok, strictEqual} from 'assert';
import * as env from '..';


describe('env', () => {

    const exStr = 'hello world';
    const exInt = 517;
    const exFloat = 14.28;
    const exBool = true;

    process.env['EX_STR'] = exStr;
    process.env['EX_INT'] = exInt;
    process.env['EX_FLOAT'] = exFloat;
    process.env['EX_BOOL'] = exBool;

    describe('.get', () => {
        it('is string', () => strictEqual(env.get('EX_STR'), exStr));
        it('is integer', () => strictEqual(env.get('EX_INT'), exInt.toString()));
        it('is float', () => strictEqual(env.get('EX_FLOAT'), exFloat.toString()));
        it('is boolean', () => strictEqual(env.get('EX_BOOL'), exBool.toString()));
        it('doesn\'t exist', () => ok(!env.get('FOO')));
    });

    describe('.getString', () => {
        it('is string', () => strictEqual(env.getString('EX_STR'), exStr));
        it('is integer', () => strictEqual(env.getString('EX_INT'), exInt.toString()));
        it('is float', () => strictEqual(env.getString('EX_FLOAT'), exFloat.toString()));
        it('is boolean', () => strictEqual(env.getString('EX_BOOL'), exBool.toString()));
        it('doesn\'t exist', () => ok(!env.get('FOO')));
    });

    describe('.getInt', () => {
        it('is string', () => ok(isNaN(env.getInt('EX_STR'))));
        it('is integer', () => strictEqual(env.getInt('EX_INT'), exInt));
        it('is float', () => strictEqual(env.getInt('EX_FLOAT'), Math.floor(exFloat)));
        it('is boolean', () => ok(isNaN(env.getFloat('EX_BOOL'))));
        it('doesn\'t exist', () => ok(isNaN(env.getInt('FOO'))));
    });

    describe('.getFloat', () => {
        it('is string', () => ok(isNaN(env.getFloat('EX_STR'))));
        it('is integer', () => strictEqual(env.getFloat('EX_INT'), exInt));
        it('is float', () => strictEqual(env.getFloat('EX_FLOAT'), exFloat));
        it('is boolean', () => ok(isNaN(env.getFloat('EX_BOOL'))));
        it('doesn\'t exist', () => ok(isNaN(env.getFloat('FOO'))));
    });

    describe('.getBoolean', () => {
        it('is string', () => ok(!env.getBoolean('EX_STR')));
        it('is integer', () => ok(!env.getBoolean('EX_INT')));
        it('is float', () => ok(!env.getBoolean('EX_FLOAT')));
        it('is boolean', () => strictEqual(env.getBoolean('EX_BOOL'), exBool));
        it('doesn\'t exist', () => ok(!env.getBoolean('FOO')));
    });

    describe('.exists', () => {
        it('is string', () => ok(env.exists('EX_STR')));
        it('is integer', () => ok(env.exists('EX_INT')));
        it('is float', () => ok(env.exists('EX_FLOAT')));
        it('is boolean', () => ok(env.exists('EX_BOOL')));
        it('doesn\'t exist', () => ok(!env.exists('FOO')));
    });

    describe('.existsString', () => {
        it('is string', () => ok(env.existsString('EX_STR')));
        it('is integer', () => ok(env.existsString('EX_INT')));
        it('is float', () => ok(env.existsString('EX_FLOAT')));
        it('is boolean', () => ok(env.existsString('EX_BOOL')));
        it('doesn\'t exist', () => ok(!env.existsString('FOO')));
    });

    describe('.existsInt', () => {
        it('is string', () => ok(!env.existsInt('EX_STR')));
        it('is integer', () => ok(env.existsInt('EX_INT')));
        it('is float', () => ok(!env.existsInt('EX_FLOAT')));
        it('is boolean', () => ok(!env.existsInt('EX_BOOL')));
        it('doesn\'t exist', () => ok(!env.existsInt('FOO')));
    });

    describe('.existsFloat', () => {
        it('is string', () => ok(!env.existsFloat('EX_STR')));
        it('is integer', () => ok(!env.existsFloat('EX_INT')));
        it('is float', () => ok(env.existsFloat('EX_FLOAT')));
        it('is boolean', () => ok(!env.existsFloat('EX_BOOL')));
        it('doesn\'t exist', () => ok(!env.existsFloat('FOO')));
    });

    describe('.existsBoolean', () => {
        it('is string', () => ok(!env.existsBoolean('EX_STR')));
        it('is integer', () => ok(!env.existsBoolean('EX_INT')));
        it('is float', () => ok(!env.existsBoolean('EX_FLOAT')));
        it('is boolean', () => ok(env.existsBoolean('EX_BOOL')));
        it('doesn\'t exist', () => ok(!env.existsBoolean('FOO')));
    });

    describe('.add', () => {

        it('create', () => {
            env.add('FOO', 'bar');
            strictEqual(env.get('FOO'), 'bar');
        });

        it('update', () => {
            env.add('FOO', 'baz');
            strictEqual(env.get('FOO'), 'baz');
        });

    });

    describe('.remove', () => {

        it('exists', () => {
            env.remove('FOO');
            ok(!env.exists('FOO'));
        });

        it('doesn\'t exist', () => {
            env.remove('FOO');
            ok(!env.exists('FOO'));
        });

    });

    describe('.load', () => {

        it('named', done => {
            env.load('.examplerc').then(() => {
                envContains({EXAMPLE: 'hello world!', EX_INT: exInt.toString()});
                done();
            }).catch(done);
        });

        it('autoload', () => {
            envContains({BAR: 'foo', EX_STR: 'hello world'})
        });

    });

});


function envContains(data: Object): void {

    let keys = Object.keys(data);
    for(let k of keys) {
        strictEqual(process.env[k], data[k]);
    }
}
