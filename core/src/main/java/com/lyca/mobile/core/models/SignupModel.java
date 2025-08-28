package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = {Resource.class , SlingHttpServletRequest.class},
    adapters = { SignupModel.class, ComponentExporter.class },
    resourceType = SignupModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class SignupModel implements ComponentExporter {

    public static final String RESOURCE_TYPE = "lyca-mobile/components/signUp";

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String placeholder;

    @ValueMapValue
    private String buttonText;

    @ValueMapValue
    private String description;

    public String getTitle() {
        return title;
    }

    public String getPlaceholder() {
        return placeholder;
    }

    public String getButtonText() {
        return buttonText;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
