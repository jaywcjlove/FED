(function(){

var sreach = function(){
    this.data = null;
    this.ulhtml = '<div class="title"> <h3>$icon$<a target="_blank" href="$url$">$name$</a></h3> </div> <div class="tags"> $tags$ </div> <div class="description"> <p class="des">$des$</p> </div>';
    this.boxEml = document.getElementById('list-itme');
    this.inputElm = document.getElementById('search')
    this.info = document.getElementById('info')
    this.tagsEml = document.getElementById('tags')
    this.error = document.getElementById('error')
    this.loadingEml = document.getElementById("spinner")
    this.btnPreviewEml = document.getElementById("preview")
    this.page_size = 70;
    this.domainReg = /[a-zA-Z0-9]{0,62}.\/\/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
    this.page_no = 1,
    this.tags = [];

    this.inputElm.focus()

    if(this.boxEml){
        this.init();
    }
}
sreach.prototype = {
    // 搜索字符串里面是否存在关键字
    isSreachIndexOF:function(oldstr,kw){
        var istrue = false;
        if(oldstr&&toString.call(oldstr) === '[object Array]'){
            for (var i = 0; i < oldstr.length; i++) {
                oldstr[i].toLowerCase()===kw.toLowerCase()?istrue=true:null;
            }
            return istrue;
        }
        if(!oldstr || !kw) return false;
        return oldstr.toLowerCase().indexOf(kw.toLowerCase()) > -1 ? true : false;
    },
    //简单模版
    simple:function(str,obj){
        return str.replace(/\$\w+\$/gi, function(matchs) {
            var returns = obj[matchs.replace(/\$/g, "")];
            return typeof returns === "undefined" ? "" : returns;
        })
    },
    // loading1();
    loading:function (){
        var canvas = this.loadingEml,
            ctx = canvas.getContext("2d"),
            w = canvas.width,
            h = canvas.height,
            x = w/2,
            y = h/2,
            radius = 16;

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.globalAlpha =0.2
        ctx.fillRect(0,0,w,h);

        var r = [0.25,1,1.75,2.15,3,5];
        var angle = [10,25,45,65,90,120];
        var alpha = [0,0.25,0.35,0.45,0.65,0.8,1];
        var x1=[],y1=[];
        setInterval(function(){
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fillRect(0,0,w,h);
            x1 = [];
            y1 = [];
            for(var i = 0; i < r.length; i ++){
                if(angle[i] >= 360) angle[i] = 0;
                ctx.beginPath();
                ctx.font = "1rem sans-serif";
                ctx.fillStyle = "rgba(0,0,0,"+alpha[i]+")";
                x1.push( x + radius*Math.cos(angle[i]*Math.PI/180));
                y1.push( y + radius*Math.sin(angle[i]*Math.PI/180));
                ctx.arc(x1[i],y1[i],r[i],0,2*Math.PI, true);
                ctx.closePath();
                ctx.fill();
                angle[i] += 6;
            }
        },10);
    },
    //获取URL上面的参数
    getQueryString:function(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]); return null; 
    },
    ajax:function(url,callback){
        var xhr; 
        try {xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
        catch (e){
            try {   
                xhr = new ActiveXObject('Microsoft.XMLHTTP');    
            }catch (e2){
              try {  xhr = new XMLHttpRequest();     }
              catch (e3) {  xhr = false;   }
            }
         }
      
        xhr.onreadystatechange  = function(){ 
             if(xhr.readyState  == 4 && xhr.status  == 200){

                callback&&(callback(JSON.parse(xhr.responseText),xhr))
             }
        };
        xhr.open('GET', url,  true); 
        xhr.send(null); 
    },
    itemHTML:function(arr,type,keywolds){
        var name = arr.name,des = arr.des,self = this,
            reg = new RegExp("("+keywolds+")","ig");
        if(type === 'search'){
            name = arr.name.replace(reg,'<i class="kw">'+"$1"+"</i>");
            des = arr.des.replace(reg,'<i class="kw">'+"$1"+"</i>") || '';
        }
        return this.simple(this.ulhtml,{
            name:name,
            url:arr.url,
            des:des || '',
            icon:(function(){ 
                var dm = self.domainReg.exec(arr.url); 
                if(arr.icon){
                    return '<img src="'+arr.icon+'" />';
                }else{
                    if(dm && dm[0]){
                        return '<img src="'+dm[0]+'/favicon.ico"  onerror="this.remove()" />';
                    }else{
                        return '';
                    }
                }
            })(),
            tags:(function(tags){
                var _tags_html = tags.join('</span><span>');
                return _tags_html&&_tags_html!='' 
                    ? '<span>' + _tags_html + '</span>' 
                    : '';
            })(arr.tags||[])
        })
    },
    creatListHTML:function(num){
        var arr = this.data,self = this,page_size = this.page_size,i=num||0;
        if(arr&&arr.length&&toString.call(arr).indexOf('Array')>-1){
            for (; i < page_size; i++) {
                if(!arr[i]) break;
                var myLi = document.createElement("LI");
                myLi.innerHTML = self.itemHTML(arr[i]);
                self.boxEml.appendChild(myLi);
            }
        }
    },
    createSreachListHTML:function(keywolds){
        var eml = this.boxEml,
            self = this,
            arr = this.data,
            page_size = this.page_size,
            keywolds = keywolds.toLowerCase(),
            total = 0;

        for (var i = 0; i < arr.length; i++) {
            if(!arr[i]) break;
            if(total>page_size) break;
            if(self.isSreachIndexOF(arr[i].name,keywolds) 
                || self.isSreachIndexOF(arr[i].des,keywolds) 
            ){
                var myLi = document.createElement("LI");
                myLi.innerHTML = self.itemHTML(arr[i],'search',keywolds);
                ++total;
                eml.appendChild(myLi);
            }
        }
        
    },
    // 获取所有的tags
    getTagsAll:function(){
        var arr = this.data,tags = [];
        if(arr.length>0){
            for (var i = 0; i < arr.length; i++) {
                if(arr[i].tags&&arr[i].tags.length>0){
                    for(a in arr[i].tags){
                        tags.indexOf(arr[i].tags[a])===-1 ? tags.push(arr[i].tags[a]):null;
                    }
                }
            }
            this.tags=tags;
        }
    },
    // 创建tag列表
    createTagsHTML:function(keywolds){
        var html_str = '',self=this,
            elm = this.tagsEml,
            keywolds = keywolds.replace(/^(:|：)/,''),
            reg = new RegExp("("+keywolds+")","ig");

        elm.innerHTML = '';
        for (var i = 0; i < this.tags.length; i++) {
            var mySpan = document.createElement("SPAN");
            mySpan.innerHTML = this.tags[i].replace(reg,'<i class="kw">'+"$1"+"</i>");
            if( self.isSreachIndexOF(this.tags[i],keywolds) ){
                elm.appendChild(mySpan);
            }else if(keywolds ===''){
                elm.appendChild(mySpan);
            }
            // 绑定事件 tag 点击
            self.bindEvent(mySpan,'click',function(e){
                self.inputElm.value = ":"+this.innerText;
                self.changeKeyworlds(":"+this.innerText);
            })
        }
    },
    // 所在 tag 的列表
    createTagsListHTML:function(keywolds){
        var eml = this.boxEml,
            arr = this.data,
            self = this,
            page_size = this.page_size,
            total = 0,
            keywolds = keywolds.replace(/^(:|：)/,'');

        for (var i = 0; i < arr.length; i++) {
            if(!arr[i]) break;
            if(total>page_size) break;
            if(arr[i]&&arr[i].tags&&this.isSreachIndexOF(arr[i].tags,keywolds)){
                var myLi = document.createElement("LI");
                myLi.innerHTML = self.itemHTML(arr[i],'tags',keywolds);
                eml.appendChild(myLi);
                ++total;    
            }
            
        }
    },
    isErrorInfo:function(){
        var kw = this.getQueryString('kw');

        if(/^(:|：)/.test(kw)){
            this.tagsEml.className = 'show';
            this.createTagsHTML(kw)
            return;
        }else{
            this.tagsEml.className = 'hide';
        }
        this.boxEml.innerHTML == '' 
            ? this.error.className='error'
            : this.error.className='hide';
    },
    bindEvent:function(elm,type,handle){
        if (elm.addEventListener) {
            elm.addEventListener(type, handle, false); 
        } else if (elm.attachEvent)  {
            elm.attachEvent('on'+type, handle);
        }
    },
    // 是不是Tag搜索
    isTagSearch:function(val){
        return /^(:|：)/.test(val)?true:false;
    },
    valToHTML:function(val){
        var self = this;
        val?(self.isTagSearch(val)
                ?self.createTagsListHTML(val)
                :self.createSreachListHTML(val)
        )
        :self.creatListHTML();
        if(window.history && window.history.replaceState) {
            console.log(window.history)
            if (val) {
                history.replaceState({},"jsdig","?kw="+val);
            } else {
                history.replaceState({},"jsdig","?kw=");
            }
        }
        self.isErrorInfo(val);
    },
    changeKeyworlds:function(val){
        this.boxEml.innerHTML='';
        this.valToHTML(val);
    },
    init:function(){
        var self = this;
        this.loadingEml.style.display = 'block'
        this.loading();
        this.ajax('js/data.min.json',function(dt){
            self.loadingEml.style.display = 'none';
            self.data = dt;
            self.info.innerHTML = '搜集到<i> '+dt.length+' </i>个站点 ｜ ';
            var kw = self.getQueryString('kw');

            self.getTagsAll();
            
            // 绑定输入事件
            self.bindEvent(self.inputElm,'input',function(e){
                var val = e.target.value
                self.changeKeyworlds(val);
            })
            kw&&(self.inputElm.value=kw);
            self.valToHTML(kw);
        })
        this.bindEvent(this.btnPreviewEml,'click',function(e){
            var cls = e.target.firstChild.className;
            if(cls === 'view-type-list'){
                e.target.firstChild.className = 'view-type';
                self.boxEml.className = 'list-itme-grid';
            }else{
                e.target.firstChild.className = 'view-type-list';
                self.boxEml.className = '';
            }
        })
    }
}


new sreach();



})();