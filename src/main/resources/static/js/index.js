
var validator;
$(function(){
	
	$('input,textarea,select').each(function(){
		$(this).attr('id',$(this).attr('name'));
	});
	
	$.validator.setDefaults({
		debug:true,
		submitHandler: function() {
		    alert("提交事件!");
		}
	});
	
	$.validator.addClassRules({
		required:{
			required:true
		}
	});
	
	//$.validator 对象的静态方法
	validator=$('#signUpForm').validate({
//		onsubmit:true,// 是否在提交表单时验证,默认true
//		focusInvalide:true,// 无效的表单项项自动回去焦点,默认true
//		onclick:true,// 点击时验证表单项, 适用于单/复选框
//		onfocusout:true,// 失去焦点时验证
//		focusCleanup:true,// 未通过验证的表单项获取焦点时清楚错误提示,默认true
//		onkeyup:true,// 按键弹起时验证,默认true
//		errorClass:'error', // 验证通过的class,默认是 error
//		validClass:'valid', // 验证失败的class,默认是 valid
		success:'success', // 验证通过后给提示label加一个class
		highlight:function(element,errorClass,validClass){ // 和errorClass,validClass一样都是针对的是表单元素的特效
			$(element).addClass(errorClass).removeClass(validClass);
			$(element).fadeOut().fadeIn();
		},
		unhighlight:function(element,errorClass,validClass){ // 和errorClass,validClass一样都是针对的是表单元素的特效
			$(element).addClass(validClass).removeClass(errorClass);
		},
		showErros:function(errorMap,errorList){
			console.log(errorMap);
			console.log(errorList);
			this.defauleShowErrors();
		},
		rules:{
			username:{
//				postcode:'中国',// 测试自定义验证规则
//				required:true,
				maxlength:10,// 限制字符串的最小长度
				minlength:{
					param:3,
					depends:function(element){ // 如果用户名填写了, 就限制为最少3位长度
						return $('#username').is(':filled');// validate的扩展选择器:blank(trim()后为空),:filled(trim()后不为空),:unchecked(未选中的复选框元素)
					}
				},
//				rangelength:[3,11],//字符串的长度范围
//				min:1,//最小数字
//				range:[1,999]//数字范围
				remote:{
					url:'/checkUserExist.json',
					type:'get',
					data:{
						loginTime:function(){
							return +new Date();
						}
					}
				}
			},
			password:{
				required:{
					depends:function(element){ // 如果用户名填写了, 密码就是必填的
						return $('#username').is(':filled');
					}
				},
				minlength:1,
				maxlength:9
			},
			password2:{
				equalTo:'#password'
			}
		},
		gronps:'username password password2',
//		errorPlacement:function(error,element){
//			error.insertBefore('#msg');
//		},
		errorLabelContainer:'#msg',// 错误提示信息容器
		errorContainer:'#sure',// 有错误信息时此容器内容显示, 无时显示
//		wrapper:'ul',// errorElement外面包裹的标签
//		errorElement:'li',// 错误提示标签, 默认是 label
		ignore:':hidden', // 忽略不需要验证的表单项, id/class选择器皆可, 默认忽略隐藏表单项
		submitHandler: function() {
		      alert("提交事件!");
		 },
		invalidHandler:function(event,validator){
//			console.log(event);
//			console.log(validator);
		},
		messages:{
			username:{
				required:'用户名不能为空'
			},
			password:{
				required:'密码不能为空'
			},
			password2:{
				equalTo:'两次输入的密码不一致'
			}
		}
	});
	
	//validator添加自定义验证方法
	$.validator.addMethod('postcode',function(value,element,params){
		var postcode=new RegExp('/^[0-9]{6}&/');
		return this.optional(element)/*元素为空时不验证*/ || (postcode.test(value));
	},$.validator.format('请填写正确的{0}邮政编码'));// {0}是params传入的第一个参数
	
});