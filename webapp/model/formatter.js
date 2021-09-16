sap.ui.define( function() {
	"use strict";


	var Formatter = {
        fldate : function(fvalue){
            if(!(fvalue instanceof Date)){
                fvalue = new Date(fvalue);
            }
        
        }
    }
});