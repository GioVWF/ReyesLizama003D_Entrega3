import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Pruebas Unitarias',()=>{
    beforeEach(()=>{
        browser.get("/");
        
    });
    it("El login se muestra por defecto", ()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("login");  
    });

    it("El titulo se muestra correctamente", ()=>{
        expect(element(by.css("ion-tittle")).getText()).toContain("Save World")
    });
});



