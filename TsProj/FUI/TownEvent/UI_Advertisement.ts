/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnWindproofTreatment from "./UI_BtnWindproofTreatment";

import * as fgui from "ue"
export default class UI_Advertisement {

	public m_PopupBg:fgui.GImage;
	public m_closeButton:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_IconBottom:fgui.GImage;
	public m_icon:fgui.GLoader;
	public m_text:fgui.GTextField;
	public m_Button:UI_BtnWindproofTreatment;
	public static URL:string = "ui://7zka63zlqqq9p";
	public static Package:string  = "TownEvent";
	public static Component:string  = "Advertisement";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Advertisement.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Advertisement {
		var obj = new UI_Advertisement();
		if(component==null){component = UI_Advertisement.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_PopupBg = <fgui.GImage>component.GetChild("PopupBg");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_IconBottom = <fgui.GImage>component.GetChild("IconBottom");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_Button =  UI_BtnWindproofTreatment.createInstance(component.GetChild("Button") as fgui.GComponent, WorldContextObject);
	}
}