(function(){"use strict";var e={4531:function(e,t,o){var a=o(9242),r=o(3396);function l(e,t,o,a,l,n){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}var n={name:"App",components:{}},s=o(89);const i=(0,s.Z)(n,[["render",l]]);var m=i,d=o(678);function c(e,t,o,a,l,n){const s=(0,r.up)("HeaderComp"),i=(0,r.up)("AddStudent"),m=(0,r.up)("StudentList");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{setOption:n.setOption},null,8,["setOption"]),"operateStudent"===l.option?((0,r.wg)(),(0,r.j4)(i,{key:0})):(0,r.kq)("",!0),"listStudent"===l.option?((0,r.wg)(),(0,r.j4)(m,{key:1})):(0,r.kq)("",!0)],64)}o(7658);var u=o(7139);const f={class:"container-fluid"},p={class:"d-flex justify-content-between",style:{margin:"1%"}},b=(0,r._)("h2",null,"On Boarding App",-1),h={class:"d-flex"},y={class:"btn-group mt-4 ms-4",role:"group"},g=(0,r._)("label",{class:"btn btn-outline-primary",for:"btnradio1"},"Onboarding Form",-1),v=(0,r._)("label",{class:"btn btn-outline-primary",for:"btnradio2"},"List Students",-1);function _(e,t,o,l,n,s){const i=(0,r.up)("UserIcon");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",p,[b,(0,r._)("div",h,[(0,r._)("h3",null,[(0,r.Wm)(i,{class:"me-2",style:{height:"40px",width:"40px"}}),(0,r.Uk)("Hello, "+(0,u.zw)(n.adminName),1)]),(0,r._)("button",{style:{height:"40px",width:"80px"},class:"btn btn-danger ms-2 me-2",onClick:t[0]||(t[0]=(...e)=>s.logout&&s.logout(...e))},"Logout")])]),(0,r._)("div",y,[(0,r.wy)((0,r._)("input",{value:"operateStudent",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1","onUpdate:modelValue":t[1]||(t[1]=e=>n.option=e),autocomplete:"off",checked:""},null,512),[[a.G2,n.option]]),g,(0,r.wy)((0,r._)("input",{value:"listStudent",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2","onUpdate:modelValue":t[2]||(t[2]=e=>n.option=e),autocomplete:"off"},null,512),[[a.G2,n.option]]),v])])}var w=o(94),D={name:"HeaderComp",components:{UserIcon:w.Z},props:{setOption:Function},data(){return{option:"operateStudent",adminName:""}},watch:{option(e){console.log(this.option),this.setOption(e)}},mounted(){let e=localStorage.getItem("admin");e&&(e=JSON.parse(e),this.adminName=e.name)},methods:{logout(){localStorage.removeItem("admin"),this.$router.push("/login")}}};const k=(0,s.Z)(D,[["render",_]]);var S=k;const C=(0,r._)("h5",{style:{"text-align":"center"}},"Onboarding Form",-1),x=(0,r._)("br",null,null,-1),N={class:"d-flex justify-content-center mt-2 mb-3"},O={class:"mb-2 row"},I=(0,r._)("label",{for:"name",class:"custom-label form-label"},"Student Name",-1),q={class:"col-sm-12"},U={key:0,style:{color:"red"}},V={class:"mb-2 row"},j=(0,r._)("label",{for:"category",class:"col-sm-2 col-form-label"},"Category",-1),E={class:"col-sm-12"},H=(0,r._)("option",{disabled:"",selected:"",value:"Category"},"Category",-1),F=(0,r._)("option",{value:"International"},"International",-1),M=(0,r._)("option",{value:"Domestic"},"Domestic",-1),A=[H,F,M],L={key:0,style:{color:"red"}},Z={key:0},$=(0,r._)("label",{for:"documents",class:"col-sm-2 col-form-label"},"Documents",-1),P={class:"form-check",style:{"margin-left":"27%"}},Y=["value","id"],J=["for"],R={key:0,style:{color:"red"}},B={key:0,style:{color:"red"}},z={class:"mb-2 row"},W=(0,r._)("label",{for:"dob",class:"custom-label form-label"},"DOB",-1),K={class:"col-sm-12"},T={key:0,style:{color:"red"}},G={class:"mb-2 row"},Q=(0,r._)("label",{for:"fatherName",class:"custom-label form-label"},"Father's Name",-1),X={class:"col-sm-12"},ee={key:0,style:{color:"red"}},te={class:"mb-2 row"},oe=(0,r._)("label",{for:"motherName",class:"custom-label form-label"},"Mother's Name",-1),ae={class:"col-sm-12"},re={key:0,style:{color:"red"}},le={class:"mb-2 row"},ne=(0,r._)("label",{for:"lastScore",class:"custom-label form-label"},"Last class score",-1),se={class:"col-sm-12"},ie={key:0,style:{color:"red"}},me={class:"mt-2 d-flex justify-content-center"},de=(0,r._)("button",{type:"submit",class:"btn btn-primary mx-2"},"Onboard",-1);function ce(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[C,x,(0,r._)("div",N,[(0,r._)("form",{onSubmit:t[9]||(t[9]=(0,a.iM)((e=>s.saveData()),["prevent"]))},[(0,r._)("div",O,[I,(0,r._)("div",q,[(0,r.wy)((0,r._)("input",{placeholder:"Enter Name",type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.name=e)},null,512),[[a.nr,n.form.name,void 0,{trim:!0}]]),n.error.indexOf("name")>-1?((0,r.wg)(),(0,r.iD)("span",U,"Enter non-empty valid name.")):(0,r.kq)("",!0)])]),(0,r._)("div",V,[j,(0,r._)("div",E,[(0,r.wy)((0,r._)("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.studentCategory=e),onChange:t[2]||(t[2]=(...e)=>s.getRequiredDocs&&s.getRequiredDocs(...e)),id:"category"},A,544),[[a.bM,n.form.studentCategory]]),n.error.indexOf("studentCategory")>-1?((0,r.wg)(),(0,r.iD)("span",L,"Select a category from the list.")):(0,r.kq)("",!0)])]),"Category"!==n.form.studentCategory?((0,r.wg)(),(0,r.iD)("div",Z,[$,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.reqDocuments,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o},[(0,r._)("div",P,[(0,r.wy)((0,r._)("input",{value:o,class:"form-check-input",type:"checkbox",id:"flexCheckChecked"+o,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.submittedDocuments=e)},null,8,Y),[[a.e8,n.form.submittedDocuments]]),(0,r._)("label",{class:"form-check-label",for:"flexCheckChecked"+o},[(0,r.Uk)((0,u.zw)(o)+" ",1),e?((0,r.wg)(),(0,r.iD)("span",R,"*")):(0,r.kq)("",!0)],8,J),-1==n.form.submittedDocuments.indexOf(o)&&e&&n.reqDocumentsFlag?((0,r.wg)(),(0,r.iD)("span",B,"Required")):(0,r.kq)("",!0)])])))),128))])):(0,r.kq)("",!0),(0,r._)("div",z,[W,(0,r._)("div",K,[(0,r.wy)((0,r._)("input",{type:"date",class:"form-control",id:"dob","onUpdate:modelValue":t[4]||(t[4]=e=>n.form.dob=e)},null,512),[[a.nr,n.form.dob]]),n.error.indexOf("dob")>-1?((0,r.wg)(),(0,r.iD)("span",T,"Enter a valid dob.")):(0,r.kq)("",!0)])]),(0,r._)("div",G,[Q,(0,r._)("div",X,[(0,r.wy)((0,r._)("input",{placeholder:"Enter Father's Name",type:"text",class:"form-control",id:"fatherName","onUpdate:modelValue":t[5]||(t[5]=e=>n.form.fatherName=e)},null,512),[[a.nr,n.form.fatherName,void 0,{trim:!0}]]),n.error.indexOf("fatherName")>-1?((0,r.wg)(),(0,r.iD)("span",ee,"Enter a valid non-empty name.")):(0,r.kq)("",!0)])]),(0,r._)("div",te,[oe,(0,r._)("div",ae,[(0,r.wy)((0,r._)("input",{placeholder:"Enter Mother's Name",type:"text",class:"form-control",id:"motherName","onUpdate:modelValue":t[6]||(t[6]=e=>n.form.motherName=e)},null,512),[[a.nr,n.form.motherName,void 0,{trim:!0}]]),n.error.indexOf("motherName")>-1?((0,r.wg)(),(0,r.iD)("span",re,"Enter a valid non-empty name.")):(0,r.kq)("",!0)])]),(0,r._)("div",le,[ne,(0,r._)("div",se,[(0,r.wy)((0,r._)("input",{placeholder:"Enter previous class score(%)",min:0,max:100,type:"number",class:"form-control",id:"lastScore","onUpdate:modelValue":t[7]||(t[7]=e=>n.form.lastScore=e)},null,512),[[a.nr,n.form.lastScore,void 0,{number:!0}]]),n.error.indexOf("lastScore")>-1?((0,r.wg)(),(0,r.iD)("span",ie,"Enter a valid score between 0-100.")):(0,r.kq)("",!0)])]),(0,r._)("div",me,[de,(0,r._)("button",{type:"button",class:"btn btn-info mx-2",onClick:t[8]||(t[8]=(...e)=>s.clearData&&s.clearData(...e))},"Clear")])],32)])],64)}var ue=o(3029),fe=o(4161),pe={name:"AddStudent",data(){return{form:{name:null,studentCategory:"Category",submittedDocuments:[],dob:null,fatherName:null,motherName:null,lastScore:null},reqDocuments:null,reqDocumentsFlag:!1,error:[]}},methods:{async getRequiredDocs(){let e="http://localhost:3000/";"International"===this.form.studentCategory?e+="international_docs":"Domestic"===this.form.studentCategory&&(e+="domestic_docs");let t=await fe.Z.get(e);this.reqDocuments=t.data},clearData(){this.form.studentCategory="Category",this.form.name=this.form.dob=this.form.fatherName=this.form.motherName=this.form.lastScore=null,this.error=[],this.reqDocumentsFlag=!1},validateFields(){this.error=[];for(let e in this.form)null!==this.form[e]&&0!==this.form[e].length&&"Category"!==this.form[e]||this.error.push(e)},saveData(){if(this.validateFields(),this.reqDocumentsFlag=!0,this.error.length>0)return;if("International"===this.form.studentCategory&&this.form.submittedDocuments.length<6)return;if("Domestic"===this.form.studentCategory&&this.form.submittedDocuments.length<4)return;const e={studentId:(0,ue.Z)(),name:this.form.name,studentCategory:this.form.studentCategory,submittedDocuments:this.form.submittedDocuments,dob:this.form.dob,fatherName:this.form.fatherName,motherName:this.form.motherName,lastScore:this.form.lastScore};let t=localStorage.getItem("studentArr")?JSON.parse(localStorage.getItem("studentArr")):[];t.push(e),localStorage.setItem("studentArr",JSON.stringify(t)),this.clearData()}}};const be=(0,s.Z)(pe,[["render",ce]]);var he=be;const ye=e=>((0,r.dD)("data-v-033f682f"),e=e(),(0,r.Cn)(),e),ge={class:"d-flex justify-content-between"},ve={class:"dropdown ms-5 mt-3 mb-4"},_e=ye((()=>(0,r._)("option",{selected:"",value:"All"},"All",-1))),we=ye((()=>(0,r._)("option",{value:"International"},"International",-1))),De=ye((()=>(0,r._)("option",{value:"Domestic"},"Domestic",-1))),ke=[_e,we,De],Se={class:"input-group ms-5 mt-3 me-4 mb-4",style:{width:"40%"}},Ce={key:0,class:"container-fluid d-flex flex-wrap justify-content-around"},xe={class:"card-body"},Ne={class:"card-title"},Oe={class:"card-subtitle mb-2 text-muted"},Ie=ye((()=>(0,r._)("hr",null,null,-1))),qe=ye((()=>(0,r._)("p",{style:{"font-weight":"400","text-align":"center"}},"click View for details",-1))),Ue={class:"d-flex justify-content-end me-3"},Ve=["onClick"],je=["onClick"],Ee=["onClick"];function He(e,t,o,l,n,s){const i=(0,r.up)("ModalComp");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i,{deleteId:n.deleteId,deleteStudent:s.deleteStudent},null,8,["deleteId","deleteStudent"]),(0,r._)("div",ge,[(0,r._)("div",ve,[(0,r.wy)((0,r._)("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=e=>n.category=e),onChange:t[1]||(t[1]=(...e)=>s.showByCategory&&s.showByCategory(...e))},ke,544),[[a.bM,n.category]])]),(0,r._)("div",Se,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Search student by name","onUpdate:modelValue":t[2]||(t[2]=e=>n.search=e),onInput:t[3]||(t[3]=()=>s.searchByName())},null,544),[[a.nr,n.search]])])]),n.students.length>0?((0,r.wg)(),(0,r.iD)("div",Ce,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.studentId},[(0,r._)("div",{class:"card m-4",style:(0,u.j5)([{width:"30rem","border-radius":"25px"},{backgroundColor:"International"===e.studentCategory?"lightblue":"orange"}])},[(0,r._)("div",xe,[(0,r._)("h4",Ne,(0,u.zw)(e.name),1),(0,r._)("h5",Oe,(0,u.zw)(e.studentCategory),1),Ie,qe]),(0,r._)("div",Ue,[(0,r._)("button",{type:"button",class:"btn btn-success",onClick:t=>this.$router.push(`/edit/${e.studentId}`)},"Edit",8,Ve),(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:t=>this.$router.push(`/view/${e.studentId}`)},"View",8,je),(0,r._)("button",{type:"button",class:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:t=>n.deleteId=e.studentId},"Delete",8,Ee)])],4)])))),128))])):(0,r.kq)("",!0)],64)}const Fe={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Me={class:"modal-dialog modal-dialog-centered"},Ae={class:"modal-content"},Le={class:"modal-header"},Ze=(0,r._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Delete Student",-1),$e={ref:"close",type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},Pe=(0,r._)("div",{class:"modal-body"}," Are you sure you want to delete ? ",-1),Ye={class:"modal-footer"},Je=(0,r._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},"No",-1);function Re(e,t,o,a,l,n){return(0,r.wg)(),(0,r.iD)("div",Fe,[(0,r._)("div",Me,[(0,r._)("div",Ae,[(0,r._)("div",Le,[Ze,(0,r._)("button",$e,null,512)]),Pe,(0,r._)("div",Ye,[(0,r._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=()=>{o.deleteStudent(o.deleteId),this.$refs.close.click()})},"Yes"),Je])])])])}var Be={name:"ModalComp",props:{deleteId:String,deleteStudent:Function},data(){return{}}};const ze=(0,s.Z)(Be,[["render",Re]]);var We=ze,Ke={name:"StudentList",data(){return{allData:[],students:[],deleteId:"",search:"",category:"All"}},mounted(){let e=localStorage.getItem("studentArr")?JSON.parse(localStorage.getItem("studentArr")):[];e.length>0&&(this.allData=this.students=e)},methods:{deleteStudent(e){let t=JSON.parse(localStorage.getItem("studentArr")),o=t.filter((t=>t.studentId!==e));localStorage.setItem("studentArr",JSON.stringify(o)),this.students=o},searchByName(){this.students=this.allData.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))),console.log(this.students)},showByCategory(){"All"===this.category?this.students=this.allData:"International"===this.category?this.students=this.allData.filter((e=>"International"===e.studentCategory)):this.students=this.allData.filter((e=>"Domestic"===e.studentCategory))}},components:{ModalComp:We}};const Te=(0,s.Z)(Ke,[["render",He],["__scopeId","data-v-033f682f"]]);var Ge=Te,Qe={name:"HomePage",components:{HeaderComp:S,AddStudent:he,StudentList:Ge},data(){return{option:"operateStudent"}},methods:{setOption(e){this.option=e}},mounted(){let e=localStorage.getItem("admin");console.log("admin",e),e||this.$router.push({name:"Login"})}};const Xe=(0,s.Z)(Qe,[["render",c]]);var et=Xe;function tt(e,t,o,a,l,n){const s=(0,r.up)("HeaderComp"),i=(0,r.up)("EditStudent"),m=(0,r.up)("StudentList");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{setOption:n.setOption},null,8,["setOption"]),"operateStudent"===l.option?((0,r.wg)(),(0,r.j4)(i,{key:0})):(0,r.kq)("",!0),"listStudent"===l.option?((0,r.wg)(),(0,r.j4)(m,{key:1})):(0,r.kq)("",!0)],64)}const ot=(0,r._)("h5",{style:{"text-align":"center"}},"Onboarding Form(Edit)",-1),at=(0,r._)("br",null,null,-1),rt={class:"d-flex justify-content-center mt-2 mb-3"},lt={class:"mb-2 row"},nt=(0,r._)("label",{for:"name",class:"custom-label form-label"},"Student Name",-1),st={class:"col-sm-12"},it={key:0,style:{color:"red"}},mt={class:"mb-2 row"},dt=(0,r._)("label",{for:"category",class:"col-sm-2 col-form-label"},"Category",-1),ct={class:"col-sm-12"},ut=(0,r._)("option",{disabled:"",selected:"",value:"Category"},"Category",-1),ft=(0,r._)("option",{value:"International"},"International",-1),pt=(0,r._)("option",{value:"Domestic"},"Domestic",-1),bt=[ut,ft,pt],ht={key:0,style:{color:"red"}},yt={key:0},gt=(0,r._)("label",{for:"documents",class:"col-sm-2 col-form-label"},"Documents",-1),vt={class:"form-check",style:{"margin-left":"27%"}},_t=["value","id"],wt=["for"],Dt={key:0,style:{color:"red"}},kt={key:0,style:{color:"red"}},St={class:"mb-2 row"},Ct=(0,r._)("label",{for:"dob",class:"custom-label form-label"},"DOB",-1),xt={class:"col-sm-12"},Nt={key:0,style:{color:"red"}},Ot={class:"mb-2 row"},It=(0,r._)("label",{for:"fatherName",class:"custom-label form-label"},"Father's Name",-1),qt={class:"col-sm-12"},Ut={key:0,style:{color:"red"}},Vt={class:"mb-2 row"},jt=(0,r._)("label",{for:"motherName",class:"custom-label form-label"},"Mother's Name",-1),Et={class:"col-sm-12"},Ht={key:0,style:{color:"red"}},Ft={class:"mb-2 row"},Mt=(0,r._)("label",{for:"lastScore",class:"custom-label form-label"},"Last class score",-1),At={class:"col-sm-12"},Lt={key:0,style:{color:"red"}},Zt={class:"mt-2 d-flex justify-content-center"},$t=(0,r._)("button",{type:"submit",class:"btn btn-primary mx-2"},"Onboard",-1);function Pt(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[ot,at,(0,r._)("div",rt,[(0,r._)("form",{onSubmit:t[9]||(t[9]=(0,a.iM)((e=>s.saveData()),["prevent"]))},[(0,r._)("div",lt,[nt,(0,r._)("div",st,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.name=e)},null,512),[[a.nr,n.form.name,void 0,{trim:!0}]]),n.error.indexOf("name")>-1?((0,r.wg)(),(0,r.iD)("span",it,"Enter non-empty valid name.")):(0,r.kq)("",!0)])]),(0,r._)("div",mt,[dt,(0,r._)("div",ct,[(0,r.wy)((0,r._)("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.studentCategory=e),onChange:t[2]||(t[2]=(...e)=>s.getRequiredDocs&&s.getRequiredDocs(...e)),id:"category"},bt,544),[[a.bM,n.form.studentCategory]]),n.error.indexOf("studentCategory")>-1?((0,r.wg)(),(0,r.iD)("span",ht,"Select a category from the list.")):(0,r.kq)("",!0)])]),"Category"!==n.form.studentCategory&&null!==n.reqDocuments?((0,r.wg)(),(0,r.iD)("div",yt,[gt,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.reqDocuments,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o},[(0,r._)("div",vt,[(0,r.wy)((0,r._)("input",{value:o,class:"form-check-input",type:"checkbox",id:"flexCheckChecked"+o,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.submittedDocuments=e)},null,8,_t),[[a.e8,n.form.submittedDocuments]]),(0,r._)("label",{class:"form-check-label",for:"flexCheckChecked"+o},[(0,r.Uk)((0,u.zw)(o)+" ",1),e?((0,r.wg)(),(0,r.iD)("span",Dt,"*")):(0,r.kq)("",!0)],8,wt),-1==n.form.submittedDocuments.indexOf(o)&&e&&n.reqDocumentsFlag?((0,r.wg)(),(0,r.iD)("span",kt,"Required")):(0,r.kq)("",!0)])])))),128))])):(0,r.kq)("",!0),(0,r._)("div",St,[Ct,(0,r._)("div",xt,[(0,r.wy)((0,r._)("input",{type:"date",class:"form-control",id:"dob","onUpdate:modelValue":t[4]||(t[4]=e=>n.form.dob=e)},null,512),[[a.nr,n.form.dob]]),n.error.indexOf("dob")>-1?((0,r.wg)(),(0,r.iD)("span",Nt,"Enter a valid dob.")):(0,r.kq)("",!0)])]),(0,r._)("div",Ot,[It,(0,r._)("div",qt,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"fatherName","onUpdate:modelValue":t[5]||(t[5]=e=>n.form.fatherName=e)},null,512),[[a.nr,n.form.fatherName,void 0,{trim:!0}]]),n.error.indexOf("fatherName")>-1?((0,r.wg)(),(0,r.iD)("span",Ut,"Enter a valid non-empty name.")):(0,r.kq)("",!0)])]),(0,r._)("div",Vt,[jt,(0,r._)("div",Et,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"motherName","onUpdate:modelValue":t[6]||(t[6]=e=>n.form.motherName=e)},null,512),[[a.nr,n.form.motherName,void 0,{trim:!0}]]),n.error.indexOf("motherName")>-1?((0,r.wg)(),(0,r.iD)("span",Ht,"Enter a valid non-empty name.")):(0,r.kq)("",!0)])]),(0,r._)("div",Ft,[Mt,(0,r._)("div",At,[(0,r.wy)((0,r._)("input",{min:0,max:100,type:"number",class:"form-control",id:"lastScore","onUpdate:modelValue":t[7]||(t[7]=e=>n.form.lastScore=e)},null,512),[[a.nr,n.form.lastScore,void 0,{number:!0}]]),n.error.indexOf("lastScore")>-1?((0,r.wg)(),(0,r.iD)("span",Lt,"Enter a valid score between 0-100.")):(0,r.kq)("",!0)])]),(0,r._)("div",Zt,[$t,(0,r._)("button",{type:"button",class:"btn btn-info mx-2",onClick:t[8]||(t[8]=(...e)=>s.clearData&&s.clearData(...e))},"Clear")])],32)])],64)}var Yt={name:"EditStudent",data(){return{form:{},reqDocuments:null,error:[],reqDocumentsFlag:!1}},mounted(){const e=(0,d.yj)().params.id;let t=localStorage.getItem("studentArr");t=JSON.parse(t);let o=t.filter((t=>t.studentId===e));this.form=o[0],this.getRequiredDocs()},methods:{async getRequiredDocs(){let e="http://localhost:3000/";"International"===this.form.studentCategory?e+="international_docs":"Domestic"===this.form.studentCategory&&(e+="domestic_docs");let t=await fe.Z.get(e);this.reqDocuments=t.data},clearData(){this.form.studentCategory="Category",this.form.name=this.form.dob=this.form.fatherName=this.form.motherName=this.form.lastScore=null,this.error=[],this.reqDocumentsFlag=!1},validateFields(){this.error=[];for(let e in this.form)null!==this.form[e]&&0!==this.form[e].length&&"Category"!==this.form[e]||this.error.push(e)},saveData(){if(this.validateFields(),this.reqDocumentsFlag=!0,this.error.length>0)return;if("International"===this.form.studentCategory&&this.form.submittedDocuments.length<6)return;if("Domestic"===this.form.studentCategory&&this.form.submittedDocuments.length<4)return;const e={studentId:this.form.studentId,name:this.form.name,studentCategory:this.form.studentCategory,submittedDocuments:this.form.submittedDocuments,dob:this.form.dob,fatherName:this.form.fatherName,motherName:this.form.motherName,lastScore:this.form.lastScore};let t=JSON.parse(localStorage.getItem("studentArr")),o=t.filter((e=>e.studentId!==this.form.studentId));o.push(e),localStorage.setItem("studentArr",JSON.stringify(o)),this.clearData()}}};const Jt=(0,s.Z)(Yt,[["render",Pt]]);var Rt=Jt,Bt={name:"EditPage",components:{HeaderComp:S,EditStudent:Rt,StudentList:Ge},data(){return{option:"operateStudent"}},methods:{setOption(e){this.option=e}}};const zt=(0,s.Z)(Bt,[["render",tt]]);var Wt=zt;function Kt(e,t,o,a,l,n){const s=(0,r.up)("HeaderComp"),i=(0,r.up)("ViewStudent"),m=(0,r.up)("StudentList");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{setOption:n.setOption},null,8,["setOption"]),"operateStudent"===l.option?((0,r.wg)(),(0,r.j4)(i,{key:0})):(0,r.kq)("",!0),"listStudent"===l.option?((0,r.wg)(),(0,r.j4)(m,{key:1})):(0,r.kq)("",!0)],64)}const Tt=(0,r._)("h5",{style:{"text-align":"center"}},"Onboarding Form(View)",-1),Gt=(0,r._)("br",null,null,-1),Qt={class:"d-flex justify-content-center mt-2 mb-3"},Xt={class:"mb-2 row"},eo=(0,r._)("label",{for:"name",class:"custom-label form-label"},"Student Name",-1),to={class:"col-sm-12"},oo={class:"mb-2 row"},ao=(0,r._)("label",{for:"category",class:"col-sm-2 col-form-label"},"Category",-1),ro={class:"col-sm-12"},lo=(0,r._)("option",{disabled:"",selected:"",value:"Category"},"Category",-1),no=(0,r._)("option",{value:"International"},"International",-1),so=(0,r._)("option",{value:"Domestic"},"Domestic",-1),io=[lo,no,so],mo={key:0},co=(0,r._)("label",{for:"documents",class:"col-sm-2 col-form-label"},"Documents",-1),uo={class:"form-check",style:{"margin-left":"27%"}},fo=["value","id"],po=["for"],bo={key:0,style:{color:"red"}},ho={class:"mb-2 row"},yo=(0,r._)("label",{for:"dob",class:"custom-label form-label"},"DOB",-1),go={class:"col-sm-12"},vo={class:"mb-2 row"},_o=(0,r._)("label",{for:"fatherName",class:"custom-label form-label"},"Father's Name",-1),wo={class:"col-sm-12"},Do={class:"mb-2 row"},ko=(0,r._)("label",{for:"motherName",class:"custom-label form-label"},"Mother's Name",-1),So={class:"col-sm-12"},Co={class:"mb-2 row"},xo=(0,r._)("label",{for:"lastScore",class:"custom-label form-label"},"Last class score",-1),No={class:"col-sm-12"},Oo=(0,r._)("div",{class:"mt-2 d-flex justify-content-center"},[(0,r._)("button",{disabled:"",type:"submit",class:"btn btn-primary mx-2"},"Onboard")],-1);function Io(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[Tt,Gt,(0,r._)("div",Qt,[(0,r._)("form",{onSubmit:t[8]||(t[8]=(0,a.iM)((t=>e.saveData()),["prevent"]))},[(0,r._)("div",Xt,[eo,(0,r._)("div",to,[(0,r.wy)((0,r._)("input",{disabled:"",type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.name=e)},null,512),[[a.nr,n.form.name,void 0,{trim:!0}]])])]),(0,r._)("div",oo,[ao,(0,r._)("div",ro,[(0,r.wy)((0,r._)("select",{disabled:"",class:"form-select","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.studentCategory=e),onChange:t[2]||(t[2]=(...t)=>e.getRequiredDocs&&e.getRequiredDocs(...t)),id:"category"},io,544),[[a.bM,n.form.studentCategory]])])]),"Category"!==n.form.studentCategory?((0,r.wg)(),(0,r.iD)("div",mo,[co,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.form.submittedDocuments,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o},[(0,r._)("div",uo,[(0,r.wy)((0,r._)("input",{disabled:"",value:e,class:"form-check-input",type:"checkbox",id:"flexCheckChecked"+o,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.submittedDocuments=e)},null,8,fo),[[a.e8,n.form.submittedDocuments]]),(0,r._)("label",{class:"form-check-label",for:"flexCheckChecked"+o},[(0,r.Uk)((0,u.zw)(e)+" ",1),e?((0,r.wg)(),(0,r.iD)("span",bo,"*")):(0,r.kq)("",!0)],8,po)])])))),128))])):(0,r.kq)("",!0),(0,r._)("div",ho,[yo,(0,r._)("div",go,[(0,r.wy)((0,r._)("input",{disabled:"",type:"date",class:"form-control",id:"dob","onUpdate:modelValue":t[4]||(t[4]=e=>n.form.dob=e)},null,512),[[a.nr,n.form.dob]])])]),(0,r._)("div",vo,[_o,(0,r._)("div",wo,[(0,r.wy)((0,r._)("input",{disabled:"",type:"text",class:"form-control",id:"fatherName","onUpdate:modelValue":t[5]||(t[5]=e=>n.form.fatherName=e)},null,512),[[a.nr,n.form.fatherName,void 0,{trim:!0}]])])]),(0,r._)("div",Do,[ko,(0,r._)("div",So,[(0,r.wy)((0,r._)("input",{disabled:"",type:"text",class:"form-control",id:"motherName","onUpdate:modelValue":t[6]||(t[6]=e=>n.form.motherName=e)},null,512),[[a.nr,n.form.motherName,void 0,{trim:!0}]])])]),(0,r._)("div",Co,[xo,(0,r._)("div",No,[(0,r.wy)((0,r._)("input",{disabled:"",min:0,max:100,type:"number",class:"form-control",id:"lastScore","onUpdate:modelValue":t[7]||(t[7]=e=>n.form.lastScore=e)},null,512),[[a.nr,n.form.lastScore,void 0,{number:!0}]])])]),Oo],32)])],64)}var qo={name:"ViewStudent",data(){return{form:{}}},mounted(){const e=(0,d.yj)().params.id;let t=localStorage.getItem("studentArr");t=JSON.parse(t);let o=t.filter((t=>t.studentId===e));this.form=o[0]}};const Uo=(0,s.Z)(qo,[["render",Io]]);var Vo=Uo,jo={name:"EditPage",components:{HeaderComp:S,ViewStudent:Vo,StudentList:Ge},data(){return{option:"operateStudent"}},methods:{setOption(e){this.option=e}}};const Eo=(0,s.Z)(jo,[["render",Kt]]);var Ho=Eo;const Fo=(0,r._)("h4",{class:"mt-5",style:{"text-align":"center"}},"Sign Up ",-1),Mo={class:"d-flex justify-content-center align-items-center mt-4 mb-3"},Ao={class:"mb-3"},Lo=(0,r._)("label",{for:"name",class:"form-label"},"Name",-1),Zo={class:"mb-3"},$o=(0,r._)("label",{for:"email",class:"form-label"},"Email address",-1),Po={class:"mb-3"},Yo=(0,r._)("label",{for:"pass",class:"form-label"},"Password",-1),Jo={class:"mt-2 d-flex justify-content-center"},Ro=(0,r._)("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1);function Bo(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[Fo,(0,r._)("div",Mo,[(0,r._)("form",{style:{width:"30%"},onSubmit:t[4]||(t[4]=(0,a.iM)(((...e)=>s.submit&&s.submit(...e)),["prevent"]))},[(0,r._)("div",Ao,[Lo,(0,r.wy)((0,r._)("input",{placeholder:"Enter Name",type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.name=e)},null,512),[[a.nr,n.form.name]])]),(0,r._)("div",Zo,[$o,(0,r.wy)((0,r._)("input",{placeholder:"Enter Email",type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.email=e)},null,512),[[a.nr,n.form.email]])]),(0,r._)("div",Po,[Yo,(0,r.wy)((0,r._)("input",{placeholder:"Enter Password",type:"password",autocomplete:"current-password",class:"form-control",id:"pass","onUpdate:modelValue":t[2]||(t[2]=e=>n.form.password=e)},null,512),[[a.nr,n.form.password]])]),(0,r._)("div",Jo,[Ro,(0,r._)("button",{type:"button",class:"btn btn-info",onClick:t[3]||(t[3]=e=>this.$router.push("/login"))},"Login")])],32)])],64)}var zo={name:"SignUpPage",data(){return{form:{name:"",email:"",password:""}}},methods:{async submit(){try{const e="http://localhost:3000/admins";let t=await fe.Z.post(e,this.form);return 201==t.status?(localStorage.setItem("admin",JSON.stringify(t.data)),void this.$router.push("/")):void 0}catch(e){console.log(e)}}},mounted(){let e=localStorage.getItem("admin");e&&this.$router.push({name:"Home"})}};const Wo=(0,s.Z)(zo,[["render",Bo]]);var Ko=Wo;const To=(0,r._)("h4",{class:"mt-5",style:{"text-align":"center"}},"Login",-1),Go={class:"d-flex justify-content-center align-items-center mt-4 mb-3"},Qo={class:"mb-3"},Xo=(0,r._)("label",{for:"email",class:"form-label"},"Email address",-1),ea={class:"mb-3"},ta=(0,r._)("label",{for:"pass",class:"form-label"},"Password",-1),oa={class:"mt-2 d-flex justify-content-center"},aa=(0,r._)("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1);function ra(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[To,(0,r._)("div",Go,[(0,r._)("form",{style:{width:"30%"},onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>s.submit&&s.submit(...e)),["prevent"]))},[(0,r._)("div",Qo,[Xo,(0,r.wy)((0,r._)("input",{placeholder:"Enter Email",type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.email=e)},null,512),[[a.nr,n.form.email]])]),(0,r._)("div",ea,[ta,(0,r.wy)((0,r._)("input",{placeholder:"Enter Password",type:"password",autocomplete:"current-password",class:"form-control",id:"pass","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.password=e)},null,512),[[a.nr,n.form.password]])]),(0,r._)("div",oa,[aa,(0,r._)("button",{type:"button",class:"btn btn-dark",onClick:t[2]||(t[2]=e=>this.$router.push("/sign-up"))},"Sign Up")])],32)])],64)}var la={name:"LoginPage",data(){return{form:{email:"",password:""}}},methods:{async submit(){try{const e=`http://localhost:3000/admins?email=${this.form.email}&password=${this.form.password}`;let t=await fe.Z.get(e);return 200==t.status&&t.data.length>0?(localStorage.setItem("admin",JSON.stringify(t.data[0])),void this.$router.push("/")):void 0}catch(e){console.log(e)}}},mounted(){let e=localStorage.getItem("admin");e&&this.$router.push({name:"Home"})}};const na=(0,s.Z)(la,[["render",ra]]);var sa=na;const ia=[{name:"Home",path:"/",component:et},{name:"Edit",path:"/edit/:id",component:Wt},{name:"View",path:"/view/:id",component:Ho},{name:"SignUp",path:"/sign-up",component:Ko},{name:"Login",path:"/login",component:sa}],ma=(0,d.p7)({history:(0,d.PO)(),routes:ia});var da=ma;o(5654);(0,a.ri)(m).use(da).mount("#app")}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,r,l){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],l=e[d][2];for(var s=!0,i=0;i<a.length;i++)(!1&l||n>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(s=!1,l<n&&(n=l));if(s){e.splice(d--,1);var m=r();void 0!==m&&(t=m)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,r,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,l,n=a[0],s=a[1],i=a[2],m=0;if(n.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var d=i(o)}for(t&&t(a);m<n.length;m++)l=n[m],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},a=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(4531)}));a=o.O(a)})();
//# sourceMappingURL=app.6a4652b1.js.map