import { Component } from '@angular/core';
import { Md2Toast } from 'md2';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
<h2>Accordion</h2>
  <hr />
  <div>
    <md2-accordion [multiple]="multiple">
      <md2-accordion-tab class="test" *ngFor="let tab of accordions" [header]="tab.title" [active]="tab.active" [disabled]="tab.disabled">
        {{tab.content}}
      </md2-accordion-tab>
    </md2-accordion>
  </div>
<h2>Autocomplete</h2>
  <hr />
  <div>
    <md2-autocomplete [items]="items"
                      item-text="name"
                      [(ngModel)]="item"
                      [disabled]="disabled"
                      (change)="change($event)"
                      placeholder="No city selected">
    </md2-autocomplete>
    <pre>{{item | json}}</pre>
    <md2-autocomplete [items]="items"
                      item-text="name"
                      [(ngModel)]="item"
                      [disabled]="disabled"
                      (change)="change($event)"
                      placeholder="No city selected">
    </md2-autocomplete>
  </div>
<h2>Collapse</h2>
  <hr />
  <div>
    <button type="button" md-raised-button color="primary" (click)="isCollapsedContent = !isCollapsedContent">
      Show / Hide Content (Toggle collapse)
    </button>
    <hr>
    <div [collapse]="isCollapsedContent" class="card card-block card-header">
      <div class="well well-lg">
        HTML content goes here !
        <b>bold text</b> <br>
        <span>this is a collapse example</span>
      </div>
    </div>
    <h3>Angular 2 Collapse HTML Content (IMAGE)</h3>
    <button type="button" md-raised-button color="primary" (click)="isCollapsedImage = !isCollapsedImage">
      Show / Hide Image (Toggle collapse)
    </button>
    <hr>
    <div [collapse]="isCollapsedImage" class="card card-block card-header">
      Collapsed content 2
    </div>
  </div>
 <h2>colorpicker</h2>
  <hr />
  <div>
      <h4>Bind on Input Textbox</h4>
      <md2-colorpicker [(ngModel)]="color" position="bottom" (change)="change($event)">
      </md2-colorpicker>
  </div>
<h2>Date Picker</h2>
  <hr />
  <div>
    <md2-datepicker [(ngModel)]="date"
                    [disabled]="disabled"
                    (change)="change($event)">
    </md2-datepicker>
    <pre>{{date}}</pre>
  </div>
