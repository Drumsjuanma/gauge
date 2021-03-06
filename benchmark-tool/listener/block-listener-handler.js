/**
* Copyright Persistent Systems 2018. All Rights Reserved.
*
* SPDX-License-Identifier: Apache-2.0
*@file Implementation for block listener handler.
*/ 

'use strict'

var block_listener_adapter = require('./block-listener-adapter.js');

process.on('message', function(msg) {
    var adapter = new block_listener_adapter (msg.msg)
    adapter.createTopic()
    adapter.getBlocks()
})