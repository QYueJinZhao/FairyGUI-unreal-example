/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_ElectricVehicle from "./UI_ElectricVehicle";

import * as fgui from "ue"
export default class UI_LoadingBar {

	public m_BG:fgui.GImage;
	public m_bar:fgui.GImage;
	public m_Electric_vehicle:UI_ElectricVehicle;
	public m_title:fgui.GTextField;
	public static URL:string = "ui://4pjqltd9952639";
	public static Package:string  = "CloudLoading";
	public static Component:string  = "LoadingBar";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_LoadingBar.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_LoadingBar {
		var obj = new UI_LoadingBar();
		if(component==null){component = UI_LoadingBar.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_bar = <fgui.GImage>component.GetChild("bar");
		this.m_Electric_vehicle =  UI_ElectricVehicle.createInstance(component.GetChild("Electric vehicle") as fgui.GComponent, WorldContextObject);
		this.m_title = <fgui.GTextField>component.GetChild("title");
	}
}