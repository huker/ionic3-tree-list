import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    treeData: any;

    code: any;

    constructor(public navCtrl: NavController) {
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

        this.code = '10101';
    }

    handleSelect() {

    }

}
