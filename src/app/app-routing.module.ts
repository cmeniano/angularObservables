import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from  './content/contact/contact.component';
import {ProductListComponent} from  './content/shop/product-list/product-list.component';
import {ProductViewComponent} from  './content/shop/product-view/product-view.component';
import {HomeComponent} from  './content/home/home.component';
import {NotfoundComponent} from  './content/notfound/notfound.component';
import {OneColumnComponent} from  './one-column/one-column.component';
import {TwoColumnComponent} from  './two-column/two-column.component';
import {AboutComponent} from  './content/about/about.component';
import {ShopComponent} from  './content/shop/shop.component';



const routes: Routes = [
    {path: '',component:TwoColumnComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'shop', component: ShopComponent, children: [
            {path: '',component:ProductListComponent},
            {path: 'product/:id/view', component:ProductViewComponent},
            {path: '**',redirectTo: ''},
        ]},

    ]},
    {path: 'contact-us', component: ContactComponent},
    {path: 'about-us', component: AboutComponent},
    {path: 'notfound',component:OneColumnComponent, children: [
        {path: '',component:NotfoundComponent},
    ]},
    {path: '**',redirectTo: 'notfound'},
]



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }