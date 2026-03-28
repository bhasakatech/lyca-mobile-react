package com.lyca.mobile.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
    adaptables = {Resource.class, SlingHttpServletRequest.class},
    resourceType = "lyca-mobile/components/announcement-bar",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = {AnnouncementBarModel.class, ComponentExporter.class}
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class AnnouncementBarModel implements ComponentExporter {

    @ValueMapValue
    private String announcementText;

    @ValueMapValue
    private String announcementImage;

    @ValueMapValue
    private String announcementLink;

    public String getAnnouncementText() {
        return announcementText;
    }

    public String getAnnouncementImage() {
        return announcementImage;
    }

    public String getAnnouncementLink() {
        return announcementLink;
    }

    @Override
    public String getExportedType() {
        return "lyca-mobile/components/announcement-bar";
    }
}
