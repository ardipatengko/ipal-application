import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ContentComponent } from './content/content.component';
import {MatTableModule} from '@angular/material/table';
import { ContentTableComponent } from './content-table/content-table.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { ContentTableDetailComponent } from './content-table-detail/content-table-detail.component';
import {MatCardModule, MatCard} from '@angular/material/card';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ipalDetail', component: ContentTableDetailComponent}
]

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ContentTableComponent,
    LoginComponent,
    HomeComponent,
    ContentTableDetailComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    routing,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
