<template>
	<navigator :url="'../bookdetail/bookdetail?isbn='+data.isbn">
		<image :src="data.cover_url" mode="aspectFit" style="width:100%;height: 150px;"></image>
		<view style="font-size: 16px;text-align: center;width:100%;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">{{data.title}}</view>
	</navigator>
</template>

<script>
	export default{
		props:{
			data:{
				type:Object
			}
		},
		mounted() {
			
		}
	}
</script>
	
<style>
</style>
