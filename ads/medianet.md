<!---
Copyright 2016 The AMP HTML Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# Media.net

## Example

### Basic
``` html
<amp-ad width=300 height=250
         type="medianet"
         data-tagtype="sync"
         data-cid="8CUS807EX"
         data-crid="112682482">
</amp-ad>
```

## Configuration

### Dimensions
 
The ad size depends on the ``width`` and ``height`` attributes specified in the ``amp-ad`` tag. These are mandatory parameters that are required to be added in the ad tag. The AMP ad component requires the following HTML attributes to be added before parsing the ad.
  
 * ``width`` 
 * ``height`` 
 * ``type = "medianet"``

For further configuration related details, please feel free to reach out to your Media.net contact.

### Supported Parameters

<strong>Mandatory Parameters</strong>
 
* ``data-tagtype`` - Represents the product that the publisher is using. It should be <strong>sync</strong> for our contextual advertising product.
* ``data-cid`` - Represents the unique customer identifier.
* ``data-crid`` - Represents the unique identifier for the ad unit.

<strong>Optional Parameters</strong>

The following in an additional parameter that you can set:

``data-misc`` - Accepts a json value and can be passed by the publisher to send additional data.

For further details, feel free to contact your Account Manager at Media.net.

## Support 

If you have any questions, you can contact your Account Manager or even write to our support team at pubsupport@media.net.