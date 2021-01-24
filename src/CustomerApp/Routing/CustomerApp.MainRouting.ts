import { HomeComponent } from "../Home/customerApp.HomeComponent";

export const MainRoutes = [
    {
        path: 'Home',
        component: HomeComponent, 
    },
    { 
        path: 'Supplier', 
        loadChildren: () => import('../Supplier/customerApp.SupplierModule').then(m => m.SupplierModule) 
    },
    // {
    //     path: 'Supplier',
    //     loadChildren: '../Supplier/customerApp.SupplierComponent#SupplierModule', 
    // },
    {
        path: 'Customer',
        loadChildren: () => import('../Customer/customerApp.CustomerModule').then(m => m.CustomerModule), 
    },
]