/*
 * Copyright (c) 2014 Samsung Electronics Co., Ltd.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 *        notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 *       copyright notice, this list of conditions and the following disclaimer
 *       in the documentation and/or other materials provided with the
 *       distribution.
 *     * Neither the name of Samsung Electronics Co., Ltd. nor the names of its
 *       contributors may be used to endorse or promote products derived from
 *       this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var xResolution,yResolution;
var SAAgent = null;
var SASocket = null;
var CHANNELID = 104;
var ProviderAppName = "ParkJockeyProvider";

function createHTML(log_string)
{
	var content = document.getElementById("toast-content");
	content.textContent = log_string;
	tau.openPopup("#toast");
}

function onerror(err) {
	console.log("err [" + err + "]");
}

var agentCallback = {
	onconnect : function(socket) {
		SASocket = socket;
		createHTML("ParkJockey Connection established with RemotePeer");
		SASocket.setSocketStatusListener(function(reason){
			console.log("Service connection lost, Reason : [" + reason + "]");
			disconnect();
		});
		SASocket.setDataReceiveListener(onreceive);
	},
	onerror : onerror
};

var peerAgentFindCallback = {
	onpeeragentfound : function(peerAgent) {
		try {
			if (peerAgent.appName == ProviderAppName) {
				SAAgent.setServiceConnectionListener(agentCallback);
				SAAgent.requestServiceConnection(peerAgent);
			} else {
				createHTML("Not expected app!! : " + peerAgent.appName);
			}
		} catch(err) {
			console.log("exception [" + err.name + "] msg[" + err.message + "]");
		}
	},
	onerror : onerror
}

function onsuccess(agents) {
	try {
		if (agents.length > 0) {
			SAAgent = agents[0];

			SAAgent.setPeerAgentFindListener(peerAgentFindCallback);
			SAAgent.findPeerAgents();
		} else {
			createHTML("Not found SAAgent!!");
		}
	} catch(err) {
		console.log("exception [" + err.name + "] msg[" + err.message + "]");
	}
}

function connect() {
	if (SASocket) {
		createHTML('Already connected!');
        return false;
    }
	try {
		webapis.sa.requestSAAgent(onsuccess, function (err) {
			console.log("err [" + err.name + "] msg[" + err.message + "]");
		});
	} catch(err) {
		console.log("exception [" + err.name + "] msg[" + err.message + "]");
	}
}

function disconnect() {
	try {
		if (SASocket != null) {
			SASocket.close();
			SASocket = null;
			createHTML("closeConnection");
		}
	} catch(err) {
		console.log("exception [" + err.name + "] msg[" + err.message + "]");
	}
}

function onreceive(channelId, data) {
	createHTML(data);
}

function fetch() {
	try {
		SASocket.sendData(CHANNELID, "Hello Accessory!");
	} catch(err) {
		console.log("exception [" + err.name + "] msg[" + err.message + "]");
	}
}


//to set height of main listing page according
// to device resolution
	function setHeightResolution(xResolution,yResolution){
		debugger;
		if(xResolution=="320" && yResolution=="320"){
     	// document.getElementsByClassName(elementName)
     	
		}
     else if(xResolution=="360" && yResolution=="480"){
    	// alert("doing so");
    	 $( ".dashdivgrp" ).removeClass("dashdivgrp").addClass("dashdivgrpLarge");
    	 $( "img" ).removeClass(" imageCommon").addClass(" imageCommonLarge");
    	 $( ".imageWithTextrgt" ).removeClass(" imageWithTextrgt").addClass(" imageWithTextrgtLarge");
    	 
     }else if(xResolution=="360" && yResolution=="360"){
     	
     }
	}
	
	//Page Before Show Starts
	var page=document.getElementById("main")
	page.addEventListener("pagebeforeshow",function(e){
		var xResolution=window.localStorage.getItem("xResolution");
		var yResolution=window.localStorage.getItem("yResolution");
		
		//Setting changes for Screen resolutions
		setHeightResolution(xResolution,yResolution);
		
		var serachImg=document.getElementById("serachImg");
		serachImg.addEventListener('click', function(){
			alert("going");
			tau.changePage("contents/googlemap.html");
			
		});
		
		
		//page before show Ends
	});
	
window.onload = function () {
    // add eventListener for tizenhwkey
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "main" ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	} );
    
 // to get screen resolutions
	    tizen.systeminfo.getPropertyValue("DISPLAY", function(disp) {
	            xResolution=disp.resolutionWidth;
	            window.localStorage.setItem("xResolution",xResolution);
	            yResolution=disp.resolutionHeight;
	            window.localStorage.setItem("yResolution",yResolution);
	            setTimeout(function(){
	            	 setHeightResolution(xResolution,yResolution);
	            }, 1000);
	           
     });
};

(function(tau) {
	var toastPopup = document.getElementById('toast');
	toastPopup.addEventListener('popupshow', function(ev){
		setTimeout(function(){tau.closePopup();}, 3000);
	}, false);
})(window.tau);


