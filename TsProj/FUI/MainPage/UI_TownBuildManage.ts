/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_TownWindowframe from "./UI_TownWindowframe";

import * as fgui from "ue"
export default class UI_TownBuildManage {

	public m_windowframe:UI_TownWindowframe;
	public static URL:string = "ui://sn18zihkhb0y2h";
	public static Package:string  = "MainPage";
	public static Component:string  = "TownBuildManage";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TownBuildManage.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TownBuildManage {
		var obj = new UI_TownBuildManage();
		if(component==null){component = UI_TownBuildManage.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_windowframe =  UI_TownWindowframe.createInstance(component.GetChild("windowframe") as fgui.GComponent, WorldContextObject);
	}
}