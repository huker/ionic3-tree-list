import {NgModule} from '@angular/core';
import {TreeListComponent} from './tree-list/tree-list';
import {IonicModule} from "ionic-angular";
@NgModule({
    declarations: [TreeListComponent],
    imports: [IonicModule],
    exports: [TreeListComponent]
})
export class ComponentsModule {
}
