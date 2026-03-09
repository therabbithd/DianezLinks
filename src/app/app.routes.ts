import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SocialsComponent } from './pages/socials/socials.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'redes', component: SocialsComponent },
    { path: 'proyectos', component: ProjectsComponent },
    { path: '**', redirectTo: '' }
];
