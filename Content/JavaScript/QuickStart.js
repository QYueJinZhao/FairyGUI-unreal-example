"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const UI_MainTabWidget_1 = require("./FUI/MainPage/UI_MainTabWidget");
const UI_CompanyRoomCard_1 = require("./FUI/MainPage/UI_CompanyRoomCard");
const puerts_1 = require("puerts");
//成员访问
console.log("-------------------------111-----------------2-5---------");
let world = puerts_1.argv.getByName("GameInstance").GetWorld();
var pak = UE.UIPackageAsset.Load('/Game/FUI/MainPage.MainPage');
var res = UE.UIPackage.AddPackage(pak, world);
console.log(world);
var mainview = UI_MainTabWidget_1.default.createInstance(null, world);
//UE.UIPackage.CreateObject('MainPage','MainTabWidget', world, UE.GComponent.StaticClass());
// 只能在客户端调用（服务端没有viewport）
mainview.view.SetParentToRoot();
//mainview.view.GetUIRoot().SetSize(new UE.Vector2D(1080,1920));
mainview.view.MakeFullScreen(true);
console.log('-----------------【测试】： 加载虚拟列表------------');
var itemList = mainview.m_CompanyRoomManage.m_frame.m_Content; // fgui.GList;
function OnListItemRenderer(Index, Obj) {
    var item = UI_CompanyRoomCard_1.default.createInstance(Obj, world);
    item.m_Title.SetText(Index.toString());
    item.m_Desc.SetText('测试测试描述');
    item.m_Image.SetIcon("ui://sn18zihkhb0y1i"); // hr
    item.m_Level.SetText("Lv1/15");
    item.m_Btn.m_Switcher.SetText('建造');
    item.m_Btn.m_Switcher.SetIcon("ui://MainPage/建造");
    var btn = item.m_Btn.view;
    btn.SetTouchable(Index % 2 == 0);
}
itemList.SetItemRenderer((0, puerts_1.toManualReleaseDelegate)(OnListItemRenderer));
itemList.SetVirtual();
function OnBtnSwitchCompanyClick(cotext) {
    console.log("---添加列表--------------------------------------OnBtnSwitchCompanyClick---------");
    itemList.SetNumItems(itemList.GetNumItems() + 1);
}
mainview.m_BtnSwitchCompanyMangement.view.OnClick.Add(OnBtnSwitchCompanyClick);
console.log('-----------------【测试】： 加载字体、声音------------');
console.log('-----------------【测试】： 播放动效------------');
console.log('-----------------【测试】： 切换loader------------');
console.log('-----------------【测试】： 显示自适应');
/*

import UI_Main  from './FUI/TestPos/UI_Main';
import {$ref, $unref, $set, argv, on, toManualReleaseDelegate, releaseManualReleaseDelegate,itemRendererDelegate} from 'puerts';
import { binding } from 'ffi';

console.log("-------------------------执行脚本测试位置---------");

let world = (argv.getByName("GameInstance") as UE.GameInstance).GetWorld();

var pak = UE.UIPackageAsset.Load('/Game/FUI/TestPos.TestPos');
var res = UE.UIPackage.AddPackage(pak, world);

console.log(world);

var mainview = UI_Main.createInstance(null, world);
mainview.view.SetParentToRoot();
//mainview.view.GetUIRoot().SetSize(new UE.Vector2D(1080,1920));
mainview.view.MakeFullScreen(true);

console.log("-------------------------执行脚本结束---------");
*/ 
//# sourceMappingURL=QuickStart.js.map