/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CompanyWindowframe from "./UI_CompanyWindowframe";

import * as fgui from "ue"
export default class UI_CompanyRoomManage {

	public m_frame:UI_CompanyWindowframe;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://sn18zihkhb0y1m";
	public static Package:string  = "MainPage";
	public static Component:string  = "CompanyRoomManage";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_CompanyRoomManage.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_CompanyRoomManage {
		var obj = new UI_CompanyRoomManage();
		if(component==null){component = UI_CompanyRoomManage.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_frame =  UI_CompanyWindowframe.createInstance(component.GetChild("frame") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}