import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {SelectPage} from "../select/select";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    currentId: any = "10101";
    currentLabel: any = "强袭高达";

    constructor(public navCtrl: NavController,
                private modalCtrl: ModalController) {

    }

    select() {
        let modal = this.modalCtrl.create(SelectPage, {
            currentId: this.currentId
        });
        modal.present({direction: "forward"});
        modal.onDidDismiss((res: any) => {
            this.currentId = res.code;
            this.currentLabel = res.label;
        })
    }

}
