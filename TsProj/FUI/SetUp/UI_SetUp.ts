/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnMusic from "./UI_BtnMusic";
import UI_BtnShock from "./UI_BtnShock";
import UI_BtnSoundEffect from "./UI_BtnSoundEffect";
import UI_BtnAdditiveGroup from "./UI_BtnAdditiveGroup";

import * as fgui from "ue"
export default class UI_SetUp {

	public m_Bg:fgui.GImage;
	public m_closeButton:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_BtnMusic:UI_BtnMusic;
	public m_BtnShock:UI_BtnShock;
	public m_BtnSoundEffect:UI_BtnSoundEffect;
	public m_NameText1:fgui.GTextField;
	public m_NameText2:fgui.GTextField;
	public m_NameText3:fgui.GTextField;
	public m_BtnAdditiveGroup:UI_BtnAdditiveGroup;
	public m_text:fgui.GTextField;
	public m_MailboxText:fgui.GTextField;
	public static URL:string = "ui://rnl6o1bldaci6";
	public static Package:string  = "SetUp";
	public static Component:string  = "SetUp";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SetUp.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SetUp {
		var obj = new UI_SetUp();
		if(component==null){component = UI_SetUp.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_BtnMusic =  UI_BtnMusic.createInstance(component.GetChild("BtnMusic") as fgui.GComponent, WorldContextObject);
		this.m_BtnShock =  UI_BtnShock.createInstance(component.GetChild("BtnShock") as fgui.GComponent, WorldContextObject);
		this.m_BtnSoundEffect =  UI_BtnSoundEffect.createInstance(component.GetChild("BtnSoundEffect") as fgui.GComponent, WorldContextObject);
		this.m_NameText1 = <fgui.GTextField>component.GetChild("NameText1");
		this.m_NameText2 = <fgui.GTextField>component.GetChild("NameText2");
		this.m_NameText3 = <fgui.GTextField>component.GetChild("NameText3");
		this.m_BtnAdditiveGroup =  UI_BtnAdditiveGroup.createInstance(component.GetChild("BtnAdditiveGroup") as fgui.GComponent, WorldContextObject);
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_MailboxText = <fgui.GTextField>component.GetChild("MailboxText");
	}
}