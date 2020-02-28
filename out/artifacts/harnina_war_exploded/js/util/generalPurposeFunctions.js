STORE.namespace("STORE.generalPurposeFunctions");
 

STORE.generalPurposeFunctions = {
  capital : function(string){       
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();    
    }

}