package com.lyca.mobile.core.models;

import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    adapters = AnnouncementBarModel.class,
    resourceType = AnnouncementBarModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class AnnouncementBarModel {

    public static final String RESOURCE_TYPE = "yourproject/components/announcementbar";

    @ValueMapValue
    private String message;

    @ValueMapValue
    private String imageUrl;

    @ValueMapValue
    private String linkUrl;

    public String getMessage() {
        return message;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getLinkUrl() {
        return linkUrl;
    }
}

