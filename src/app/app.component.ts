import { Component, OnInit } from '@angular/core';
import { SideNavBarItem } from 'src/app/side-nav-bar/side-nav-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    sideNavBarItems: SideNavBarItem[] = [];

    ngOnInit(): void {
        this.setupSideNavBarItems();
    }

    private setupSideNavBarItems(): void {
        this.sideNavBarItems.push(new SideNavBarItem('Facts', 'facts'));
        this.sideNavBarItems.push(new SideNavBarItem('About', 'about'));
    }
}
