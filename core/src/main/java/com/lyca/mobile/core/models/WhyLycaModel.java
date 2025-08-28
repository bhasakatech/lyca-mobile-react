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
    resourceType = "lyca-mobile/components/why-lyca",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = {WhyLycaModel.class, ComponentExporter.class}
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class WhyLycaModel implements ComponentExporter {

    @ValueMapValue
    private String sectionHeader;

    @ChildResource(name = "whyLycaCards")
    private List<WhyLycaCard> whyLycaCards;

    public String getSectionHeader() {
        return sectionHeader;
    }

    public List<WhyLycaCard> getWhyLycaCards() {
        return whyLycaCards;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/why-lyca";
    }

    @Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class WhyLycaCard {
        
        @ValueMapValue
        private String cardImage;

        @ValueMapValue
        private String cardTitle;

        @ValueMapValue
        private String cardDescription;

        public String getCardImage() {
            return cardImage;
        }

        public String getCardTitle() {
            return cardTitle;
        }

        public String getCardDescription() {
            return cardDescription;
        }
    }
}
