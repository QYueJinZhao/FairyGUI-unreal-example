/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Bubble from "./UI_Bubble";

import * as fgui from "ue"
export default class UI_BtnBubble {

	public m_button:fgui.GController;
	public m_n3:UI_Bubble;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://7zka63zlqqq9h";
	public static Package:string  = "TownEvent";
	public static Component:string  = "BtnBubble";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnBubble.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnBubble {
		var obj = new UI_BtnBubble();
		if(component==null){component = UI_BtnBubble.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_n3 =  UI_Bubble.createInstance(component.GetChild("n3") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}