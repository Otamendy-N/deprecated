module.exports = (client, message, messageArray, jackID, wamuID) => {
    
    class DNA{
        constructor(str, matingPool){
            this.genes = new Array(matingPool.length);
            this.pool = matingPool;
            this.fitness = 0;
            // rellenando los genes
            for (let i = 0; i < this.pool.length; i++) {
                let elem = this.pool[Math.floor(Math.random()*this.pool.length)];
                this.genes[i] = elem;
            }
        }
    }

    let msg = message.content.trim().toLowerCase().replace("."||","||"'"||'"'||"-"||" "||"_"||";"||":"||"?"||"!","m")
    // si, lo se... este if es muy bestia ;-;
    if (msg == "seraph" || msg == "eraph" || msg == "serfa" || msg == "seraf" || msg == "sraf" || msg == "srf")message.channel.send("holaalallalaa :D" + msg);

    // let arr = ["hola", "jamon", "comi", "fui", "a", "la", "hoy", "y", "cocina"];
    // const hola = new DNA(message, arr);
    // message.channel.send(hola.genes.join(' ') + ". \n NANI??");
}