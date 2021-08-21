import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IViewField, ListView } from '@pnp/spfx-controls-react/lib/controls/listView';
import { getIconClassName } from '@uifabric/styling';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { ComboBox, IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import * as React from 'react';
import { useState } from 'react';

import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  private viewFieldsAuditItems: IViewField[] = [

    { name: 'a', minWidth: 300, maxWidth: 300, displayName: 'UserId ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 400, displayName: 'Operation ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 400, maxWidth: 900, displayName: 'ObjectId ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 200, displayName: 'ClientIP ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 100, displayName: 'ItemType ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 300, displayName: 'SiteUrl  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 300, displayName: 'SourceFileName  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 300, displayName: 'SourceRelativeUrl  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 100, displayName: 'FromApp  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 400, displayName: 'UserType ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 400, displayName: 'UserKey ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 400, maxWidth: 600, displayName: 'UserAgent ', sorting: true, isResizable: true },


    { name: 'a', minWidth: 100, maxWidth: 200, displayName: 'Id ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 200, displayName: 'OrganizationId ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 200, displayName: 'RecordType ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'Version', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'Workload ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'CorrelationId ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'CustomUniqueId ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'EventSource ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'ListId ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: ' ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'Site ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'WebId  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'SourceFileExtension  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'HighPriorityMediaProcessing  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 100, maxWidth: 300, displayName: 'DoNotDistributeEvent  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'IsDocLib  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'DestinationRelativeUrl  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'DestinationFileName  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'DestinationFileExtension  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'UserSharedWith  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'SharingType  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'TargetUserOrGroupName  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'TargetUserOrGroupType  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'AuditItemId  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'ResultStatus  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'Scope  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'SourceName  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'MachineDomainInfo  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'MachineId  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'EventData  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'CustomEvent  ', sorting: true, isResizable: true },
    { name: 'a', minWidth: 200, maxWidth: 100, displayName: 'ModifiedProperties  ', sorting: true, isResizable: true },


  ];
  public constructor(props) {
    super(props);
    debugger;
    this.state = {
      showpopup: false,
      items: [
        { a: 1 },
        { a: 2 },
        { a: 3 },
        { a: 4 },
        { a: 5 },
        { a: 6 },
        { a: 7 },
        { a: 8 },
        { a: 9 },
        { a: 10 },
        { a: 11 },
        { a: 12 },
        { a: 13 },
        { a: 14 },
        { a: 15 },
        { a: 16 },
        { a: 17 },
        { a: 18 },
        { a: 19 },
        { a: 20 }, { a: 21 },
        { a: 22 },
        { a: 23 },
        { a: 24 },
        { a: 25 },
        { a: 26 },
        { a: 27 },
        { a: 28 },
        { a: 29 },
        { a: 30 },
        { a: 31 },
        { a: 32 },
        { a: 33 },
        { a: 34 },
        { a: 35 },
        { a: 36 },
        { a: 37 },
        { a: 38 },
        { a: 39 },
        { a: 310 }, { a: 31 },
        { a: 32 },
        { a: 33 },
        { a: 34 },
        { a: 35 },
        { a: 36 },
        { a: 37 },
        { a: 38 },
        { a: 39 },
        { a: 40 }, { a: 41 },
        { a: 42 },
        { a: 43 },
        { a: 44 },
        { a: 45 },
        { a: 46 },
        { a: 47 },
        { a: 48 },
        { a: 49 },
        { a: 40 }, { a: 41 },
        { a: 42 },
        { a: 43 },
        { a: 44 },
        { a: 45 },
        { a: 46 },
        { a: 47 },
        { a: 48 },
        { a: 49 },
        { a: 410 }, { a: 1 },
        { a: 42 },
        { a: 43 },
        { a: 44 },
        { a: 55 },
        { a: 56 },
        { a: 57 },
        { a: 58 },
        { a: 59 },
        { a: 510 }, { a: 1 },
        { a: 62 },
        { a: 63 },
        { a: 64 },
        { a: 65 },
        { a: 66 },
        { a: 67 },
        { a: 68 },
        { a: 69 },
        { a: 710 }, { a: 1 },
        { a: 72 },
        { a: 73 },
        { a: 74 },
        { a: 75 },
        { a: 76 },
        { a: 77 },
        { a: 78 },
        { a: 79 },
        { a: 710 }

      ]
    };
  }

  public componentDidMount() {

  }
  public render(): React.ReactElement<IHelloWorldProps> {
    debugger;
    return (
      <div>
        <PrimaryButton onClick={(e) => {
          this.setState({ showpopup: !this.state.showpopup });
        }}>Show Panel</PrimaryButton>
        <ListView
          items={this.state.items}
          viewFields={this.viewFieldsAuditItems}
          stickyHeader={true}
        />
        <Panel type={PanelType.extraLarge}
          headerText="Audit Items"
          isOpen={this.state.showpopup}
          onDismiss={(e) => {
            this.setState({ showpopup: !this.state.showpopup });
          }} >
          <ListView
            items={this.state.items}
            viewFields={this.viewFieldsAuditItems}
            stickyHeader={true}
          />
        </Panel>
      </div>
    );
  }
}
