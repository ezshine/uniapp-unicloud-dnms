'use strict';

const {appId,appSecret,getToken} = require('wx-common')

const db = uniCloud.database();

exports.main = async (event, context) => {
	const { code } = event;
	
	//GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
	const res = await uniCloud.httpclient.request(
		"https://api.weixin.qq.com/sns/jscode2session?appid="+appId+"&secret="+appSecret+"&js_code="+code+"&grant_type=authorization_code",
		{
			dataType:"json"
		}
	)
	
	const openid = res.data.openid;
	
	let dbRes = await db.collection("users").where({
		openid:openid
	}).limit(1).get();
	
	let token = getToken(openid);
	
	let userData;
	if(dbRes.affectedDocs<=0){
		userData = {
			nickName:"微信用户",
			avatarUrl:"",
			gender:0,
			country:"",
			province:"",
			city:""
		}
		//不要泄露用户的openid
		await db.collection("users").add({openid:openid,...userData});
	}else{
		userData = dbRes.data[0];
		
		//不要泄露用户的openid
		delete userData["openid"];
	}
	userData["token"]=token;
	
	return userData;
};
