import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import router module => dùng để chuyển trang
import { RouterModule, Routes } from '@angular/router';
//import httpClientModule => call Api
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { CallWeatherComponent } from './components/call-weather/call-weather.component';

// Service
import { ProductServiceService } from './services/product-service.service';
import { WeatherService } from './services/weather.service';
import { DemoCallPhpComponent } from './components/demo-call-php/demo-call-php.component';
import { CallPhpService } from './services/call-php.service';

// Tạo ra routes (Chỉ định cho nó cái link và component(nội dung) của link đó)
const routes : Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "products",
    component: ProductPageComponent
  },
  {
    path: "products/add",
    component: FormProductComponent
  },
  {
    path: "products/:id/edit",
    component: FormEditComponent
  },
  {
    path: "weather",
    component: CallWeatherComponent
  },
  {
    path: "demoCallPHP",
    component: DemoCallPhpComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [ // nơi chứa component tạo ra => ng g c ten_component => import tên class
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductPageComponent,
    NotFoundPageComponent,
    FormEditComponent,
    CallWeatherComponent,
    DemoCallPhpComponent,
    FormProductComponent
  ],
  imports: [ // nơi chứa module của node_module mình import vào
    BrowserModule,
    RouterModule.forRoot(routes), // thằng routerModule này nó sẽ add cái route tạo ra ở tren vào
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductServiceService,
    WeatherService,
    CallPhpService
  ], // nơi chứa service tạo ra => ng g service ten_service => import ten class của service đó
  bootstrap: [AppComponent]
})
export class AppModule { }
