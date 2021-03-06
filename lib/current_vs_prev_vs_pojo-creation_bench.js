/*
 * immutato
 * https://github.com/parroit/immutato
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';


var immutato_prev = require('immutato-types');
var immutato = require('immutato');
var Immutable = require('immutable');
var AO = require('ancient-oak');

var suite = module.exports = {
    maxTime: 2,
    setup: function() {
        var i = 100;
        var payloadTypes = {
            name: immutato_prev.String,
            age: immutato_prev.Number
        };

        var payloadProps = {
            name: 'Andrea',
            age: 38
        };


        while(i--) {
            payloadTypes['field'+i] = immutato_prev.Number;
            payloadProps['field'+i] = i;
        }

        suite.payloadProps = payloadProps;

        suite.Imm = immutato_prev.struct(payloadTypes, 'Person');
        suite.$f = immutato(payloadProps);



/*


            var a = suite.$f({
                name: 'Gino',
                age:80,
                field12: 122
            });
            console.log(a.name(),a.age(),a.field12());
            a = a.age(42);
            console.log(a.name(),a.age(),a.field12());
            var b = suite.$f({
                name: 'Pino',
                age:90,
                field13: 133
            });
            console.log(b.name(),b.age(),b.field12(),b.field13());
            b = b.age(53);
            console.log(b.name(),b.age(),b.field12(),b.field13());

            console.log('tests done')
*/
    },

    name: 'current vs prev version vs pojo -- immutable object creation',

    tests: {

        'current version': function() {
           var imm = suite.$f(suite.payloadProps);
           imm.dispose();
        },


        'previous version': function() {
            var imm = new suite.Imm(suite.payloadProps);
        },

        
        'ancient-oak': function() {
            var imm = AO(suite.payloadProps);

        },

        'immutable.js': function() {
            var imm = Immutable.Map(suite.payloadProps);

        },

        'pojo': function() {
            var imm = {
                name: 'Andrea',
                age: 38
            };
            Object.freeze(imm);
        }

    }
};

suite.setup();

