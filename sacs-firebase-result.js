    /**
     * `sacs-firebase-result`
     * 
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
    Polymer({
        is:'sacs-firebase-result',
        properties:{
            data:{
                type:Array,
                value:[]
            },
            operation:{
                type:String,
                value:""
            },
            variable:{
                type:String,
                value:''
            },
            result:{
                type:Number,
                value:0
            }
        },

        observers:[
            '_handleData(data)'
        ],

        _handleData: function(data){
             //console.log("FUERA..........................................................", data)
            if(data.value.length > 0){
                //console.log("CAMBIO DATA", data)
                //console.log("VARIABLE", this.variable)
                //console.log("OPERATION", this.operation)
       
                this._doCalculation(data.value);

            }

        },

        _doCalculation: function(data){

            this.set('result', 0);
            data.map(obj => {

                for(key in obj){
                    if( key === this.variable) {

                        //console.log("CALCULADO", this._calculate(obj[key]))
                        //console.log("OBJETO", obj)
                   
                            this.set('result', this._calculate(obj[key]))
                        
                        
                    }
                }
            });


        },

        _calculate: function(value){

            switch (this.operation){
                case 'addition': return this.result + value;
            }

        }
      });