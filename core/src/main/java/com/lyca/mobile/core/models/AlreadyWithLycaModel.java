package com.lyca.mobile.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.*;
import java.util.List;

@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        resourceType = AlreadyWithLycaModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = {ComponentExporter.class}
)
@Exporter(
    name = "jackson",
    extensions = "json"
)
public class AlreadyWithLycaModel implements ComponentExporter {

    static final String RESOURCE_TYPE="lyca-mobile/components/already-with-lyca";

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String lycaNumber;

    @ValueMapValue
    private String placeHolder;

    @ValueMapValue
    private String mobileIcon;

    @ValueMapValue
    private String mobileIconText;

    @ValueMapValue
    private String appDownloadText;

    @ValueMapValue
    private String appDownloadLink;


    @ChildResource()
    private List<Button> buttonList;



    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getLycaNumber() {
        return lycaNumber;
    }

    public String getAppDownloadLink() {
        return appDownloadLink;
    }
    public List<Button> getButtonList() {
        return buttonList;
    }

    public String getPlaceHolder() {
        return placeHolder;
    }

    public String getMobileIcon() {
        return mobileIcon;
    }

    public String getMobileIconText() {
        return mobileIconText;
    }

    public String getAppDownloadText() {
        return appDownloadText;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

    @Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
    public static class Button {

        @ValueMapValue
        private String buttonText;

         @ValueMapValue
        private String buttonLink;
        

        public String getButtonText() {
            return buttonText;
        }

        public String getButtonLink() {
            return buttonLink;
        }
    }
}
