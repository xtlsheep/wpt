// META: title=test WebNN API expand operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://webmachinelearning.github.io/webnn/#api-mlgraphbuilder-expand

// Reuse buildReshape method
runWebNNConformanceTests('expand', buildReshape);
