package com.lyca.mobile.core.models;

import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(adaptables = Resource.class,
       adapters = HeaderModel.class,
       resourceType = HeaderModel.RESOURCE_TYPE,
       defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderModel {

    static final String RESOURCE_TYPE = "yourproject/components/header";

    @ValueMapValue
    private String logoImage;

    @ValueMapValue
    private String mobileLogoImage;

    @ValueMapValue
    private String menuImage;

    @ChildResource
    private List<NavLink> navLinks;

    @ValueMapValue
    private String quickRechargeText;

    @ValueMapValue
    private String profileImage;

    @ValueMapValue
    private String dropdownImage;

    @ValueMapValue
    private String cartImage;

    @ValueMapValue
    private String countryCode;

    @ValueMapValue
    private String countryFlag;

    public String getLogoImage() { return logoImage; }

    public String getMobileLogoImage() { return mobileLogoImage; }

    public String getMenuImage() { return menuImage; }

    public List<NavLink> getNavLinks() { return navLinks; }

    public String getQuickRechargeText() { return quickRechargeText; }

    public String getProfileImage() { return profileImage; }

    public String getDropdownImage() { return dropdownImage; }

    public String getCartImage() { return cartImage; }

    public String getCountryCode() { return countryCode; }

    public String getCountryFlag() { return countryFlag; }

    @Model(adaptables = Resource.class)
    public static class NavLink {
        @ValueMapValue
        private String text;

        @ValueMapValue
        private String url;

        public String getText() { return text; }

        public String getUrl() { return url; }
    }
}

