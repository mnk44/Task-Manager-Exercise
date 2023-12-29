import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { MainComponent } from './app/components/main/main.component';
import { routes } from './app/app-routing.module';

bootstrapApplication(MainComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ] 
}).catch(err => console.error(err));
