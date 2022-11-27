import { Component, VERSION } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        That's template for Angular v{{version}}
      </h1>     
    </ul>
    
  `,
  styles: [],
})
export class AppComponent {
  version = VERSION;
}
