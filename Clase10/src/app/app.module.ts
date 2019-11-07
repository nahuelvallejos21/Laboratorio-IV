import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './componentes/form/form.component';
import { MiCaptchaComponent } from './componentes/mi-captcha/mi-captcha.component';
import { RecaptchaModule } from 'ng-recaptcha';
import  {NgxQRCodeModule} from  'ngx-qrcode2' ;  
import { MiQrComponent } from './componentes/mi-qr/mi-qr.component';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { LeerQrComponent } from './componentes/leer-qr/leer-qr.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MiCaptchaComponent,
    MiQrComponent,
    LeerQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    NgxQRCodeModule,
    NgQRCodeReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
