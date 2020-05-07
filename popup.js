chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
	var arr = {
    "clientrequestpayload": {
        "contentset": "Scout",
        "contentsetpayloadid": "12",
        "requestcontext": "by user",
        "vendor": {
            "name": "aws",
            "isapiparameterincluded": "false"
        },
        "request": {
            "type": "sync",
            "sourcelanguagecode": "",
            "targetlanguagecode": "en",
            "deletetranslatedcontent": "false"
        },
        "sync": selection[0]
    }
};
	$.ajax({
	url:  "https://XXXX/development/services",
	headers: {
        'Authorization':'eyJraWXXXXXRmTXpPTG84cFFIMnVjbUdmd0QyMlBYND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2YzkzZTA0Yi0zYTBmLTQ0MzUtYmVlMi1lMWMzZmUzMTkxYTgiLCJhdWQiOiI3Ym0xaHBmdnMxNzFoaWJlbDJjN2MwMXEyMiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImQzNGM1NzUxLTY0ZGYtNDE5ZC1hZjA0LTliMmExMmRkOGZmMiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTg4NzUyNjg5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV80bHJqeWtVUEoiLCJjb2duaXRvOnVzZXJuYW1lIjoic2NvdXQiLCJleHAiOjE1ODg3NTYyODksImlhdCI6MTU4ODc1MjY4OSwiZW1haWwiOiJwdXNoa2FyLnBhbmRleUByZWZpbml0aXYuY29tIn0.m-LYfoFCtX8O_g3ZpR-ylofcVdm_CJt9sZWJt71vQhUJTHIHmftmJb_0iys-AvNeyG1u4_4Bev2THF7lJtePpqaKMjZm5n9_NPx4jz9QAmdh0Zda2XsNSwBgVNgofyQJEiwSUbSgssAXcMBfKgw1K5_lJJ4tm1jpFAT19zAeEViG_IBbuZWOZCemM7du83ZDhKQGsHBKHadqIFaFCGabZgZsG189_y838mguhjEsj1vWWdudnRY1FumYyOK7K4PvFskH8NKUK_hVNNJcTLlH2kitbBtF2K5eI1gMdcss4vgdMvDi0q6ZsxpKsabaHBzLCi9T2pMdtvZl6RJDfU1_qg',
        'x-api-key':'XX885kSTH58GWS9Xo',
        'Content-Type':'application/json'
    },
	type: "POST",
	data: JSON.stringify(arr),
	contentType: "application/json; charset=utf-8",
	timeout: 5000,
	accepts:"application/json",
	dataType:"json",
	crossDomain : true, //mandatory
	success: function (data, status, jqXHR) {
   			//alert("Success "+data);
   			var response = JSON.stringify(data.taasresponse.translatedtext);
   			//var response = JSON.parse(data);
   			 
   			document.getElementById("output").innerHTML = "Translated Text: "+ response;
   		
   			//
  			

   			},
	error: function (jqXHR, status) {
	// error handler
	//alert("Error: "+status);
	document.getElementById("output").innerHTML = "Error: "+status;
	}
});

   // document.getElementById("output").innerHTML = selection[0];
  //  document.getElementById("output").innerHTML = "text selected";
    
});
