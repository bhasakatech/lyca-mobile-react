package com.lyca.mobile.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        adapters = {CarouselModel.class, ComponentExporter.class},
        resourceType = CarouselModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class CarouselModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "lyca-mobile/components/carousel";

    // Multifield for carousel images
    @ValueMapValue
    private String[] carouselImages;

    // Getter
    public String[] getCarouselImages() {
        return carouselImages;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
