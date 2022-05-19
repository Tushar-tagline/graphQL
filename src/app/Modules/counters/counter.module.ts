import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CoreModule } from "src/app/core/core.module";
import { counterReducer } from "../../state/couter.reducer";
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
    imports: [CommonModule,FormsModule,StoreModule.forFeature('firstngrx',counterReducer),  RouterModule.forChild(routes),CoreModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  })
  export class CounterModule{

  }