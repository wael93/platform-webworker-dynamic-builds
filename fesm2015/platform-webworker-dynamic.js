/**
 * @license Angular v7.2.0-rc.0+12.sha-a0585c9
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

import { Version, COMPILER_OPTIONS, PLATFORM_ID, createPlatformFactory } from '@angular/core';
import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { ɵResourceLoaderImpl, ɵplatformCoreDynamic } from '@angular/platform-browser-dynamic';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const VERSION = new Version('7.2.0-rc.0+12.sha-a0585c9');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const platformWorkerAppDynamic = createPlatformFactory(ɵplatformCoreDynamic, 'workerAppDynamic', [
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ɵResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_WORKER_UI_ID }
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VERSION, platformWorkerAppDynamic };
//# sourceMappingURL=platform-webworker-dynamic.js.map
