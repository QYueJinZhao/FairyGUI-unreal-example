/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CoinsDynamicEffect1 from "./UI_CoinsDynamicEffect1";
import UI_CoinsDynamicEffect2 from "./UI_CoinsDynamicEffect2";
import UI_CoinsDynamicEffect3 from "./UI_CoinsDynamicEffect3";
import UI_CoinsDynamicEffect4 from "./UI_CoinsDynamicEffect4";
import UI_SettlementDynamicEffect from "./UI_SettlementDynamicEffect";
import UI_BtnReturn from "./UI_BtnReturn";

import * as fgui from "ue"
export default class UI_settlement {

	public m_InteractablePanel:fgui.GGraph;
	public m_CoinsDynamicEffect1:UI_CoinsDynamicEffect1;
	public m_CoinsDynamicEffect2:UI_CoinsDynamicEffect2;
	public m_CoinsDynamicEffect3:UI_CoinsDynamicEffect3;
	public m_CoinsDynamicEffect4:UI_CoinsDynamicEffect4;
	public m_SettlementDynamicEffect:UI_SettlementDynamicEffect;
	public m_InCome:fgui.GRichTextField;
	public m_Button:fgui.GLoader;
	public m_BtnReturn:UI_BtnReturn;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvpip1r";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "settlement";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_settlement.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_settlement {
		var obj = new UI_settlement();
		if(component==null){component = UI_settlement.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_CoinsDynamicEffect1 =  UI_CoinsDynamicEffect1.createInstance(component.GetChild("CoinsDynamicEffect1") as fgui.GComponent, WorldContextObject);
		this.m_CoinsDynamicEffect2 =  UI_CoinsDynamicEffect2.createInstance(component.GetChild("CoinsDynamicEffect2") as fgui.GComponent, WorldContextObject);
		this.m_CoinsDynamicEffect3 =  UI_CoinsDynamicEffect3.createInstance(component.GetChild("CoinsDynamicEffect3") as fgui.GComponent, WorldContextObject);
		this.m_CoinsDynamicEffect4 =  UI_CoinsDynamicEffect4.createInstance(component.GetChild("CoinsDynamicEffect4") as fgui.GComponent, WorldContextObject);
		this.m_SettlementDynamicEffect =  UI_SettlementDynamicEffect.createInstance(component.GetChild("SettlementDynamicEffect") as fgui.GComponent, WorldContextObject);
		this.m_InCome = <fgui.GRichTextField>component.GetChild("InCome");
		this.m_Button = <fgui.GLoader>component.GetChild("Button");
		this.m_BtnReturn =  UI_BtnReturn.createInstance(component.GetChild("BtnReturn") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}