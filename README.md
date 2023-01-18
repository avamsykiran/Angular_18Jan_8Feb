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

            Server                                      Client
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

        


