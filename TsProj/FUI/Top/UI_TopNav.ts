/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_TitleCompanyPlayerLevel from "./UI_TitleCompanyPlayerLevel";
import UI_BtnSetting from "./UI_BtnSetting";
import UI_TitleCompanyGold from "./UI_TitleCompanyGold";

import * as fgui from "ue"
export default class UI_TopNav {

	public m_enlarge:UI_TitleCompanyPlayerLevel;
	public m_TitleCompanyPlayerLevel:UI_TitleCompanyPlayerLevel;
	public m_BtnSetting:UI_BtnSetting;
	public m_TitleCompanyGold:UI_TitleCompanyGold;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://p6ocxgya9526t";
	public static Package:string  = "Top";
	public static Component:string  = "TopNav";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TopNav.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TopNav {
		var obj = new UI_TopNav();
		if(component==null){component = UI_TopNav.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_enlarge =  UI_TitleCompanyPlayerLevel.createInstance(component.GetChild("enlarge") as fgui.GComponent, WorldContextObject);
		this.m_TitleCompanyPlayerLevel =  UI_TitleCompanyPlayerLevel.createInstance(component.GetChild("TitleCompanyPlayerLevel") as fgui.GComponent, WorldContextObject);
		this.m_BtnSetting =  UI_BtnSetting.createInstance(component.GetChild("BtnSetting") as fgui.GComponent, WorldContextObject);
		this.m_TitleCompanyGold =  UI_TitleCompanyGold.createInstance(component.GetChild("TitleCompanyGold") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}