import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-select',
    templateUrl: 'select.html',
})
export class SelectPage {

    treeData: any;

    code: any;

    constructor(private viewCtrl: ViewController,
                public navParams: NavParams) {
        this.treeData = [
            {
                code: '1',
                label: 'Gundam',
                nodes: [
                    {
                        code: '101',
                        label: '机动战士高达seed',
                        nodes: [
                            {
                                code: '10101',
                                label: '强袭高达'
                            },
                            {
                                code: '10102',
                                label: '自由高达'
                            }
                        ]
                    },
                    {
                        code: '102',
                        label: '机动战士高达00',
                        nodes: [
                            {
                                code: '10201',
                                label: 'Exia'
                            },
                            {
                                code: '10202',
                                label: 'Kyrios'
                            },
                        ]
                    },
                ]
            },
            {
                code: '2',
                label: 'EVA'
            }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SelectPage');
        this.code = this.navParams.get("currentId");
    }

    handleSelect(data) {
        this.viewCtrl.dismiss(data);
    }

}
