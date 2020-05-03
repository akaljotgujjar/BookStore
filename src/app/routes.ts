import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextbooksComponent } from './textbooks/textbooks.component';
import { RentComponent } from './rent/rent.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { BookCreateComponent } from './home/book-create/book-create.component';
import { BookEditComponent } from './home/book-edit/book-edit.component';

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
    },
    {
        path: 'signIn',
        component: SignInComponent,
        resolve: {},
        data: {
            name: 'signIn'
        }
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        resolve: {},
        data: {
            name: 'checkout'
        }
    },
    {
        path: 'shoppingcart',
        component: ShoppingcartComponent,
        resolve: {},
        data: {
            name: 'shoppingcart'
        }
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        resolve: {},
        data: {
            name: 'book-edit'
        }
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        resolve: {},
        data: {
            name: 'book-create'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);

