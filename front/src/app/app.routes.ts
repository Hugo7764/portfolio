import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { PassionComponent } from './passion/passion.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'formation', component: FormationComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'passions', component: PassionComponent},
    { path: 'contact', component: ContactComponent}
];
