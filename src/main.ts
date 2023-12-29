import { HomeComponent } from './app/components/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(HomeComponent).catch(err => console.error(err));
