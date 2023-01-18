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
