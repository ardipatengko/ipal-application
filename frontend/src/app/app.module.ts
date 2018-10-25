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
import { ContentTableComponent, DialogContentDialog } from './content-table/content-table.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { ContentTableDetailComponent } from './content-table-detail/content-table-detail.component';
import {MatCardModule, MatCard} from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { ContentListComponent } from './content-list/content-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AuthGuard } from './guard/auth.guard';
import { IpalDataListComponent, DialogContentAdminDialog } from './admin/ipal-data-list/ipal-data-list.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material';
import { IpalDataFormComponent } from './admin/ipal-data-form/ipal-data-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, 
    children : [
      { path: 'home', component: ContentComponent},
      { path: 'listCategory', component: ContentListComponent},
      { path: 'listCategory/:idIpalCategory', component: ContentTableComponent},
      { path: 'ipalDetail', component: ContentTableDetailComponent},
      { path: 'allMap', component: ContentTableDetailComponent}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: HomeAdminComponent, canActivate: [AuthGuard],
    children: [
      { path: 'ipalList', component: IpalDataListComponent, canActivate: [AuthGuard]},
      { path: 'ipalForm', component: IpalDataFormComponent, canActivate: [AuthGuard]}
    ]
  }
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
    ContentTableDetailComponent,
    ContentListComponent,
    DialogContentDialog,
    DialogContentAdminDialog,
    HomeAdminComponent,
    IpalDataListComponent,
    IpalDataFormComponent,
  ],
  entryComponents: [
    DialogContentDialog, 
    DialogContentAdminDialog],
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
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAb9yHaBxEeqBnNfumCo0u_K5y8BR9dWvw'
    }),
    MatListModule,
    MatTreeModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
