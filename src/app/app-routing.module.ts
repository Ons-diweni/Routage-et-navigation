import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';

const routes: Routes = [{path:'invoiceManagement',component:InvoiceComponentComponent},
{path:'maininvoiceManagement',component:MainInvoiceComponentComponent , 
children :[{path:'invoice/:id/:activate',component:InvoiceComponentComponent}]},
{path:'invoice/:id/:activate',component:InvoiceComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
