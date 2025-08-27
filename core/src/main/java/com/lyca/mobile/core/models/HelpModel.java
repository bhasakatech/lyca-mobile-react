package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import java.util.List;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    resourceType = "lyca-mobile/components/help",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = {HelpModel.class, ComponentExporter.class}
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class HelpModel implements ComponentExporter {

    @ValueMapValue
    private String sectionHeader;

    @ChildResource(name = "helpCards")
    private List<HelpCard> helpCards;

    public String getSectionHeader() {
        return sectionHeader;
    }

    public List<HelpCard> getHelpCards() {
        return helpCards;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/help";
    }

    @Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class HelpCard {
        @ValueMapValue
        private String cardIcon;

        @ValueMapValue
        private String linkText1;

        @ValueMapValue
        private String linkUrl1;

        @ValueMapValue
        private String linkText2;

        @ValueMapValue
        private String linkUrl2;

        public String getCardIcon() {
            return cardIcon;
        }

        public String getLinkText1() {
            return linkText1;
        }

        public String getLinkUrl1() {
            return linkUrl1;
        }

        public String getLinkText2() {
            return linkText2;
        }

        public String getLinkUrl2() {
            return linkUrl2;
        }
    }
}