import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResumenordenComponent } from './pages/resumenorden/resumenorden.component';
import { DetallecomprasComponent } from './pages/detallecompras/detallecompras.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { CrearproductoComponent } from './pages/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './pages/editarproducto/editarproducto.component';
import { MostrarproductoComponent } from './pages/mostrarproducto/mostrarproducto.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'carrito',
        component: CarritoComponent
    },
    {
        path:'productos',
        component: ProductosComponent
    },
    {
        path:'registro',
        component: RegistroComponent
    },
    {
        path:'resumenorden',
        component: ResumenordenComponent
    },
    {
        path:'detallecompras',
        component: DetallecomprasComponent
    },
    {
        path:'compras',
        component: ComprasComponent
    },
    {
        path:'crearproducto',
        component: CrearproductoComponent
    },
    {
        path:'editarproducto',
        component: EditarproductoComponent
    },
    {
        path:'mostrarproductos',
        component: MostrarproductoComponent
    },
    {
        path:'usuarios',
        component: UsuariosComponent
    }
    
];
