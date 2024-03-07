import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
@NgModule({
  
    declarations: [
    ],
    providers: [
    ]
})
export class CoreModule {
    /**
     * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
     * providers. Recommended in the
     * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
     */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
		};
	}
	  static forChild(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
     
        };
    }
}