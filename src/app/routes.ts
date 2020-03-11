import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextbooksComponent } from './textbooks/textbooks.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {},
        data: {
            name: 'Home'
        }
    },
    {
        path: 'textbook',
        component: TextbooksComponent,
        resolve: {},
        data: {
            name: 'Textbooks'
        }
    },
    {
        path: 'rent',
        component: RentComponent,
        resolve: {},
        data: {
            name: 'rent'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);

