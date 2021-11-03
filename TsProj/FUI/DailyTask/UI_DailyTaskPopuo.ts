/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_DailyTaskWindowframe from "./UI_DailyTaskWindowframe";

import * as fgui from "ue"
export default class UI_DailyTaskPopuo {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_n0:UI_DailyTaskWindowframe;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://rr0e2yhyj17po";
	public static Package:string  = "DailyTask";
	public static Component:string  = "DailyTaskPopuo";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DailyTaskPopuo.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DailyTaskPopuo {
		var obj = new UI_DailyTaskPopuo();
		if(component==null){component = UI_DailyTaskPopuo.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_n0 =  UI_DailyTaskWindowframe.createInstance(component.GetChild("n0") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}