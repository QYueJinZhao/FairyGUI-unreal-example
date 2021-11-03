/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_LuckyTurntableGroup from "./UI_LuckyTurntableGroup";
import UI_x from "./UI_x";

import * as fgui from "ue"
export default class UI_LuckyTurntable {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_LuckyTurntableGroup:UI_LuckyTurntableGroup;
	public m_closeButton:UI_x;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://tgre8ndbpip1c";
	public static Package:string  = "Turntable";
	public static Component:string  = "LuckyTurntable";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_LuckyTurntable.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_LuckyTurntable {
		var obj = new UI_LuckyTurntable();
		if(component==null){component = UI_LuckyTurntable.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_LuckyTurntableGroup =  UI_LuckyTurntableGroup.createInstance(component.GetChild("LuckyTurntableGroup") as fgui.GComponent, WorldContextObject);
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}