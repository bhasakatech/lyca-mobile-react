package com.lyca.mobile.core.models;

import java.util.List;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        resourceType = "lyca-mobile/components/how-it-works",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = {HowItWorksModel.class, ComponentExporter.class}
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class HowItWorksModel implements ComponentExporter {

    /** Section Header */
    @ValueMapValue(name = "headingText")
    private String headingText;

    /** Composite Multifield */
    @ChildResource(name = "steps")
    private List<CardItem> whyLycaCards;

    public String getHeadingText() {
        return headingText;
    }

    public List<CardItem> getWhyLycaCards() {
        return whyLycaCards;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/how-it-works";
    }

    /** Inner model for each multifield item */
    @Model(
            adaptables = Resource.class,
            defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class CardItem {

        @ValueMapValue
        private String img;

        @ValueMapValue
        private String title;

        @ValueMapValue
        private String text;

        public String getCardImage() {
            return img;
        }

        public String getCardTitle() {
            return title;
        }

        public String getCardDescription() {
            return text;
        }
    }

    
}
