import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BheaderComponent } from './blog/bheader/bheader.component';
import { BbodyComponent } from './blog/bbody/bbody.component';
import { CitaComponent } from './cita/cita.component';
import { CheaderComponent } from './cita/cheader/cheader.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CoheaderComponent } from './contactanos/coheader/coheader.component';
import { CobodyComponent } from './contactanos/cobody/cobody.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EheaderComponent } from './especialidad/eheader/eheader.component';
import { EbodyComponent } from './especialidad/ebody/ebody.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GheaderComponent } from './galeria/gheader/gheader.component';
import { GbodyComponent } from './galeria/gbody/gbody.component';
import { InicioComponent } from './inicio/inicio.component';
import { IheaderComponent } from './inicio/iheader/iheader.component';
import { IbodyComponent } from './inicio/ibody/ibody.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NheaderComponent } from './nosotros/nheader/nheader.component';
import { NbodyComponent } from './nosotros/nbody/nbody.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PheaderComponent } from './portafolio/pheader/pheader.component';
import { PbodyComponent } from './portafolio/pbody/pbody.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { PrheaderComponent } from './pregunta/prheader/prheader.component';
import { PrbodyComponent } from './pregunta/prbody/prbody.component';
import { CambiableComponent } from './cambiable/cambiable.component';
import { IniciadoComponent } from './cita/cheader/iniciado/iniciado.component';
import { NoiniciadoComponent } from './cita/cheader/noiniciado/noiniciado.component';
import { HorasComponent } from './cita/horas/horas.component';
import { FechasComponent } from './cita/fechas/fechas.component';
import { EspecialidadesComponent } from './cita/especialidades/especialidades.component';
import { PagoComponent } from './cita/pago/pago.component';
import { ConfirmacionComponent } from './cita/confirmacion/confirmacion.component';
import { BoletaComponent } from './cita/boleta/boleta.component';
import { PostergacionComponent } from './cita/postergacion/postergacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BheaderComponent,
    BbodyComponent,
    CitaComponent,
    CheaderComponent,
    ContactanosComponent,
    CoheaderComponent,
    CobodyComponent,
    EspecialidadComponent,
    EheaderComponent,
    EbodyComponent,
    FooterComponent,
    GaleriaComponent,
    GheaderComponent,
    GbodyComponent,
    InicioComponent,
    IheaderComponent,
    IbodyComponent,
    NosotrosComponent,
    NheaderComponent,
    NbodyComponent,
    PortafolioComponent,
    PheaderComponent,
    PbodyComponent,
    PreguntaComponent,
    PrheaderComponent,
    PrbodyComponent,
    CambiableComponent,
    IniciadoComponent,
    NoiniciadoComponent,
    HorasComponent,
    FechasComponent,
    EspecialidadesComponent,
    PagoComponent,
    ConfirmacionComponent,
    BoletaComponent,
    PostergacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
