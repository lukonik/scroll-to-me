
> A lightweight library that makes it easier to scroll to the nested elements in Angular application


The ``` scroll-to-me ``` library enables you to scroll to the element when it's nested inside the component tree. Instead of finding an element using ``` document.querySelector ``` and scroll to it, use more Angular way approach.



## Installation

install the package

```npm i @tonyjs/scroll-to-me ```

and import ``` ScrollToMeModule ``` where you want to use it.

## Usage
there are three main directives you need to use
``` scrollToMeContainer,scrollToMe,scrollToMeInitiator``` 

At first you need to identify the container which needs to be scrolled, you will attach ```scrollToMeContainer``` directive to this element
```
  <div scrollToMeContainer>
   <!-- Content goes here -->
  </div>
```
*(if you want to use root scroll (document scroll )  use ```[root]="true"``` property.)*

After that, you need to identify the elements where you want container to scroll.
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
*(These elements must live inside the ``` scrollToMeContainer ``` element)*

Finally you can use ``` scrollToMeContainer``` directive to scroll to that particular element

 ```
 @Component({
  template: `
    <div scrollToMeContainer #scrollContainer="scrollToMeContainer">
     <!-- those articles are nested here -->
    </div>
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

In addition to that, you can use ```scrollToMeInitiator```  directive, which will automatically scroll to the particualr key on click.
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
[Example on Stackblitz](https://stackblitz.com/edit/scroll-to-me-example?file=src/app/app.component.html)

## API

### scrollToMeContainer
| Name              | Type     | Description                                                                                        |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------- |
| root              | @Input() | set to True if you want to use HTML root element for scroll insead of the container element itself |
| options           | @Input() | see ScrollToMeOptions                                                                              |
| scrollTo(key:any) | method   | used to scroll explicitely to key, if you don't use scrollToMeInitiator                            |

### scrollToMe
| Name       | Type     | Description             |
| ---------- | -------- | ----------------------- |
| scrollToMe | @Input() | the unique key property |

<br>

### scrollToMeInitiator
| Name                | Type     | Description                           |
| ------------------- | -------- | ------------------------------------- |
| scrollToMeInitiator | @Input() | key property where you want to scroll |
| disabled            | @Input() | whether to disable scrolling behavior |

### ScrollToMeOptions
| Name     | Type     | Description                                                                |
| -------- | -------- | -------------------------------------------------------------------------- |
| behavior | Property | the scrolling behavior, either 'smooth' or 'auto', **'smooth' by default** |
| offset   | Property | set the offset to the scroll                                               |

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
