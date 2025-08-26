package com.lyca.mobile.core.models;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.Exporter;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
    adaptables = {Resource.class,SlingHttpServletRequest.class},
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    resourceType = "lyca-mobile/components/choose-a-plan",
    adapters = {ChooseAPlanModel.class, ComponentExporter.class}
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class ChooseAPlanModel implements ComponentExporter{

    @ValueMapValue
    private String planHeader;

    @ValueMapValue
    private String planDescription;

    @ChildResource(name = "planCards")
    private List<PlanCard> planCards;

    public String getPlanHeader() {
        return planHeader;
    }

    public String getPlanDescription() {
        return planDescription;
    }

    public List<PlanCard> getPlanCards() {
        return planCards;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/choose-a-plan";
    }

    @Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class PlanCard {

        @ValueMapValue
        private String cardTitle;

        @ValueMapValue
        private String cardText;

        @ValueMapValue
        private String cardImage;

        @ValueMapValue
        private String cardLink;

        public String getCardTitle() {
            return cardTitle;
        }

        public String getCardText() {
            return cardText;
        }

        public String getCardImage() {
            return cardImage;
        }

        public String getCardLink() {
            return cardLink;
        }
    }
}