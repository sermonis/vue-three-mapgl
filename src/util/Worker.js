import WorkerPool from './WorkerPool';

/**
 * TODO: Use Operative (https://github.com/padolsey/operative).
 */
var Worker = ( function () {

    var _maxWorkers = 2;
    var pool;

    var createWorkers = function ( maxWorkers, workerScript ) {

        pool = new WorkerPool( {

            numThreads: ( maxWorkers ) ? maxWorkers : _maxWorkers,
            workerScript: ( workerScript ) ? workerScript : 'mapgl.worker.js',

        } );

        return pool.createWorkers();
    }

    var exec = function ( method, args, transferrables ) {

        return pool.exec( method, args, transferrables );

    };

    return {

        createWorkers: createWorkers,
        exec: exec,

    };

} )()

export default Worker;
