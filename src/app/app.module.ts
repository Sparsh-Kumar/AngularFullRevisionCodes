import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ComponentInteractionFromParentToChildComponent } from './component-interaction-from-parent-to-child/component-interaction-from-parent-to-child.component';
import { ComponentInteractionFromChildToParentComponent } from './component-interaction-from-child-to-parent/component-interaction-from-child-to-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesAndHttpComponent } from './services-and-http/services-and-http.component';
import { TestServiceService } from './test-service.service';
import { HttpAndObservablesComponent } from './http-and-observables/http-and-observables.component';
import { HttpAndObservablesService } from './http-and-observables.service'; 
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-child/input-child.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { OutputParentComponent } from './output-parent/output-parent.component'; // this module is very necessary for making requests to an api endpoint using angular 
// remember here you have to import "HttpClientModule" and in service you have to import "HttpClient"
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ComponentInteractionFromParentToChildComponent,
    ComponentInteractionFromChildToParentComponent,
    PipesComponent,
    ServicesAndHttpComponent,
    HttpAndObservablesComponent,
    ErrorHandlingComponent,
    InputParentComponent,
    InputChildComponent,
    OutputChildComponent,
    OutputParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TestServiceService,
    HttpAndObservablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
