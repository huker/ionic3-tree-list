## ionic3-tree-list

> 目前只完成最基本的，按照公司项目中的需求做的，很死，有时间得优化的比较定制化点= =

### Input
- treeData 整个数据对象
- initCode 初始值（code）
- codeText 作为code的key
- labelText 作为label的key
- nodesText 作为nodes的key

### event
- handleSelect 参数为整个节点

```
//treeData格式
treeData = [
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
```
