/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_accelerate from "./UI_accelerate";

import * as fgui from "ue"
export default class UI_FullSpeedUp {

	public m_n1:UI_accelerate;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip19";
	public static Package:string  = "BUFF";
	public static Component:string  = "FullSpeedUp";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_FullSpeedUp.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_FullSpeedUp {
		var obj = new UI_FullSpeedUp();
		if(component==null){component = UI_FullSpeedUp.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n1 =  UI_accelerate.createInstance(component.GetChild("n1") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}