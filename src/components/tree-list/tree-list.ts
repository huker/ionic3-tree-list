import {Component, EventEmitter, Input, Output} from '@angular/core';
import lodash from "lodash";
/**
 * Generated class for the TreeListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'tree-list',
    templateUrl: 'tree-list.html'
})
export class TreeListComponent {
    //Input
    //数据集
    @Input() treeData: any = {};
    //初始选中的值
    @Input() initCode: any = {};
    //id的key
    @Input() codeText: string = 'code';
    //值的key
    @Input() labelText: string = 'label';
    //子节点的key
    @Input() nodesText: string = 'nodes';

    //Output
    @Output() handleSelect = new EventEmitter();

    firstTime: boolean = false;

    constructor() {
    }

    ngAfterViewChecked() {
        if (!this.firstTime) {
            if (this.treeData && this.treeData.length > 0) {
                this.firstTime = true;
                this.mapFindNodes(this.treeData);
            }
        }
    }

    mapFindNodes(data) {
        lodash.map(data, (item: any) => {
            item['active'] = this.initCode && (this.initCode === item[this.codeText]);
            if (lodash.get(item, this.nodesText) && lodash.get(item, this.nodesText).length > 0) {
                item['isOpen'] = (this.initCode && this.initCode.substring(0, item[this.codeText].length)) === item[this.codeText];
                this.mapFindNodes(lodash.get(item, this.nodesText));
            }
        })
    }


    handleArrow(target) {
        target.isOpen = !target.isOpen;
        if (target && lodash.has(target, this.nodesText) && target[this.nodesText].length > 0) {
            this.mapFindNodes(target[this.nodesText])
        }
    }

    //选择最后的子Item
    handleLastItem(target) {
        this.handleSelect.emit(target);
    }

}
