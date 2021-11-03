
import * as UE from 'ue'


import UI_MainTabWidget  from './FUI/MainPage/UI_MainTabWidget';
import UI_CompanyRoomCard  from './FUI/MainPage/UI_CompanyRoomCard';
import {$ref, $unref, $set, argv, on, toManualReleaseDelegate, releaseManualReleaseDelegate,itemRendererDelegate} from 'puerts';
import { binding } from 'ffi';

//成员访问
console.log("-------------------------111-----------------2-5---------");

let world = (argv.getByName("GameInstance") as UE.GameInstance).GetWorld();

var pak = UE.UIPackageAsset.Load('/Game/FUI/MainPage.MainPage');
var res = UE.UIPackage.AddPackage(pak, world);

console.log(world);

var mainview = UI_MainTabWidget.createInstance(null, world);
//UE.UIPackage.CreateObject('MainPage','MainTabWidget', world, UE.GComponent.StaticClass());

// 只能在客户端调用（服务端没有viewport）
mainview.view.SetParentToRoot();
//mainview.view.GetUIRoot().SetSize(new UE.Vector2D(1080,1920));
mainview.view.MakeFullScreen(true);

console.log('-----------------【测试】： 加载虚拟列表------------');
var itemList = mainview.m_CompanyRoomManage.m_frame.m_Content; // fgui.GList;

function OnListItemRenderer(Index: number, Obj: UE.GObject) : void {
    var item = UI_CompanyRoomCard.createInstance(Obj as UE.GComponent, world);

    item.m_Title.SetText(Index.toString());
    item.m_Desc.SetText('测试测试描述');
    item.m_Image.SetIcon("ui://sn18zihkhb0y1i");// hr
    item.m_Level.SetText("Lv1/15");
    item.m_Btn.m_Switcher.SetText('建造');
    item.m_Btn.m_Switcher.SetIcon("ui://MainPage/建造");
    var btn = item.m_Btn.view as UE.GButton;
    btn.SetTouchable(Index%2 == 0);
}

itemList.SetItemRenderer(toManualReleaseDelegate(OnListItemRenderer));
itemList.SetVirtual();
function OnBtnSwitchCompanyClick(cotext: UE.EventContext) : void {
    console.log("---添加列表--------------------------------------OnBtnSwitchCompanyClick---------");
    itemList.SetNumItems(itemList.GetNumItems()+1);
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