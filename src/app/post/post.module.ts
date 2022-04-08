import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "../add-post/add-post.component";
import { EditComponent } from "../edit/edit.component";
import { PostsComponent } from "./postslist/postslist.component";

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
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PostModule { }