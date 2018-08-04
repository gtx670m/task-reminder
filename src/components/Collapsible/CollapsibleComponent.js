import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';
import './CollapsibleComponent.scss';

class CollapsibleComponent extends Component {
    render() {
        return (
            <div>
                {/* defaultActiveKey={0} */}
                <Collapsible accordion        >
                    <CollapsibleItem header='Deliveries' icon='local_shipping'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Micro Merchant' icon='laptop'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Rx Transfer' icon='compare_arrows'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Patients' icon='face'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Medication' icon='local_drink'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Pharmacies' icon='domain'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Sig Codes' icon='storage'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Alerts' icon='notification_important'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Prior Authorization' icon='place'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='User Signups' icon='people'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Users and Roles' icon='people_outline'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Settings' icon='settings'>
                        <Collection>
                            <CollectionItem>Item 1</CollectionItem>
                            <CollectionItem>Item 2</CollectionItem>
                            <CollectionItem>Item 3</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        );
    }
}

export default CollapsibleComponent;
