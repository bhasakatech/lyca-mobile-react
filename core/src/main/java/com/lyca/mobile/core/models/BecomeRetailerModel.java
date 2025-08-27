package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.Exporter;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    adapters = { BecomeRetailerModel.class, ComponentExporter.class },
    resourceType = BecomeRetailerModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class BecomeRetailerModel implements ComponentExporter {

    protected static final String RESOURCE_TYPE = "lyca-mobile/components/become-retailer";

    @ValueMapValue
    private String mainImage;

    @ValueMapValue
    private String linkText;

    @ValueMapValue
    private String linkUrl;

    @ValueMapValue
    private String arrowImage;

    // Getters
    public String getMainImage() {
        return mainImage;
    }

    public String getLinkText() {
        return linkText;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public String getArrowImage() {
        return arrowImage;
    }

    // Required for SPA Editor / JSON Exporter
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
