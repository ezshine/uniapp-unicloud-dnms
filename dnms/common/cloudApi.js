let token;


function call(option){
	return new Promise((resolve,reject)=>{
		if(!option.data)option.data={};
		if(token)option.data.token = token;
		uni.showLoading();
		uniCloud.callFunction({
			name:option.name,
			data:option.data,
			success:(res)=>{
				if(res.result&&res.result.token)token = res.result.token;
				if(option.success)option.success(res);
				resolve(res);
			},
			fail:(err)=>{
				if(option.fail)option.fail(err);
				reject();
			},
			complete:()=>{
				uni.hideLoading();
				if(option.complete)option.complete();
			}
		});
	});
}

module.exports = {
	call:call
}