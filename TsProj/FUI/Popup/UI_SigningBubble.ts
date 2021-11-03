/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnSigningBubble from "./UI_BtnSigningBubble";

import * as fgui from "ue"
export default class UI_SigningBubble {

	public m_BtnSigningBubble:UI_BtnSigningBubble;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://n16w4m5p9ti14c";
	public static Package:string  = "Popup";
	public static Component:string  = "SigningBubble";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SigningBubble.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SigningBubble {
		var obj = new UI_SigningBubble();
		if(component==null){component = UI_SigningBubble.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BtnSigningBubble =  UI_BtnSigningBubble.createInstance(component.GetChild("BtnSigningBubble") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}