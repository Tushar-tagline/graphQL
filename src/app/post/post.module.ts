import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Store, StoreModule } from "@ngrx/store";
import { AddPostComponent } from "../add-post/add-post.component";
import { EditComponent } from "../edit/edit.component";
import { PostsComponent } from "./postslist/postslist.component";
import { postReducer } from "./state/post.reducer";

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        children: [{
            path: 'addpost',
            component: AddPostComponent
        },
        {
            path: 'edit/:id',
            component: EditComponent
        }
        ]
    }
]

@NgModule({

    declarations: [
        PostsComponent,
        AddPostComponent,
        EditComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('posts',postReducer)],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PostModule { }