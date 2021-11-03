/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnEntrance from "./UI_BtnEntrance";

import * as fgui from "ue"
export default class UI_Entrance {

	public m_BtnEntrance:UI_BtnEntrance;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvj17p1j";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "Entrance";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Entrance.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Entrance {
		var obj = new UI_Entrance();
		if(component==null){component = UI_Entrance.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BtnEntrance =  UI_BtnEntrance.createInstance(component.GetChild("BtnEntrance") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}