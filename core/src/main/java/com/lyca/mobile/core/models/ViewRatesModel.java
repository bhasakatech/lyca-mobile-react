package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    resourceType = "lyca-mobile/components/view-rates",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = {ViewRatesModel.class, ComponentExporter.class}
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class ViewRatesModel implements ComponentExporter {

    @ValueMapValue
    private String viewRatesText;

    @ValueMapValue
    private String simIcon;

    @ValueMapValue
    private String arrowIcon;

    @ValueMapValue
    private String viewRatesLink;

    public String getViewRatesText() {
        return viewRatesText;
    }

    public String getSimIcon() {
        return simIcon;
    }

    public String getArrowIcon() {
        return arrowIcon;
    }

    public String getViewRatesLink() {
        return viewRatesLink;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/view-rates";
    }
}