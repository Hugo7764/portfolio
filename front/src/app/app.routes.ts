import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'contact-us', component: ContactComponent}
];
