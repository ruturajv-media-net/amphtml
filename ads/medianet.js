/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {writeScript, validateData} from '../3p/3p';
import {getSourceUrl} from '../src/url';


const mandatoryParams = ['tagType', 'cid', 'crid'],
  optionalParams = ['misc'];

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function medianet(global, data) {
  validateData(data, mandatoryParams, optionalParams);

  setAdditionalData(data);
  if (data.tagType === 'sync') {
    loadSyncTag(global, data);
  }
}

/**
 * @param {!Window} global
 * @param {!Object} data
 */
function loadSyncTag(global, data) {
    /*eslint "google-camelcase/google-camelcase": 0*/

  let url = 'https://contextual.media.net/ampnmedianet.js?';
  url += 'cid=' + encodeURIComponent(data.cid);
  url += '&https=1';
  url += '&requrl=' + encodeURIComponent(data.requrl);
  setMacro(data, 'versionId');
  setMacro(data, 'requrl');
  setMacro(data, 'width');
  setMacro(data, 'height');
  setMacro(data, 'crid');

  if (data.refurl) {
    url += '&refurl=' + encodeURIComponent(data.refurl);
    setMacro(data, 'refurl');
  }

  if (data.misc) {
    setMacro(data, 'misc');
  }
  setCallbacks(global);
  writeScript(global, url);
}

function setMacro(data, type, name) {
  if (!type || !data) {
    return;
  }
  name = name || type;
  name = 'medianet_' + name;
  if (data[type]) {
    global[name] = data[type];
  }
}

function setCallbacks(global) {
  function renderStartCb(opt_data) {
    console.log('renderStartCalled');
    global.context.renderStart(opt_data);
  }
  function reportRenderedEntityIdentifierCb(ampId) {
    console.log('reported rendered entity' + ampId);
    //check for id, and pass default if not available
    global.context.reportRenderedEntityIdentifier(ampId);
  }
  function noContentAvailableCb() {
    console.log('no content available called');
    global.context.noContentAvailable();
  }

  const callbacks = {
    renderStartCb,
    reportRenderedEntityIdentifierCb,
    noContentAvailableCb,
  };
  global._mNAmp = callbacks;

}

function setAdditionalData(data ) {
  data.requrl = global.context.canonicalUrl ||
      getSourceUrl(global.context.location.href);
  data.refurl = global.context.referrer;
  data.versionId = '123'; //put correct id
}