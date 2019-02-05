/*
 * Copyright 2019 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'
/* eslint-disable no-process-env */

const { test } = require('tap')
const importEnv = require('../lib/import-env')

test('Call import env without a path', assert => {
  const preEnv = Object.keys(process.env)
  importEnv()
  assert.strictSame(Object.keys(process.env), preEnv)
  assert.end()
})

test('Call import env with a path', assert => {
  const preEnvLength = Object.keys(process.env).length
  importEnv('./tests/test.env')
  assert.strictSame(Object.keys(process.env).length, preEnvLength + 2)
  assert.strictSame(process.env.TEST_KEY, 'value')
  assert.strictSame(process.env.TEST_EXPANDED_KEY, 'value_expanded')
  assert.end()
})

/* eslint-enable no-proces-env */