<h2>Dialog</h2>
  <hr />
  <div>
    <md2-dialog #alert>
      Clicking the button will close this dialog
      <md2-dialog-footer>
        <button md-raised-button (click)="close(alert)">Got it</button>
      </md2-dialog-footer>
    </md2-dialog>
    <button md-raised-button color="primary" (click)="show(alert)">Alert Dialog</button>
    <md2-dialog #confirm>
      <md2-dialog-title>Would you like to delete your debt?</md2-dialog-title>
      All of the banks have agreed to forgive you your debts.
    </md2-dialog>
    <button md-raised-button color="primary" (click)="confirm.show()">
      Confirm Dialog
    </button>
    <pre>{{dialogHeader}}</pre>
    <md2-dialog #custom1 title="{{dialogHeader}}">
      <div>
        <input [(ngModel)]="dialogHeader" />
        <p>
          The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous
          tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species
          are found in nature as wild mangoes. They all belong to the flowering plant family
          Anacardiaceae. The mango is native to South and Southeast Asia, from where it has been
          distributed worldwide to become one of the most cultivated fruits in the tropics.
        </p>
        <p>
          The highest concentration of Mangifera genus is in the western part of Malesia (Sumatra,
          Java and Borneo) and in Burma and India. While other Mangifera species (e.g. horse mango,
          M. foetida) are also grown on a more localized basis, Mangifera indica&mdash;the "common
          mango" or "Indian mango"&mdash;is the only mango tree commonly cultivated in many tropical
          and subtropical regions.
        </p>
        <p>
          It originated in Indian subcontinent (present day India and Pakistan) and Burma. It is the
          national fruit of India, Pakistan, and the Philippines, and the national tree of
          Bangladesh. In several cultures, its fruit and leaves are ritually used as floral
          decorations at weddings, public celebrations, and religious ceremonies.
        </p>
      </div>
    </md2-dialog>
    <md2-dialog #custom title="{{dialogHeader}}">
      <div>
        <button md-raised-button color="primary" flex="auto" (click)="custom1.show()">
          Custom Dialog
        </button>
        <input [(ngModel)]="dialogHeader" />
        <p>
          The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous
          tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species
          are found in nature as wild mangoes. They all belong to the flowering plant family
          Anacardiaceae. The mango is native to South and Southeast Asia, from where it has been
          distributed worldwide to become one of the most cultivated fruits in the tropics.
        </p>
        <p>
          The highest concentration of Mangifera genus is in the western part of Malesia (Sumatra,
          Java and Borneo) and in Burma and India. While other Mangifera species (e.g. horse mango,
          M. foetida) are also grown on a more localized basis, Mangifera indica&mdash;the "common
          mango" or "Indian mango"&mdash;is the only mango tree commonly cultivated in many tropical
          and subtropical regions.
        </p>
        <p>
          It originated in Indian subcontinent (present day India and Pakistan) and Burma. It is the
          national fruit of India, Pakistan, and the Philippines, and the national tree of
          Bangladesh. In several cultures, its fruit and leaves are ritually used as floral
          decorations at weddings, public celebrations, and religious ceremonies.
        </p>
      </div>
    </md2-dialog>
    <button md-raised-button color="primary" (click)="custom.show()">
      Custom Dialog
    </button>
  </div>
