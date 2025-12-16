package com.lyca.mobile.core.models;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
@Model(
    adaptables = { Resource.class, SlingHttpServletRequest.class },
    adapters = { PrepaidPlansModel.class, ComponentExporter.class },
    resourceType = "lyca-mobile/components/prepaid-cards",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = "jackson",
    extensions = "json"
)
public class PrepaidPlansModel implements ComponentExporter {

    /* ================= GENERAL TAB ================= */

    @ValueMapValue
    private String heading;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String bestValueLabel;

    @ValueMapValue
    private String longTermLabel;

    /* ================= PLANS MULTIFIELD ================= */

    @ChildResource(name = "plans")
    private List<PlanItem> plans;

    /* ================= EXISTING CUSTOMER ================= */

    @ValueMapValue
    private String existingTitle;

    @ChildResource(name = "existingOptions")
private List<ExistingOptionItem> existingOptions;


    /* ================= GETTERS ================= */

    public String getHeading() {
        return heading;
    }

    public String getDescription() {
        return description;
    }

    public String getBestValueLabel() {
        return bestValueLabel;
    }

    public String getLongTermLabel() {
        return longTermLabel;
    }

    public List<PlanItem> getPlans() {
        return plans;
    }

    public String getExistingTitle() {
        return existingTitle;
    }

    public List<ExistingOptionItem> getExistingOptions() {
    return existingOptions;
}


    /* ================= EXPORT ================= */

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/prepaid-cards";
    }

    @Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
    )
    public static class PlanItem {

        @ValueMapValue
        private String planTag;

        @ValueMapValue
        private String title;

        @ValueMapValue
        private String authoringLabel;

        @ValueMapValue
        private String price;

        @ValueMapValue
        private String duration;

       @ChildResource(name = "features")
        private List<FeatureItem> features;

        @ValueMapValue
        private String buyCta;

        @ValueMapValue
        private String basketCta;

        @ValueMapValue
        private String esimNote;

        /* ================= GETTERS ================= */

        public String getPlanTag() {
            return planTag;
        }

        public String getTitle() {
            return title;
        }

        public String getAuthoringLabel() {
            return authoringLabel;
        }

        public String getPrice() {
            return price;
        }

        public String getDuration() {
            return duration;
        }

        public List<FeatureItem> getFeatures() {
        return features;
    }

        public String getBuyCta() {
            return buyCta;
        }

        public String getBasketCta() {
            return basketCta;
        }

        public String getEsimNote() {
            return esimNote;
        }
    }

    @Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public static class FeatureItem {

    @ValueMapValue(name = "text")
    private String text;

    public String getText() {
        return text;
    }
}

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public static class ExistingOptionItem {

    @ValueMapValue(name = "text")
    private String text;

    public String getText() {
        return text;
    }
}


}

