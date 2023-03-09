class Is{
    thereemptyfield(data={}){
        let empty = false;
        for(let key in data){
            if(data[key] == ""){
                empty = true;
                break;
            }
        }
        return empty;
    }
    generateid(length){
        let Strings = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let Numbers = ["0","1","2","3","4","5","6","7","8","9"];
        let id = "";
        for(let i = 0; i < length; i++){
            let random = Math.floor(Math.random() * 2);
            if(random == 0){
                id += Strings[Math.floor(Math.random() * Strings.length)];
            }else{
                id += Numbers[Math.floor(Math.random() * Numbers.length)];
            }
        }
        return id;

      
        
    }
}

let is=new Is()
module.exports=is