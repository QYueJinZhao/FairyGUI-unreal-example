/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSigningBubble {

	public m_button:fgui.GController;
	public m_Bubble:fgui.GImage;
	public m_Signing:fgui.GImage;
	public static URL:string = "ui://n16w4m5p9ti14b";
	public static Package:string  = "Popup";
	public static Component:string  = "BtnSigningBubble";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSigningBubble.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSigningBubble {
		var obj = new UI_BtnSigningBubble();
		if(component==null){component = UI_BtnSigningBubble.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bubble = <fgui.GImage>component.GetChild("Bubble");
		this.m_Signing = <fgui.GImage>component.GetChild("Signing");
	}
}