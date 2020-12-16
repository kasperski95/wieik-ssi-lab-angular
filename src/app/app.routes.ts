import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './screens/edit/edit.component';
import { HomeComponent } from './screens/home/home.component';
import { ManageComponent } from './screens/manage/manage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'edit', component: EditComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
