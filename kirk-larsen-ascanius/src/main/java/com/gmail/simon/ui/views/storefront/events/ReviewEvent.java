package com.gmail.simon.ui.views.storefront.events;

import com.vaadin.flow.component.ComponentEvent;
import com.gmail.simon.ui.views.orderedit.OrderEditor;

public class ReviewEvent extends ComponentEvent<OrderEditor> {

	public ReviewEvent(OrderEditor component) {
		super(component, false);
	}
}