'use strict';
const {verifyToken} = require('wx-common')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const db = uniCloud.database();
	const dbCmd = db.command;
	const action = event.action;
	const payload = event.token?verifyToken(event.token):null;
	
	const now = new Date().getTime();
	
	let dbRes;
	if(action=="add"){
		
		const bookInfo = await db.collection("isbnlib").doc(event.isbnid).get();
		
		dbRes = await db.collection("books").add({
			owner:payload.openid,
			shelfid:event.shelfid,
			title:bookInfo.data[0].title,
			cover_url:bookInfo.data[0].cover_url,
			isbn:bookInfo.data[0].isbn,
			isbnid:event.isbnid,
			createtime:now,
			updatetime:now,
		});
		
		await db.collection("bookshelfs").where({
			owner:payload.openid,
			_id:event.shelfid,
		}).update({
			totalbook:dbCmd.inc(1)
		})
		
		return dbRes;
		
	}else if(action=="delete"){
		dbRes = await db.collection("books").where({
			_id:dbCmd.eq(event.bookid),
			owner:dbCmd.eq(payload.openid)
		}).remove();
		
		await db.collection("bookshelfs").where({
			owner:payload.openid,
			_id:event.shelfid,
		}).update({
			totalbook:dbCmd.inc(-1)
		})
		
		return dbRes;
	}else if(action=="movetop"){
		dbRes = await db.collection("books").where({
			_id:dbCmd.eq(event.bookid),
			owner:dbCmd.eq(payload.openid)
		}).update({
			updatetime:now
		});
		return dbRes;
	}else if(action=="listbyshelf"){
		
		let option = {
			shelfid:dbCmd.eq(event.shelfid)
		}
		
		if(event.start)option._id=dbCmd.lt(event.start);
		
		dbRes = await db.collection('books').field({owner:false})
		.where(option)
		.orderBy("updatetime","desc")
		.orderBy("_id","desc")
		.limit(12)
		.get()
	}else if(action=="listall"){
		let option = {}
		if(event.start)option._id=dbCmd.lt(event.start);
		if(event.keyword)option.title=new RegExp(event.keyword, 'i');
		
		dbRes = await db.collection('isbnlib').where(option)
		.orderBy("_id","desc")
		.orderBy("updatetime","desc")
		.limit(12)
		.get();
		
		// const $ = db.command.aggregate;
		// dbRes = await db.collection('books').aggregate().group({
		// 	"_id":"$isbnid",
		// 	"isbnid":$.last("$isbnid"),
		// 	"title":$.last("$title"),
		// 	"cover_url":$.last("$cover_url")
		// }).sort({
		// 	"_id":-1
		// }).match(option).limit(9).end();
		
	}else if(action=="get"){
		dbRes = await db.collection("isbnlib").where({
			isbn:dbCmd.eq(event.isbn)
		}).get();
		
		console.log(dbRes);
		
		let bookInfo = dbRes.data[0];
		
		bookInfo.abstract = bookInfo.abstract.replace(/\//g,"\r\n");
		
		return bookInfo;
	}
	
	//返回数据给客户端
	return dbRes.data;
};
