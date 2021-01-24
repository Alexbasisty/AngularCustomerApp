import { CustomerComponent } from "../Customer/customerApp.CustomerComponent";
import { HomeComponent } from "../Home/customerApp.HomeComponent";
import { SupplierComponent } from "../Supplier/customerApp.SupplierComponent";

export const MainRoutes = [
    {
        path: 'Home',
        component: HomeComponent, 
    },
    {
        path: 'Supplier',
        component: SupplierComponent, 
    },
    {
        path: 'Customer',
        component: CustomerComponent, 
    },
]