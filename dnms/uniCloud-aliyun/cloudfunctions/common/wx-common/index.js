let jwt = require('jsonwebtoken');

const appId = '';
const appSecret = '';

const db = uniCloud.database();
async function requestNewAccessToken(){
	const res = await uniCloud.httpclient.request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appId+"&secret="+appSecret,{dataType:"json"});
	console.log("重新请求accesstoken");
	await db.collection("system").doc("6105504d6311030001bdaf07").update({
		accesstoken:{
			value:res.data.access_token,
			expiredtime:new Date().getTime()+7000000
		}
	});
	return res.data.access_token;
}
async function getAccessToken(forceupdate=false) {
	const dbRes = await db.collection("system").doc("6105504d6311030001bdaf07").get();
	const systemInfo = dbRes.data[0];
	
	const now = new Date().getTime();
	if(systemInfo.accesstoken.value&&!forceupdate){
		if(now>systemInfo.accesstoken.expiredtime){
			const accesstoken=await requestNewAccessToken();
			
			return accesstoken;
		}else{
			console.log("使用缓存的accesstoken");
			return systemInfo.accesstoken.value;
		}
	}else{
		const accesstoken=await requestNewAccessToken();
		
		return accesstoken;
	}
}
function getToken(openid){
	return jwt.sign({openid:openid},appSecret,{expiresIn:60*60*24});
}
function verifyToken(token){
	return jwt.verify(token,appSecret);
}

async function msgSecCheck(openid,content){
	const access_token = await getAccessToken();
	console.log("正在检测 "+content+" 的内容是否安全");
	const res = await uniCloud.httpclient.request("https://api.weixin.qq.com/wxa/msg_sec_check?access_token="+access_token,{
		method:"POST",
		dataType:"json",
		headers:{
			"Content-Type":"application/json"
		},
		data:{
			version:"2",
			openid:openid,
			scene:2,
			content:content
		}
	});
	console.log("检查结果",res);
	return res.data;
}

//https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=
async function getWXACodeUnlimited(scene,page){
	const access_token = await getAccessToken();
	const res = await uniCloud.httpclient.request("https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token="+access_token,{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		data:{
			scene:scene,
			page:page
		}
	});
	
	return res.data;
}

module.exports = {
  getAccessToken:getAccessToken,
  msgSecCheck:msgSecCheck,
  getWXACodeUnlimited:getWXACodeUnlimited,
  getToken:getToken,
  verifyToken:verifyToken,
  appId: appId,
  appSecret:appSecret
}