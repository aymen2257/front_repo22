import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { TotpComponent } from './totp/totp.component';
import { TokenComponent } from './register/token.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { VerifiyTokenComponent } from './verifiy-token/verifiy-token.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ValuesComponent } from './values/values.component';
import { FooterComponent } from './footer/footer.component';
import { ContratsComponent } from './contrats/contrats.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateImageComponent } from './update-image/update-image.component';
import { UpdateInformationsComponent } from './update-informations/update-informations.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { UnProduitComponent } from './un-produit/un-produit.component';
import { AgenceComponent } from './agence/agence.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListeReclamationsComponent } from './liste-reclamations/liste-reclamations.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ListeBranchesComponent } from './liste-branches/liste-branches.component';
import { AddBrancheComponent } from './add-branche/add-branche.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ChartComponent } from './chart/chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { ReclamtionuserComponent } from './reclamtionuser/reclamtionuser.component';
import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { ContactByIdComponent } from './contact-by-id/contact-by-id.component';
import { ContratByIdComponent } from './contrat-by-id/contrat-by-id.component';
import { SuccessComponent } from './success/success.component';
import { ListeReclamationRefuseComponent } from './liste-reclamation-refuse/liste-reclamation-refuse.component';
import { ListeReclamationAccepteComponent } from './liste-reclamation-accepte/liste-reclamation-accepte.component';
import { ListeUserVerifieComponent } from './liste-user-verifie/liste-user-verifie.component';
import { ListeUserDesactivesComponent } from './liste-user-desactives/liste-user-desactives.component';
import { ListeUserNonVerifieComponent } from './liste-user-non-verifie/liste-user-non-verifie.component';
import { Chart2Component } from './chart2/chart2.component';

import{PanelMenuModule} from 'primeng/panelmenu';
import { ListpaiementsComponent } from './listpaiements/listpaiements.component';
import { AdminagenceComponent } from './adminagence/adminagence.component';
import { CreateagenceComponent } from './createagence/createagence.component';
import { UpdateagenceComponent } from './updateagence/updateagence.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component'; // Add this line
 // Add this line

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        TotpComponent,
        TokenComponent,
        BoardAdminComponent,
        BoardUserComponent,
        ForgetPasswordComponent,
        NewPasswordComponent,
        VerifiyTokenComponent,
        SliderComponent,
        AboutComponent,
        ProductsComponent,
        ValuesComponent,
        FooterComponent,
        ContratsComponent,
        ContactComponent,
        UpdateImageComponent,
        UpdateInformationsComponent,
        UpdatePasswordComponent,
        ReclamationsComponent,
        UnProduitComponent,
        AgenceComponent,
        ListeContratComponent,
        ListeUsersComponent,
        ListeReclamationsComponent,
        ListeProduitsComponent,
        ListeBranchesComponent,
        AddBrancheComponent,
        SidebarComponent,
        ReclamtionuserComponent,
        AddProduitComponent,
        ListeContactsComponent,
        ContactByIdComponent,
        ContratByIdComponent,
        ListeReclamationRefuseComponent,
        ListeReclamationAccepteComponent,
        ListeUserVerifieComponent,
        ListeUserDesactivesComponent,
        ListeUserNonVerifieComponent,
      SuccessComponent,
      ListpaiementsComponent,
      AdminagenceComponent,
      CreateagenceComponent,
      UpdateagenceComponent,
      EditProduitComponent
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        authInterceptorProviders,
        provideCharts(withDefaultRegisterables())
        // provideCharts(withDefaultRegisterables())
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        CardModule,
        FloatLabelModule,
        PasswordModule,
        TableModule,
        DropdownModule,
        FileUploadModule,
        InputTextareaModule,
        TooltipModule,
        PanelModule,
        ListboxModule,
        ChartComponent,
        Chart2Component,
       PanelMenuModule
    ]
})
export class AppModule { }
