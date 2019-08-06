import { NgModule } from '@angular/core';

import { Jhipster5TestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Jhipster5TestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Jhipster5TestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jhipster5TestSharedCommonModule {}
