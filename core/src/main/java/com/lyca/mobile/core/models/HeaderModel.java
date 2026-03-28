package com.lyca.mobile.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;



@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        adapters = {HeaderModel.class, ComponentExporter.class},
        resourceType = HeaderModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class HeaderModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "lyca-mobile/components/header";

    // Logos
    @ValueMapValue
    private String logoImage;

    @ValueMapValue
    private String logoMobileImage;

    // Menu
    @ValueMapValue
    private String menuImage;

    @ValueMapValue
    private String menuMobileImage;

    // Simple multifield → list of strings
    @ValueMapValue
    private String[] linkLabel;

    // Quick Recharge
    @ValueMapValue
    private String quickRechargeLabel;

    @ValueMapValue
    private String quickRechargeUrl;

    // Profile
    @ValueMapValue
    private String profileImage;

    @ValueMapValue
    private String profileDropdownImage;

    // Cart
    @ValueMapValue
    private String cartImage;

    // Country
    @ValueMapValue
    private String countryLabel;

    @ValueMapValue
    private String countryImage;

    @ValueMapValue
    private String countryDropdownImage;

    // --- Getters ---
    public String getLogoImage() { return logoImage; }

    public String getLogoMobileImage() { return logoMobileImage; }

    public String getMenuImage() { return menuImage; }

    public String getMenuMobileImage() { return menuMobileImage; }

    public String[] getLinkLabel() { return linkLabel; }

    public String getQuickRechargeLabel() { return quickRechargeLabel; }

    public String getQuickRechargeUrl() { return quickRechargeUrl; }

    public String getProfileImage() { return profileImage; }

    public String getProfileDropdownImage() { return profileDropdownImage; }

    public String getCartImage() { return cartImage; }

    public String getCountryLabel() { return countryLabel; }

    public String getCountryImage() { return countryImage; }

    public String getCountryDropdownImage() { return countryDropdownImage; }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
