function criaCalculadora (){
    return {
        display: document.querySelector(".display"),

        iniciaCalculadora(){
            console.log("iniciou");
            this.cliqueBotoes();
            this.pressEnter();
        },

        realizeOperation(){
            let operation = this.display.value;
            
            try{
                operation = eval(operation);

                if(!operation){
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(operation);
            } catch(e){
                alert("Conta inválida");
                return;
            }
        },

        pressEnter(){
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13){
                    this.realizeOperation();
                }
            });
        },

        cliqueBotoes: function (){
            document.addEventListener("click", (e) =>{
                const el = e.target;

                if (el.classList.contains("btn-number")){
                    this.btnDisplay(el.innerText);
                }
                if (el.classList.contains("btn-clear")){
                    this.clearAll();
                }
                if (el.classList.contains("btn-eraseOne")){
                    this.eraseOnlyOne();
                }
                if (el.classList.contains("btn-equal")){
                    this.realizeOperation();
                }
                this.display.focus();
            })
        },

        btnDisplay(valor){
            this.display.value += valor;
        },
        
        clearAll(){
            this.display.value = "";
        },

        eraseOnlyOne(){
            this.display.value = this.display.value.slice(0,-1);
        },
    }

}

const calculadora = criaCalculadora ();

calculadora.iniciaCalculadora();