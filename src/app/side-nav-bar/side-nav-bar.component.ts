import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

export class SideNavBarItem {
    constructor(
        public name: string,
        public path: string
    ) {
    }
}

@Component({
    selector: 'app-side-nav-bar',
    templateUrl: './side-nav-bar.component.html',
    styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

    @Input() sideNavBarItems: SideNavBarItem[] = [];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onClick(sideNavBarItem: SideNavBarItem): void {
        this.router.navigate([`/${sideNavBarItem.path}`]);
    }

    isSideNavBarItemActive(item: SideNavBarItem): boolean {
        return this.router.isActive(item.path, true);
    }

}
