<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/appmanager/App_TransactionAvgPrice.js此处编写
 -->
<template>
    <div>
        <view-grid :columns="columns"
                   :detail="detail"
                   :editFormFileds="editFormFileds"
                   :editFormOptions="editFormOptions"
                   :searchFormFileds="searchFormFileds"
                   :searchFormOptions="searchFormOptions"
                   :table="table">
        </view-grid>
    </div>
</template>

<script>
    import ViewGrid from "@/components/basic/ViewGrid.vue";
    var vueParam = {
        components: {
            ViewGrid
        },
        data() {
            return {
                table: {
                    key: 'Id',
                    footer: "Foots",
                    cnName: '自动绑定下拉框',
                    name: 'Avail_Home',
                    url: "/Avail_Home/",
                    sortName: "Id"
                },
                editFormFileds: {"Variety":[],"AgeRange":"","City":"","AvgPrice":"","Date":"","IsTop":"","Creator":"","CreateDate":"","Modifier":"","ModifyDate":""},
                editFormOptions: [[{"dataKey":"pz","data":[],"title":"品种","required":true,"field":"Variety","colSize":12,"type":"checkbox"}],
                              [{"dataKey":"age","data":[],"title":"月龄","required":true,"field":"AgeRange","colSize":12,"type":"select"}],
                              [{"dataKey":"city","data":[],"title":"城市","required":true,"field":"City","colSize":12,"type":"select"}],
                              [{"title":"成交均价","required":true,"field":"AvgPrice","colSize":12,"type":"decimal"}],
                              [{"title":"成交日期","required":true,"field":"Date","colSize":12,"type":"date"}],
                              [{"dataKey":"enable","data":[],"title":"测试","required":true,"field":"IsTop","colSize":12,"type":"select"}],
                              [{"title":"创建人","field":"Creator","disabled":true},
                               {"title":"创建时间","field":"CreateDate","disabled":true}],
                              [{"title":"修改人","field":"Modifier","disabled":true},
                               {"title":"修改时间","field":"ModifyDate","disabled":true}]],
                searchFormFileds: {"ScadaName":"","DeviceName":""},
                searchFormOptions: [[{"dataKey":"sn","data":[],"title":"Scada名称","field":"ScadaName","type":"select"},{"dataKey":"dn","data":[],"title":"设备名称","field":"DeviceName","type":"select"}]],
                columns: [{field:'Id',title:'主键ID',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DataIndex',title:'序号',type:'string',bind:{ key:'di',data:[]},width:90,require:true,align:'left',sortable:true},
                       {field:'ScadaId',title:'ScadaId',type:'string',bind:{ key:'si',data:[]},width:90,require:true,align:'left'},
                       {field:'ScadaName',title:'Scada名称',type:'string',bind:{ key:'sn',data:[]},width:90,require:true,align:'left'},
                       {field:'DeviceName',title:'设备名称',type:'string',link:true,width:80,require:true,align:'left'},
                       {field:'DeviceID',title:'设备ID',type:'string',width:90,require:true,align:'left',sortable:true},
                       {field:'DeviceType',title:'设备类型',type:'string',bind:{ key:'enable',data:[]},width:90,require:true,align:'left'},
                       {field:'Tag',title:'Tag点',type:'string',bind:{ key:'enable',data:[]},width:90,hidden:true,align:'left'},
                       {field:'Dashboard',title:'Dashboard',type:'string',width:90,hidden:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:90,readonly:true,align:'left',sortable:true}],
                detail: {
                    cnName:"#detailCnName",
                    columns: [],
                    sortName: "",
                    key:""
                }
            };
        }
    };
    export default vueParam;
</script>
