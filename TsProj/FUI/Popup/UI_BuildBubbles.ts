/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnBuildBubbles from "./UI_BtnBuildBubbles";

import * as fgui from "ue"
export default class UI_BuildBubbles {

	public m_BtnBuildBubbles:UI_BtnBuildBubbles;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://n16w4m5p9ti14a";
	public static Package:string  = "Popup";
	public static Component:string  = "BuildBubbles";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BuildBubbles.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BuildBubbles {
		var obj = new UI_BuildBubbles();
		if(component==null){component = UI_BuildBubbles.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BtnBuildBubbles =  UI_BtnBuildBubbles.createInstance(component.GetChild("BtnBuildBubbles") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}