import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';

import { initializePortalIcons } from '../../initializeIcons';
import * as strings from 'RolePortalWebPartStrings';
import RolePortal from './components/RolePortal';
import { IRolePortalWebPartProps } from './IRolePortalWebPartProps';

export default class RolePortalWebPart extends BaseClientSideWebPart<IRolePortalWebPartProps> {
  public render(): void {
    initializePortalIcons();

    const element: React.ReactElement<IRolePortalWebPartProps> = React.createElement(RolePortal, {
      role: this.properties.role,
      compactMode: this.properties.compactMode,
      showExternalLinks: this.properties.showExternalLinks,
      defaultExpanded: this.properties.defaultExpanded
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('role', {
                  label: strings.RoleFieldLabel,
                  options: [
                    { key: 'MGR', text: 'MGR - Manager' },
                    { key: 'SUP', text: 'SUP - Supervisor' },
                    { key: 'CTR', text: 'CTR - Contractor' },
                    { key: 'SOF', text: 'SOF - Security Officer' },
                    { key: 'TRN', text: 'TRN - Training' }
                  ]
                }),
                PropertyPaneToggle('compactMode', {
                  label: strings.CompactModeLabel
                }),
                PropertyPaneToggle('showExternalLinks', {
                  label: strings.ShowExternalLinksLabel
                }),
                PropertyPaneToggle('defaultExpanded', {
                  label: strings.DefaultExpandedLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
