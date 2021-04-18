import {Component, Input, OnInit} from '@angular/core';
import {SideMenuItemModel} from '../../models/side-menu-item.model';
import {MENU_ITEMS} from './side-menu.configuration';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuItems: SideMenuItemModel[] | undefined;
  @Input() isCollapsed: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.generateMenuLinks();
    // console.log(this);
  }

  /**
   * Generates menu links in left-side modal
   */
  public generateMenuLinks(): void {
    this.menuItems = MENU_ITEMS as SideMenuItemModel[];
  }

  // private filterMenuLinksUsers(items: SideMenuItemModel[]): SideMenuItemModel[] {
  //   const menuItems = [ ...items ];
  //   for (let i = 0; i < menuItems.length; i++) {
  //     if (menuItems[i].adminAccess) {
  //       menuItems.splice(i, 1);
  //     }
  //     if (this.authState.userRole !== 'COMPANY_ADMIN') {
  //       if (menuItems[i].companyAdminAccess) {
  //         menuItems.splice(i, 1);
  //       }
  //     } else if (menuItems[i].children && menuItems[i].children.length > 0) {
  //       menuItems[i].children = this.filterMenuLinksUsers(menuItems[i].children);
  //     }
  //   }
  //   return menuItems;
  // }
  //
  // private filterMenuLinksCompanyAdmin(items: SideMenuItemModel[]): SideMenuItemModel[] {
  //   const menuItems = [ ...items ];
  //   for (let i = 0; i < menuItems.length; i++) {
  //     if (menuItems[i].companyAdminAccess) {
  //       menuItems.splice(i, 1);
  //     } else if (menuItems[i].children && menuItems[i].children.length > 0) {
  //       menuItems[i].children = this.filterMenuLinksCompanyAdmin(menuItems[i].children);
  //     }
  //   }
  //   return menuItems;
  // }


}
