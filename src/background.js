chrome.webRequest.onHeadersReceived.addListener(function(details){
	for(var i = 0; i < details.responseHeaders.length; ++i)
		if(details.responseHeaders[i].name.toLowerCase() == 'content-disposition') {
			details.responseHeaders[i].value = '';
		}
	return {responseHeaders:details.responseHeaders};
}, {urls: ['https://bcee.snet.lu/*']}, ['blocking', 'responseHeaders']); 
