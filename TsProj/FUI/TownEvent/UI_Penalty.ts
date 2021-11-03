/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";

import * as fgui from "ue"
export default class UI_Penalty {

	public m_PenaltyPopupBg:fgui.GImage;
	public m_closeButton:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_IconBottom:fgui.GImage;
	public m_icon:fgui.GLoader;
	public m_text:fgui.GTextField;
	public m_coin:fgui.GImage;
	public m_text2:fgui.GTextField;
	public m_money:fgui.GTextField;
	public m_AmountOfDamages:fgui.GGroup;
	public static URL:string = "ui://7zka63zlqqq9k";
	public static Package:string  = "TownEvent";
	public static Component:string  = "Penalty";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Penalty.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Penalty {
		var obj = new UI_Penalty();
		if(component==null){component = UI_Penalty.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_PenaltyPopupBg = <fgui.GImage>component.GetChild("PenaltyPopupBg");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_IconBottom = <fgui.GImage>component.GetChild("IconBottom");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_coin = <fgui.GImage>component.GetChild("coin");
		this.m_text2 = <fgui.GTextField>component.GetChild("text2");
		this.m_money = <fgui.GTextField>component.GetChild("money");
		this.m_AmountOfDamages = <fgui.GGroup>component.GetChild("AmountOfDamages");
	}
}