<h2>Menu</h2>
  <hr />
  <div>
    <style>
      [md2-menu] { position: relative; display: inline-block; }
      [md2-menu] .md2-menu-content { position: absolute; top: 0; left: 0; display: inline-block; background: #fff; list-style: none; min-width: 100px; padding: 8px 0; margin: 0; -moz-transform: scale(0); -ms-transform: scale(0); -o-transform: scale(0); -webkit-transform: scale(0); transform: scale(0); -moz-transform-origin: left top; -ms-transform-origin: left top; -o-transform-origin: left top; -webkit-transform-origin: left top; transform-origin: left top; -moz-transition: all .4s linear; -o-transition: all .4s linear; -webkit-transition: all .4s linear; transition: all .4s linear; -moz-transition-duration: 0.2s; -o-transition-duration: 0.2s; -webkit-transition-duration: 0.2s; transition-duration: 0.2s; box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12); z-index: 1; border-radius: 2px; }
      [md2-menu] .md2-menu-content.right { left: auto; right: 0; -moz-transform-origin: right top; -ms-transform-origin: right top; -o-transform-origin: right top; -webkit-transform-origin: right top; transform-origin: right top; }
      [md2-menu] .md2-menu-content.top { top: auto; bottom: 0; -moz-transform-origin: left bottom; -ms-transform-origin: left bottom; -o-transform-origin: left bottom; -webkit-transform-origin: left bottom; transform-origin: left bottom; }
      [md2-menu] .md2-menu-content.top.right { -moz-transform-origin: right bottom; -ms-transform-origin: right bottom; -o-transform-origin: right bottom; -webkit-transform-origin: right bottom; transform-origin: right bottom; }
      [md2-menu].open > .md2-menu-content { -moz-transform: scale(1); -ms-transform: scale(1); -o-transform: scale(1); -webkit-transform: scale(1); transform: scale(1); }
      [md2-menu] li { position: relative; display: block; }
      [md2-menu] .md2-menu-item { position: relative; display: block; padding: 0 16px; line-height: 36px; color: rgba(0,0,0,.87); cursor: pointer; text-decoration: none; white-space: nowrap; -moz-transition: 0.3s; -o-transition: 0.3s; -webkit-transition: 0.3s; transition: 0.3s; }
      [md2-menu] .md2-menu-item:hover { background-color: rgba(158,158,158,0.2); }
    </style>
    <div>
      Default direction<br />
      <div md2-menu>
        <button md-raised-button color="primary" md2-menu-open>Default Menu <span class="caret"></span></button>
        <ul class="md2-menu-content">
          <li><a class="md2-menu-item">Badman</a></li>
          <li><a class="md2-menu-item">Sadman</a></li>
          <li><a class="md2-menu-item">Lieman</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div>
      Right direction<br />
      <div md2-menu>
        <button md-raised-button color="primary" md2-menu-open>Default Menu <span class="caret"></span></button>
        <ul class="md2-menu-content right">
          <li><a class="md2-menu-item">Badman</a></li>
          <li><a class="md2-menu-item">Sadman</a></li>
          <li><a class="md2-menu-item">Lieman</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div>
      Top direction<br />
      <div md2-menu>
        <button md-raised-button color="primary" md2-menu-open>Default Menu <span class="caret"></span></button>
        <ul class="md2-menu-content top">
          <li><a class="md2-menu-item">Badman</a></li>
          <li><a class="md2-menu-item">Sadman</a></li>
          <li><a class="md2-menu-item">Lieman</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div>
      Top Right direction<br />
      <div md2-menu>
        <button md-raised-button color="primary" md2-menu-open>Default Menu <span class="caret"></span></button>
        <ul class="md2-menu-content top right">
          <li><a class="md2-menu-item">Badman</a></li>
          <li><a class="md2-menu-item">Sadman</a></li>
          <li><a class="md2-menu-item">Lieman</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div>
      Multi Level<br />
      <div md2-menu>
        <button md-raised-button color="primary" md2-menu-open>Default Menu <span class="caret"></span></button>
        <ul class="md2-menu-content">
          <li><a class="md2-menu-item">Badman</a></li>
          <li><a class="md2-menu-item">Sadman</a></li>
          <li><a class="md2-menu-item">Lieman</a></li>
          <li md2-menu>
            <a class="md2-menu-item" md2-menu-not-closable md2-menu-open>2nd Level Menu <span class="caret"></span></a>
            <ul class="md2-menu-content">
              <li><a class="md2-menu-item">Badman</a></li>
              <li><a class="md2-menu-item">Sadman</a></li>
              <li><a class="md2-menu-item">Lieman</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
<h2>Tabs</h2>
  <hr />
  <div>
    <md2-tabs class="test" selectedIndex="3" (change)="change($event)">
      <md2-tab class="test" label="Static title">Static content</md2-tab>
      <md2-tab *ngFor="let tab of tabs"
               [label]="tab.title"
               [active]="tab.active"
               [disabled]="tab.disabled">
        {{tab.content}}
      </md2-tab>
      <md2-tab active="true">
        <template md2-tab-label>
          Static title211
        </template>
        Static content2
      </md2-tab>
    </md2-tabs>
  </div>
<h2>Tooltip</h2>
  <hr />
  <div>
    <span tooltip-position="before" tooltip="On the Left!">Left</span> <br />
    <span tooltip-position="after" tooltip="On the Right!">Right</span> <br />
    <span tooltip-position="below" tooltip="On the Bottom!">Bottom</span> <br />
    <span tooltip-position="above" tooltip="On the Top!">Top</span> <br />
    <span tooltip-delay='1000' tooltip='appears with delay'>Delayed 1 Second</span>
  </div>
<h2>Multiselect</h2>
  <hr />
  <div>
    <md2-multiselect [items]="multiItems"
                     [item-text]="'name'"
                     [(ngModel)]="multiItem"
                     [disabled]="disabled"
                     (change)="change($event)"
                     placeholder="No city selected">
    </md2-multiselect>
    <pre>{{multiItem | json}}</pre>
    <md2-multiselect [items]="multiItems"
                     [item-text]="'name'"
                     [(ngModel)]="multiItem"
                     [disabled]="disabled"
                     (change)="change($event)"
                     placeholder="No city selected">
    </md2-multiselect>
  </div>
<h2>Select</h2>
  <hr />
  <div>
    <select [(ngModel)]="SelectItem" (change)="change($event)" placeholder="placeholder">
      <option [value]="i.value" *ngFor="let i of SelectItems">{{i.name}}</option>
    </select>
    <pre>{{item | json}}</pre>
    <md2-select [(ngModel)]="SelectItem" (change)="change($event)" [disabled]="disabled" placeholder="Hint text">
      <md2-option *ngFor="let i of SelectItems" [value]="i.value" [disabled]="i.disabled">{{i.name}}</md2-option>
    </md2-select>
  </div>
<h2>Tags</h2>
  <hr />
  <div>
    <md2-tags [md2-tags]="tags"
              md2-tag-text="name"
              [(ngModel)]="tag"
              (change)="change($event)"
              placeholder="+Tag">
    </md2-tags>
    <pre>{{tag | json}}</pre>
    <md2-tags [md2-tags]="tags"
              md2-tag-text="name"
              [(ngModel)]="tag"
              (change)="change($event)"
              placeholder="+Tag">
    </md2-tags>
  </div>
<h2>Toast</h2>
  <hr />
  <div>
    <button type="button" md-raised-button color="primary" (click)="toastMe()">Toast Me!</button>
  </div>
  `,
  styles: [`
    .collapse { display: none; }
    .collapse.in { display: block; }
    .collapsing { position: relative; height: 0; overflow: hidden; -moz-transition: height, visibility 0.35s ease; -o-transition: height, visibility 0.35s ease; -webkit-transition: height, visibility 0.35s ease; transition: height, visibility 0.35s ease; }
  `],
})
export class AppComponent {
  private accordions: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', active: true }
  ];

  multiple: boolean = false;

  private disabled: boolean = false;
  private items: Array<any> = [
    { name: 'Amsterdam', value: '1' },
    { name: 'Birmingham', value: '2' },
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' },
    { name: 'London', value: '5' },
    { name: 'Seville', value: '6' }
  ];
  private item: any;

  private isCollapsedContent: boolean = false;
  private isCollapsedImage: boolean = true;

  private color: string = '#123456';
  private color2: string = '#654321';
  private date: any = '2015-12-25';

  private dialogHeader: string = 'Lorum Ipsum';

  private launchDialog(dialog: any) {
    dialog.show();
  }

  private show(dialog: any) {
    dialog.show();
  }

  private close(dialog: any) {
    dialog.close();
  }
  private tabs: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3' }
  ];

  private change(tab: Event) {
    console.log('Tab Changed');
  };

  private dynamicTooltip: string = 'Hello, World!';
  private dynamicTooltipText: string = 'dynamic';
  private htmlTooltip: string = 'I\'ve been made <b>bold</b>!';

  private multiItems: Array<any> =
  [
    { name: 'Amsterdam', value: '1' },
    { name: 'Birmingham', value: '2' },
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' },
    { name: 'London', value: '5' },
    { name: 'Seville', value: '6' }
  ];
  private multiItem: Array<any> = [{ name: 'Birmingham', value: '2' }, { name: 'Dortmund', value: '3' }];
  private SelectItems: Array<any> =
  [
    { name: 'Amsterdam', value: '1', disabled: true },
    { name: 'Birmingham', value: '2', disabled: false },
    { name: 'Dortmund', value: '3', disabled: false },
    { name: 'Gothenburg', value: '4', disabled: true },
    { name: 'London', value: '5', disabled: false },
    { name: 'Seville', value: '6', disabled: true }
  ];
  private SelectItem: string = '3';

  private tags: Array<any> =
  [
    { name: 'Amsterdam', value: '1' },
    { name: 'Birmingham', value: '2' },
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' },
    { name: 'London', value: '5' },
    { name: 'Seville', value: '6' }
  ];
  private tag: Array<any> = [
    { name: 'Dortmund', value: '3' },
    { name: 'Gothenburg', value: '4' }
  ];
  constructor(private toast: Md2Toast) { }
  toastMe() {
    this.toast.toast('test message...');
  }
}
