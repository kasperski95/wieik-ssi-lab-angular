import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { EditComponent } from './screens/edit/edit.component';
import { HomeComponent } from './screens/home/home.component';
import { ManageComponent } from './screens/manage/manage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './components/template/template.component';
import { StudentListComponent } from './components/student-list/student-list.component';

@NgModule({
  declarations: [AppComponent, ManageComponent, EditComponent, HomeComponent, NavbarComponent, TemplateComponent, StudentListComponent],
  imports: [
    AppRoutes,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
