package com.lyca.mobile.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.*;


import javax.inject.Named;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Collections;

@Model(
    adaptables = Resource.class,
    resourceType = "lyca-mobile/components/already-with-lyca",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = {AlreadyWithLycaModel.class}
)
@Exporter(
    name = "jackson",
    extensions = "json"
)
public class AlreadyWithLycaModel {

    @ValueMapValue
    @Named("title")
    private String title;

    @ValueMapValue
    @Named("description")
    private String description;

    @ValueMapValue
    @Named("lycaNumber")
    private String lycaNumber;

    @ChildResource(name = "button")
    private List<Button> buttonList;

    @ValueMapValue
    @Named("appDownloadLink")
    private String appDownloadLink;

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
        return buttonList != null ? buttonList.stream().collect(Collectors.toList()) : Collections.emptyList();
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
