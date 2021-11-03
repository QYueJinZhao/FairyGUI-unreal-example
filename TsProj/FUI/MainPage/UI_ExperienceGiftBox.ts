/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_ExperienceGiftBox {

	public m_button:fgui.GController;
	public m_n0:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://sn18zihkkmwr42";
	public static Package:string  = "MainPage";
	public static Component:string  = "ExperienceGiftBox";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_ExperienceGiftBox.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_ExperienceGiftBox {
		var obj = new UI_ExperienceGiftBox();
		if(component==null){component = UI_ExperienceGiftBox.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_t0 = component.GetTransition("t0");
	}
}