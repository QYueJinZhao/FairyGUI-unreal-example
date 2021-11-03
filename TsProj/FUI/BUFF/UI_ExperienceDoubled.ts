/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Experience from "./UI_Experience";

import * as fgui from "ue"
export default class UI_ExperienceDoubled {

	public m_n1:UI_Experience;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip1d";
	public static Package:string  = "BUFF";
	public static Component:string  = "ExperienceDoubled";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_ExperienceDoubled.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_ExperienceDoubled {
		var obj = new UI_ExperienceDoubled();
		if(component==null){component = UI_ExperienceDoubled.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n1 =  UI_Experience.createInstance(component.GetChild("n1") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}