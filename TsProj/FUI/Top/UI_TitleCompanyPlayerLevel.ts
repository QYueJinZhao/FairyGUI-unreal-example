/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnUpgrade from "./UI_BtnUpgrade";

import * as fgui from "ue"
export default class UI_TitleCompanyPlayerLevel {

	public m_BtnUpgrade:UI_BtnUpgrade;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://p6ocxgya95268";
	public static Package:string  = "Top";
	public static Component:string  = "TitleCompanyPlayerLevel";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TitleCompanyPlayerLevel.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TitleCompanyPlayerLevel {
		var obj = new UI_TitleCompanyPlayerLevel();
		if(component==null){component = UI_TitleCompanyPlayerLevel.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BtnUpgrade =  UI_BtnUpgrade.createInstance(component.GetChild("BtnUpgrade") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}