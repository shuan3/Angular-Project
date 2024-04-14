import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  //https://www.youtube.com/watch?v=iZ1mlcCkY8A&list=PLEiEAq2VkUUIzcMkvJKwXLf13SqV8lPes&index=2
