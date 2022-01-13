import { Injectable } from '@angular/core';
declare var document: any;

@Injectable({
  providedIn: 'root',
})
export class DinamicScriptsService {
  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
      };
    });
  }

  load(...scripts: string[]) {
    console.log({scripts})
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return this.cargaEnOrden(promises);
  }

  cargaEnOrden(promesas: Promise<any>[]) {
    return new Promise(async (resolve, reject) => {
      let data = [];
      let error = [];
      for (let i = 0; i < promesas.length; i++) {
        console.log(i)
        try {
          data.push(await promesas[i]);
        } catch (e) {
          error.push(e);
        }
      }

      resolve({ data, error });
    });
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {
          //IE
          script.onreadystatechange = () => {
            if (
              script.readyState === 'loaded' ||
              script.readyState === 'complete'
            ) {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {
          //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) =>
          resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'jquery', src: '../../../assets/vendor/jquery/jquery.min.js' },
  {
    name: 'boostrap',
    src: '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  },

  { name: 'custom', src: '../../../assets/js/custom.js' },
  { name: 'owl', src: '../../../assets/js/owl.js' },
  { name: 'slick', src: '../../../assets/js/slick.js' },
  { name: 'isotope', src: '../../../assets/js/isotope.js' },
  { name: 'accordions', src: '../../../assets/js/accordions.js' },
];
