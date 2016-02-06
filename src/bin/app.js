// #!/usr/env/bin node is injected by Rollup (config.banner).
'use strict';

import location from '../core/location'

import * as log from 'winston'

log.cli();
log.info(`Hello ${location}!`);
