import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GCDonutListComponent } from './gcdonut-list/gcdonut-list.component';
import { GCDonutDetailComponent } from './gcdonut-detail/gcdonut-detail.component';
import { HallOfFameListComponent } from './hall-of-fame-list/hall-of-fame-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GCDonutListComponent,
    GCDonutDetailComponent,
    HallOfFameListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'gcdonut-list', component: GCDonutListComponent },
      { path: 'gcdonut-detail/:id', component: GCDonutDetailComponent },
      { path: 'hall-of-fame-list', component: HallOfFameListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
