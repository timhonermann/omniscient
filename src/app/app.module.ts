import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { OmSkeletonComponent } from 'src/shared/om-skeleton/om-skeleton.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { RouterModule } from '@angular/router';
import { FactsComponent } from './facts/facts.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        OmSkeletonComponent,
        HeaderComponent,
        SideNavBarComponent,
        FactsComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: 'facts', component: FactsComponent},
            {path: 'about', component: AboutComponent},
            {path: '', redirectTo: '/facts', pathMatch: 'full'},
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
