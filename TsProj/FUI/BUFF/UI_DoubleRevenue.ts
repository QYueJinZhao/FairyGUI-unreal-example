/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Revenue from "./UI_Revenue";

import * as fgui from "ue"
export default class UI_DoubleRevenue {

	public m_n1:UI_Revenue;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip1b";
	public static Package:string  = "BUFF";
	public static Component:string  = "DoubleRevenue";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DoubleRevenue.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DoubleRevenue {
		var obj = new UI_DoubleRevenue();
		if(component==null){component = UI_DoubleRevenue.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n1 =  UI_Revenue.createInstance(component.GetChild("n1") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}