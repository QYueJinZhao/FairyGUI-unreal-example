/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_HelpPopup {

	public m_InteractablePanel:fgui.GGraph;
	public m_Dot1:fgui.GImage;
	public m_text1:fgui.GTextField;
	public m_group:fgui.GGroup;
	public m_arrow2:fgui.GImage;
	public m_img1:fgui.GImage;
	public m_img2:fgui.GImage;
	public m_img3:fgui.GImage;
	public m_arrow1:fgui.GImage;
	public m_icon:fgui.GGroup;
	public static URL:string = "ui://tqsc8htvveax18";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "HelpPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_HelpPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_HelpPopup {
		var obj = new UI_HelpPopup();
		if(component==null){component = UI_HelpPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_Dot1 = <fgui.GImage>component.GetChild("Dot1");
		this.m_text1 = <fgui.GTextField>component.GetChild("text1");
		this.m_group = <fgui.GGroup>component.GetChild("group");
		this.m_arrow2 = <fgui.GImage>component.GetChild("arrow2");
		this.m_img1 = <fgui.GImage>component.GetChild("img1");
		this.m_img2 = <fgui.GImage>component.GetChild("img2");
		this.m_img3 = <fgui.GImage>component.GetChild("img3");
		this.m_arrow1 = <fgui.GImage>component.GetChild("arrow1");
		this.m_icon = <fgui.GGroup>component.GetChild("icon");
	}
}