import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CounterbuttonComponent } from "./counterbutton/counterbutton.component";
import { CounteroutputComponent } from "./counteroutput/counteroutput.component";
import { CustomoutputComponent } from "./customoutput/customoutput.component";

const routes :Routes=[
    {
        path:'',
        component:CounterComponent
    }
]

@NgModule({
    declarations:[
        CounterComponent,
        CounterbuttonComponent,
        CounteroutputComponent,
        CustomoutputComponent,
    ],
    imports: [CommonModule,FormsModule,  RouterModule.forChild(routes)],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  })
  export class CounterModule{

  }