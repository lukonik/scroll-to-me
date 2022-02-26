
> A lightweight library that makes it easier to scroll to the nested elements in Angular application


The ``` scroll-to-me ``` library enables you to scroll to the element when it's nested inside the component component tree. Instead of finding an element using ``` document.querySelector ``` and then scroll to it, use more Angular way approach.



## Installation

install the package

```npm i @tonyjs/scroll-to-me ```

and then import ``` ScrollToMeModule ``` where you want to use it.

## Usage
It's super simple to use the library. there are three main directives you need to use
``` scrollToMeContainer,scrollToMe,scrollToMeInitiator``` 

At first you need to identify the container which needs to be scrolled, you will attach ```scrollToMeContainer``` directive to this element
```
  <div scrollToMeContainer>
   <!-- Content goes here -->
  </div>
```
if you want to use root scroll (document scroll )  use ```[root]="true"``` property.

Then you need to identify the elements  where you want to be scrolled and you have to set unique Key to those elements.
```
  // inside some nested component tree
  // articles =[
    {
      key: 'article 1',
      content: 'This is article 1 content',
    },
    {
      key: 'article 2',
       content: 'This is article 2 content',
    },
  ]
  <div *ngFor="let a of articles" [scrollToMe]="a.key" > {{a.content}} </div>
```

Then you can use ```scrollToMeInitiator``` which will scroll the container by key
```
articles =[
    {
      key: 'article 1',
      content: 'This is article 1 content',
    },
    {
      key: 'article 2',
       content: 'This is article 2 content',
    } // these are the keys that were used for scrollToMe directive keys. in real scenarious it will be same data
 <sidebar>
    <p *ngFor="let a of articles" [scrollToMeInitiator]="a.key"> {{a}} </p>
 </sidebar>
 ```

 In addition to that, you can also use ``` scrollToMeContainer ``` ``` scrollTo ``` method to scroll to key explicitely
 
 ```
 @Component({
  template: `
    <div scrollToMeContainer #scrollContainer="scrollToMeContainer"></div>
  `,
})
export class ScrollToMeContainer {
  @ViewChild('#scrollContainer')
  scrollContainer!: ScrollToMeContainer;

  scrollTo(key: string) {
    this.scrollContainer.scrollTo(key);
  }
}
  ```

### Final output
``` 
 const articles =[
    {
      key: 'article 1',
      content: 'This is article 1 content',
    },
    {
      key: 'article 2',
       content: 'This is article 2 content',
    } // these are the keys that were used for scrollToMe directive keys. in real scenarious it will be same data

 <div scrollToMeContainer>
  <sidebar>
    <p *ngFor="let a of articles" [scrollToMeInitiator]="a.key"> {{a}} </p>
  </sidebar>
  <div *ngFor="let a of articles" [scrollToMe]="a.key" > {{a.content}} </div>
</div>

```
## Example

[https://stackblitz.com/edit/scroll-to-me-example?file=src/app/app.component.html](Example on Stackblitz)

## API

### scrollToMeContainer - Directive
| Name              | Type     | Description                                                                                        |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------- |
| root              | @Input() | set to True if you want to use HTML root element for scroll insead of the container element itself |
| options           | @Input() | see ScrollToMeOptions                                                                              |
| scrollTo(key:any) | method   | used to scroll explicitely to key, if you don't use scrollToMeInitiator                            |

### scrollToMe - Directive
| Name       | Type     | Description                                                            |
| ---------- | -------- | ---------------------------------------------------------------------- |
| scrollToMe | @Input() | this property will be used by container to identify where to scroll to |

### scrollToMeInitiator - Directive
| Name                | Type     | Description                                                            |
| ------------------- | -------- | ---------------------------------------------------------------------- |
| scrollToMeInitiator | @Input() | this property will be used by container to identify where to scroll to |
| disabled            | @Input() | whether to disable scrolling behavior                                  |

### ScrollToMeOptions
| Name     | Type     | Description                                       |
| -------- | -------- | ------------------------------------------------- |
| behavior | Property | the scrolling behavior, either 'smooth' or 'auto' |
| offset   | Property | set the offset to the scroll                      |

### SCROLL_TO_ME_OPTIONS
By default ```scroll-to-me``` library uses smooth scroll, if you want to ovveride global settings use ``` SCROLL_TO_ME_OPTIONS ```

```
  @NgModule({
    providers:[
      {
        provide:SCROLL_TO_ME_OPTIONS,
        useValue:{
          behavior:'auto'
        } as ScrollToMeOptions
      }
    ]
  })
  export class AppModule{

  }
```


## Support
<a href="https://www.buymeacoffee.com/lukaoniko" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
