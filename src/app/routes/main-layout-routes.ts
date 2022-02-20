import { Routes } from '@angular/router';

export const MAIN_LAYOUT: Routes = [
 
    {
        path: '',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
    },
    
]