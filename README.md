Angular 11
--------------------------------------------------------------------------

    Pre-Requisites
        HTML 5
        CSS 3
        Bootstrap 5
        Javascript (ES6)
        REST API

    Introduction

        is a javascript / typescript based SPA framework.

        SPA - Single Page Application.

        Dynamic Web App

            Server                                      Client (Browser)
                Controllers <-----------REQ------------
                and Views   ------RESP (html+css+js)--->  unloads the existing page (if any)
                                                            and loads the newly received one.

        Single Page Application

            Server                                      Client
              spa-bundle        <-----------REQ-----
                index.html +    ----RESP (bundle)------->  load the index.html along with the assosiated JS.
                css +
                javascript                                 Any link / form / event are handled by the JS
                                                            on the client itself. any html content
                                                            to be changed will be generated on the client
                                                            and only a certain part / section of the page
                                                            is replaced with the newly generated html
                                                            content by the JS.

            db <--> rest-api    <---------REQ - CRUD-------
                                -------RESP (JSON) -------->

        AngularJS,Angular,ReactJS,VueJS ..... are a long list of spa libraries and frameworks.

        AngularJS           is a wholy native javascritp based library

        Angular 2,4,5,..15  is a typescript based framework.

    Typescript?

        Typescript = Javascript + typeSafty.


        Typescript offers string,number,boolean,undefiend,null,any,array,function as primitive datatypes.
                and also offers classes,enums,interfaces as user defiend datatypes.

        Typescript is not understood by any runtime; neither nodejs nor any browser.
        typescript has to be transpelled into javascript by compilers like babel.

        .js                                 .ts

            class Employee {                    class Employee {
                                                    private empId:number;
                                                    private name:string;
                                                    private sal:number;

                constructor(empId,name,sal){        constructor(empId:number,name:string,sal:number){
                    this.empId=empId;                   this.empId=empId;
                    this.name=name;                     this.name=name;
                    this.sal=sal;                       this.sal=sal;
                }                                   }

                tds(){                              tds():number{
                    return this.sal*0.10;               return this.sal*0.10;               
                }                                   }
            }                                   }

    
    Lab Setup

        VS Code         IDE

        NodeJS +         Development Env        nodejs.org                              node --version
        Angular CLI                             npm install -g @angular/cli@14.2.0      ng version

    NodeJS

        is a javascript runtime. Intended to enable stand alone execution of JS.

        a project development involves a varity of steps like

            code composition            IDE             VSCode
            code compilation            Compiler        babel
            packageing/bundling         Build tool      npm
            testing                     Testing Tool    Karma and Jasmine
            hosting                     Web Server      Angular Live Development Server

        now these tools like babel,npm,karma ..etc., need to run on the dev machine.
        and these tools are JS tools hence will execute on NodeJS on the dev machine.


    Angular Archetecture

        an angular application is made up of a variety of resources.
        each angular resource is a typescript class.
        each angular resource is marked with a decorator to identify its role.
        each angular decorator is supplied with a json object called meta-data.
        meta-data is config info of each resource.

        Modules
            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule {}

        Component Directives / Components
            @Component({
                selector:'',
                templateUrl:'',
                styelUrls:[],
                providers:[]
            })
            class DashboardComponent {}

        Attribute Directives 
            @Directive({
                selector:'',
                providers:[]
            })
            class HighlighterDirective {}

        Pipes
            @Pipe({
                name:'',
                providers:[]
            })
            class InWordsPipe {}

        Services
            @Injectable({
                providedIn:'root|any',
                providers:[]
            })
            class SalesService {}

    Angular CLI

        is a frontier of commands that help execute a varity of tasks on our application.

        ng new proj-name

        once inside the project:
        
        ng build               
            transpell all .ts into .js and bundles them. those files are avaialble in 'dist'.
        
        ng serve
            transpell all .ts into .js and bundles them. those files are hosted in a angular live
            development server @ 4200 port.
        
        nr serve --port 9089 -o
            transpell all .ts into .js and bundles them. those files are hosted in a angular live
            development server @ 9089 port. and will launch the app in a browser.

        ng test
            transpell all .ts into .js and bundles them, then will execue all the test cases.

        ng generate component ComponentName
        ng g component ComponentName
        ng g module ModuleName
        ng g directive DirectiveName
        ng g service ServiceName
        ng g pipe PipeName
        ng g class ClassName
        ng g interface InterfaceName

        '--skip-tests' flag along with ng g command to avoid creating test cases.

    Angular Modules

        JS modules and Angular modules are different and they live side-by-side in
        an angular app.

        An angular module is a logical unit for memory management. Each angular
        app has one and only top-level module called 'root-module'. All other
        modules are called 'feature-modules'.

            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule {}

            declarations    holds a list of all components,directive and pipes that belong to current module
            imports         holds a list of all feature-modules needed in current module.
            exports         holds a list of all components,directive and pipes that belong to current module and
                            are to be used by modules that import the current module.
                            'exports' section does not exist for 'root-module'.
            providers       holds a list of services that belong to the current module.
            bootstrap       this section is only for 'root-module'.
                            and holds a list of top-level components.

    Directives

        a directive allows html to be extended.

        it is possible to create our own html elements and attributes through directives.

        Directives used to create html elements are called Components or Component Directives.
        Directives sued to create html attributes are called Attribute Directives.
    
    Components

        a component is a new html element.
        component =     state and behaviour             view            presentation
                          typescript class          html template        style sheet
                           component.ts             component.html      component.css

        <dashborad></dashbord>              <h4 style="border:1px soldi black">My first app</h4>

        dashboard.component.ts 

            @Component({
                selector:'dashboard',
                templateUrl:'dashboard.component.html',
                styleUrls:['dashboard.component.css']
            })
            class DashboardComponent{
                title:string;

                constructor(){
                    this.title="My first app";
                }
            }

        dashboard.component.html

            <h4>{{title}}</h4>

        dashboard.component.css

            h4{
                border:1px solid black;
            }

    Data Binding

        is to bind the fields and methods of a component class to the DOM elements in
        the component template.

        Interpolation

            syntax:     {{js-expresion}}
            eg:         <h4>{{title}}</h4>

        Tow-Way Data Binding

            is used to bind a field to a form-element (input,select,textarea ..etc).

            initially the value of the field is loaded into the form-element, and
            whenever the form-element value is edited, the bound field is updated.

            we use an attribute directive 'ngModel' from 'FormsModule' from '@angular/forms'

                eg: <input type="text" [(ngModel)]="userName" />

        One-Way Date Binding
            Attribute Binding

                used to bind an javascript expression to any html-attribute or angular attribute directive.

                syntax: <tagName [attributeName]="expression" > tagContent </tagName>
                eg:     <table [border]="b" > ..... </table>

            Event Binding

                used to bind a method with an event-attribute-directive, so that - that method is invoked
                when that event occurs.

                event-attribute-directive = html-event-attribut - 'on'

                html-event-attribute        event-attribute-directives
                    onClick                     click
                    onFocus                     focus
                    onBlur                      blur
                    onnMouseOver                mouseover
                    onKeyUp                     keyup
                    ..etc.,                     ....etc.,

                syntax: <tagName (eventAttributeDirective)="method()"> ... </tagName>
                
            Style Binding

                used to bind an expression with a css-property.

                eg: <p [style.backgroundColor]="bgc" > Some Text </p>

            CSS Class Binding

                used to either apply/remove a css-class dynamically through a boolean field.

                syntax: <tagName [class.cssClassName]="booleanExpression"> ... </tagName> 

    Attribute Directives

        Event Attribute Directives

        Structural Directives

            *ngIf
            *ngFor
            ngSwitch    *ngSwitchCase *ngDefault

        Custom Directives

             @Directive({
                selector:'',
                providers:[]
            })
            class HighlighterDirective {}

    Pipes

            is used to tranform an expression just before it is rendered.

            lowercase
            uppercase
            titlecase
            number
            currency
            date
            json
            async

    Bootstrap Integration

        npm install bootstrap --save

        node_modules/bootstrap/dist/css/bootstrap.min.css
        node_modules/bootstrap/dist/js/bootstrap.min.js

        include these paths in the 'styles' and 'scripts' sections
        of angular.json file respectivly.

    Model using Typescript interface

        typescript interface can have fields and methods without implementations.

    Services

        are expected to hold bussiness logic like computations,
        validations or rest-api calls ...etc.,

        services are injectables meaning that a service object is
        supplied into any class by angular.

            constructor(private obj:MyService){
                //an obj of the MyService is injected here.
            }

        Each injector can supply exactly one object.
        Each resource has its own injector alongside the injector from its modules.

        app.module (ROOT)               root-injector
            |-DashBoardComponent         injector,root-injector
            |-HeaderComponent            injector,root-injector
            |-SalesModule               sales-injector
                |-OrdersComponent         injector,sales-injector,root-injector

    Routing

        enables us to display one of the components 
        based on the URL.

        RouterModule    from '@angular/router'

            Route            {path:'',component:C,pathMatch:'',redirectTo:'',children:[]}
            Routes           Route[]

            Router           service, 
                                navigateByUrl("complete/url/path"), 
                                navigate(['complete','url','path'])

            ActivatedRoute  service, data from the request like 
                            path-variables or query parmas

            router-outlet   component, that must be used in top-level component and
                            gets repalced by the matching component as per the current url.

            routerLink          attribute directive used on 'a' tag instead of its 'href'.

            routerLinkActive    attribute directive, it takes a css-class and that class
                                is applied on the 'a' tag whenever it is active.

    Assignment

        Create an Angular SPA to perform CRUD operation on 
        Employee model. 
            {id:0,firstName:'',lastName:'',mailId:'',basicPay:0,dept:''};
        The dept msut be choosen from a drop-down ('HR','Operations','Sales','Marketing')

    Angular Forms

        Template Driven                             Model Driven / Reactive

    ngForm,ngModel from FormsModule            FormControl,FormGroup from ReactiveFormsModule

    invalid,valid,dirty,prestine,touched,      invalid,valid,dirty,prestine,touched,
    untouched from ngModel                     untouched from FormControl

    the entire form is constructed in the      a form-model is created in the component 
    template and each input is bound to         and is mapped to the DOM in the template.
    fields in the component. 

    testing html templates is a little hard    testing a javascript snippet is much easier.

    is used in very simple senarios like        is used in larger complex senarios for
    a form having not more than two controls.   larger forms / nested forms ...etc.,
            

