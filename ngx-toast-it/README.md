# ngxToastIt

ngxToastIt is a simple and lightweight Angular module providing Toasts for your application.
Purely written in Angular 8 and designed by hand.

![toast examples](https://github.com/Hangar42-de/ngx-toast-it/blob/master/src/assets/toast-preview.png)

## Usage

##### 1. Install via [NPM](http://www.npmjs.org):
  ```bash
  npm install @hangar42/ngx-toast-it
  ```
  or manually [download](https://github.com/Hangar42-de/ngx-toast-it/archive/master.zip).

##### 2. Include ngxToastIt as a dependency in your desired module:
  ```javascript
  import {ToastItModule} from 'ngx-toast-it';
  ...
  imports: [
    ToastItModule,
    ...
   ]
  ```

##### 3. Inject ToastItService in any class of the module:
  ```javascript
  constructor(private toastItService: ToastItService){}
  ```

##### 4. (Optional) Setup Config
 ```javascript
  import {ToastConfig, ToastPosition} from 'ngx-toast-it';
  ...
  public toastConfig: ToastConfig = {
      position?: ToastPosition.topRight,
      groupingThreshold?: 5,
      progressBarEnabled?: true
  };
  
  public someFunction(){
    this.toastItService.setConfig(this.toastConfig);
  }
  ```

##### 5. Create and fire Toast
  ```javascript
  import {Toast, ToastType} from 'ngx-toast-it';
  ...
  public toast: Toast = {
      type: ToastType.success,
      heading: 'Great',
      subheading?: 'You found the Toast Component',
      message: 'Let us know what you like about it',
      timeout?: 0
    };
  ...
  public someFunction(){
      this.toastItService.createToast(this.toast);
  }
  ```


## Development

* Clone the repo or [download](https://github.com/Hangar42-de/ngx-toast-it/archive/master.zip)
* Install dependencies: ``npm install``
* Run ``npm run build:library``
* Run ``ng serve``

## License

GPLv3 [Link](https://github.com/Hangar42-de/ngx-toast-it/blob/master/LICENSE/)

## Maintainers

- [Hangar 42](https://hangar42.de)
- [Dennis Rösner](https://rösner.de)
