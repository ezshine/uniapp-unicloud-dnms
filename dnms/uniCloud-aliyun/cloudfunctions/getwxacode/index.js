'use strict';
const {getWXACodeUnlimited} = require('wx-common')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const scene = event.scene || "none";
	
	const result = await getWXACodeUnlimited(scene,event.page);
	
	return result
};
