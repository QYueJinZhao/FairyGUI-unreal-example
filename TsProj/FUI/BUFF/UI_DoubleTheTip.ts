/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Tips from "./UI_Tips";

import * as fgui from "ue"
export default class UI_DoubleTheTip {

	public m_n4:UI_Tips;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip16";
	public static Package:string  = "BUFF";
	public static Component:string  = "DoubleTheTip";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DoubleTheTip.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DoubleTheTip {
		var obj = new UI_DoubleTheTip();
		if(component==null){component = UI_DoubleTheTip.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n4 =  UI_Tips.createInstance(component.GetChild("n4") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}